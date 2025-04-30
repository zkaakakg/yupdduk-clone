package com.project.yupdduk_clone.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Entity
@Table(name = "stores")
@Getter
@NoArgsConstructor
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "store_name", unique = true)
    private String storeName;

    @Column(name = "manager_name")
    private String managerName;

    @Column
    private String address;

    @Column(name = "store_phone")
    private String storePhone;

    @Column(name = "open_time")
    private LocalTime openTime;

    @Column(name = "close_time")
    private LocalTime closeTime;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Store(Long id, String storeName, String managerName, String address, String storePhone, LocalTime openTime, LocalTime closeTime, User user) {
        this.id = id;
        this.storeName = storeName;
        this.managerName = managerName;
        this.address = address;
        this.storePhone = storePhone;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.user = user;
    }

}
