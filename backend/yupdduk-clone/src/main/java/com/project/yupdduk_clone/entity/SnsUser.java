package com.project.yupdduk_clone.entity;

import com.project.yupdduk_clone.enumeration.UserRole;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "sns_users")
public class SnsUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    private String picture;

    @Column(nullable = false)
    private String provider; // google, naver, kakao

    @Column(nullable = false)
    private String providerId; // 제공자의 고유 ID

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role", nullable = false)
    private UserRole role;

    @Builder
    public SnsUser(String name, String email, String picture,String provider, String providerId, UserRole role) {
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.provider=provider;
        this.providerId=providerId;
        this.role = role;
    }

    public SnsUser update(String name, String picture) {
        this.name = name;
        this.picture = picture;

        return this;
    }

    public String getRoleKey() {
        return this.role.getValue();
    }
}
