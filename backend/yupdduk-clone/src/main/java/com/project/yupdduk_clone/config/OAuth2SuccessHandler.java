package com.project.yupdduk_clone.config;

import com.project.yupdduk_clone.config.jwt.JwtTokenProvider;
import com.project.yupdduk_clone.entity.User;
import com.project.yupdduk_clone.entity.UserRepository;
import com.project.yupdduk_clone.enumeration.UserRole;
import com.project.yupdduk_clone.service.OAuthAttributes;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.Optional;


@Slf4j
@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    private final String REDIRECT_URI = "http://localhost:3000/oauth/callback";

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {

        OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
        OAuth2User oAuth2User = oauthToken.getPrincipal();
        String provider = oauthToken.getAuthorizedClientRegistrationId();

        // OAuth2User에서 정보 추출
        Map<String, Object> attributes = oAuth2User.getAttributes();
        OAuthAttributes userInfo = OAuthAttributes.of(provider, attributes);

        // 사용자 정보 조회 또는 생성
        User user = saveOrUpdate(userInfo);

        // JWT 토큰 생성
        String accessToken = jwtTokenProvider.createToken(user.getEmail(), user.getUserRole());

        String encodedEmail = URLEncoder.encode(user.getEmail(), StandardCharsets.UTF_8);
        String encodedName = URLEncoder.encode(user.getName(), StandardCharsets.UTF_8);

        // 프론트엔드로 리다이렉트 (토큰 포함)
        String targetUrl = UriComponentsBuilder.fromUriString(REDIRECT_URI)
                .queryParam("token", accessToken)
                .queryParam("email", encodedEmail)
                .queryParam("name", encodedName)
                .build().toUriString();

        log.info("OAuth2 Login Success, Redirect to: {}", targetUrl);
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }

    private User saveOrUpdate(OAuthAttributes attributes) {
        // 먼저 providerId로 조회 시도
        Optional<User> byProviderAndId = userRepository.findByProviderAndProviderId(
                attributes.getProvider(), attributes.getProviderId());

        if (byProviderAndId.isPresent()) {
            User existingUser = byProviderAndId.get();
            existingUser.update(attributes.getName(), attributes.getPicture());
            return userRepository.save(existingUser);
        }

        // providerId로 조회 실패시 이메일로 조회 시도
        Optional<User> byEmail = userRepository.findByEmail(attributes.getEmail());

        if (byEmail.isPresent()) {
            User existingUser = byEmail.get();
            existingUser.update(attributes.getName(), attributes.getPicture());
            return userRepository.save(existingUser);
        }

        // 신규 사용자 생성
        User newUser = User.builder()
                .name(attributes.getName())
                .email(attributes.getEmail())
                .picture(attributes.getPicture())
                .provider(attributes.getProvider())
                .providerId(attributes.getProviderId())
                .userRole(UserRole.USER)
                .build();

        return userRepository.save(newUser);
    }
}
