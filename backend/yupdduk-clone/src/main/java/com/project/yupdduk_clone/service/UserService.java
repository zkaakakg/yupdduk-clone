package com.project.yupdduk_clone.service;

import com.project.yupdduk_clone.dto.UserDto;
import com.project.yupdduk_clone.entity.User;
import com.project.yupdduk_clone.entity.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
        String currentUserEmail = authentication.getName();

        Optional<User> user = userRepository.findByEmail(currentUserEmail);
        return user;
    }

    public void deleteUser(Optional<User> optionalUser) {
        User user = optionalUser.get();
        userRepository.delete(user);
    }
}
