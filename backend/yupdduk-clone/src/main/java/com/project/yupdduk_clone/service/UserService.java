package com.project.yupdduk_clone.service;

import com.project.yupdduk_clone.dto.UserDto;
import com.project.yupdduk_clone.entity.User;
import com.project.yupdduk_clone.entity.UserRepository;
import com.project.yupdduk_clone.enumeration.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void signUp(UserDto userDto) {
        String encodedPassword = passwordEncoder.encode(userDto.getPassword());
        userDto.setPassword(encodedPassword);
        this.userRepository.save(userDto.toEntity());

    }

    public Optional<User> getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // SNS 로그인일 경우
        if (authentication instanceof OAuth2AuthenticationToken) {
            OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
            OAuth2User oAuth2User = oauthToken.getPrincipal();
            String registrationId = oauthToken.getAuthorizedClientRegistrationId(); // "google", "naver", "kakao"

            String email = null;

            if ("naver".equals(registrationId)) {
                Map<String, Object> response = oAuth2User.getAttribute("response");
                if (response != null) {
                    email = (String) response.get("email");
                }
            } else if ("kakao".equals(registrationId)) {
                Map<String, Object> account = oAuth2User.getAttribute("kakao_account");
                if (account != null) {
                    email = (String) account.get("email");
                }
            } else {
                // google
                email = oAuth2User.getAttribute("email");
            }

            if (email != null) {
                return userRepository.findByEmail(email);
            }

            // SNS 로그인에서 이메일 정보 추출
            String currentUserEmail = oAuth2User.getAttribute("email");

            // SNS 로그인에서 이메일을 찾고 사용자 정보를 반환
            Optional<User> user = userRepository.findByEmail(currentUserEmail);
            return user;
        }

        // 일반 로그인일 경우
        else if (authentication instanceof UsernamePasswordAuthenticationToken) {
            String currentUserEmail = authentication.getName();  // 일반 로그인에서 이메일을 가져옴

            Optional<User> user = userRepository.findByEmail(currentUserEmail);
            return user;
        }
        return Optional.empty();
    }

    public void deleteUser(Optional<User> optionalUser) {
        User user = optionalUser.get();
        userRepository.delete(user);
    }

    public List<UserDto> getUserList(){
        List<User> users = userRepository.findAll();
        List<UserDto> userDtos = users.stream()
                .map(user -> new UserDto(user.getId(), user.getName(), user.getEmail(), user.getUserRole()))
                .collect(Collectors.toList());
        return userDtos;
    }

    public UserDto getUserDetail(Long userId){
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()){
            return new UserDto(user.get());
        }else{
            throw new IllegalStateException("사용자를 찾을 수 없습니다.");
        }
    }

    public void updateRole(Long userId, String userRole){
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            UserRole role = UserRole.valueOf(userRole);
            user.get().updateRole(role);
            userRepository.save(user.get());
        }else{
            throw new IllegalStateException("사용자를 찾을 수 없습니다.");

        }
    }
}
