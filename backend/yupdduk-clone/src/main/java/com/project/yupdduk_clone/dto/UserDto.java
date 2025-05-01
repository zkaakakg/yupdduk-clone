package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.User;
import com.project.yupdduk_clone.enumeration.UserRole;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phone;
    private LocalDate birthDate;
    private String provider;
    private UserRole userRole;

    public UserDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.birthDate = user.getBirthDate();
        this.provider = user.getProvider();
        this.userRole = user.getUserRole();
    }

    public UserDto(Long id, String name, String email, UserRole userRole) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.birthDate = birthDate;
        this.userRole = userRole;
    }

    public User toEntity() {
        return User.builder()
                .name(name)
                .email(email)
                .password(password)
                .phone(phone)
                .birthDate(birthDate)
                .provider("normal")
                .userRole(userRole)
                .build();
    }
}
