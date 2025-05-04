package com.project.yupdduk_clone.entity;

import com.project.yupdduk_clone.enumeration.OrderStatus;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
@Getter
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_time")
    private LocalDateTime orderTime;

    @Column(name = "total_price")
    private Integer totalPrice;

    @Enumerated(EnumType.STRING)
    @Column(name = "order_status")
    private OrderStatus orderStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id") // DB 컬럼명
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems;

    @Builder
    public Order(Integer totalPrice, OrderStatus orderStatus, Store store, User user, List<OrderItem> orderItems){
        this.totalPrice = totalPrice;
        this.orderStatus = orderStatus;
        this.store = store;
        this.user = user;
        this.orderItems=orderItems;
    }

    public void update(LocalDateTime orderTime, OrderStatus orderStatus){
        this.orderTime = orderTime;
        this.orderStatus = orderStatus;
    }

    public void updateTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }


}
