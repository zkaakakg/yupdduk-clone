package com.project.yupdduk_clone.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name")
    private String userName;

    @Column(unique = true)
    private String email;

    @Column
    private String password;

    @Column
    private String phone;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(name = "user_role")
    private String userRole;

    @Builder
    public User(Long id, String userName, String email, String password ,String phone, LocalDate birthDate, String userRole){
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.birthDate = birthDate;
        this.userRole = userRole;
    }
}
