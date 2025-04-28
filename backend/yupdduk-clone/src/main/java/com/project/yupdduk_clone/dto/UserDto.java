package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.User;
import lombok.*;

import java.time.LocalDate;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    private Long id;
    private String userName;
    private String email;
    private String password;
    private String phone;
    private LocalDate birthDate;
    private String userRole;

    public User toEntity(){
        return User.builder()
                .userName(userName)
                .email(email)
                .password(password)
                .phone(phone)
                .birthDate(birthDate)
                .userRole(userRole)
                .build();
    }
}
