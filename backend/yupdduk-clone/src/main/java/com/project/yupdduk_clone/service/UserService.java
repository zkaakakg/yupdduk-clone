package com.project.yupdduk_clone.service;

import com.project.yupdduk_clone.dto.UserDto;
import com.project.yupdduk_clone.entity.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void signUp(UserDto userDto){
        String encodedPassword = passwordEncoder.encode(userDto.getPassword());
        userDto.setPassword(encodedPassword);
        this.userRepository.save(userDto.toEntity());

    }

}
