package com.project.yupdduk_clone.entity;

import com.project.yupdduk_clone.enumeration.UserRole;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name")
    private String name;

    @Column(unique = true)
    private String email;

    @Column
    private String password;

    @Column
    private String phone;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    private String picture;

    @Column
    private String provider; // google, naver, kakao

    @Column
    private String providerId; // 제공자의 고유 ID

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role", nullable = false)
    private UserRole userRole;

    @OneToOne(mappedBy = "user")
    private Store store;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @Builder
    public User(Long id, String name, String email, String password ,String phone, LocalDate birthDate,String picture, String provider, String providerId, UserRole userRole){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.birthDate = birthDate;
        this.picture= picture;
        this.provider = provider;
        this.providerId=providerId;
        this.userRole = userRole;
    }

    public User update(String name, String picture) {
        this.name = name;
        this.picture = picture;

        return this;
    }

    public String getRoleKey() {
        return this.userRole.getValue();
    }
}
