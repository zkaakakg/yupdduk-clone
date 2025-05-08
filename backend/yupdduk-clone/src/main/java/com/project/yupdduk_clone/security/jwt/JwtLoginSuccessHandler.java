package com.project.yupdduk_clone.security.jwt;

import com.project.yupdduk_clone.enumeration.UserRole;
import io.jsonwebtoken.io.IOException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtLoginSuccessHandler implements AuthenticationSuccessHandler {
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, java.io.IOException {
        String email = authentication.getName();
        UserRole role = UserRole.valueOf(
                authentication.getAuthorities().iterator().next().getAuthority().replace("ROLE_",""));
        String token = jwtTokenProvider.createToken(email, role);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write("{\"token\": \"" + token + "\"}");

    }
}
