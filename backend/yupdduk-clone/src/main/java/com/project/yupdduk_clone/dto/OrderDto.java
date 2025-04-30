package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.Order;
import com.project.yupdduk_clone.entity.OrderItem;
import com.project.yupdduk_clone.entity.Store;
import com.project.yupdduk_clone.entity.User;
import com.project.yupdduk_clone.enumeration.OrderStatus;

import java.time.LocalDateTime;
import java.util.List;

public class OrderDto {
    private Long id;
    private LocalDateTime orderTime;
    private Integer totalPrice;
    private OrderStatus orderStatus;
    private Long userId;
    private Long storeId;
    private List<OrderItem> orderItems;

    public OrderDto(Order order) {
        this.id = order.getId();
        this.orderTime = order.getOrderTime();
        this.totalPrice = order.getTotalPrice();
        this.orderStatus = order.getOrderStatus();
        this.userId=order.getUser().getId();
        this.storeId = order.getStore().getId();
        this.orderItems=order.getOrderItems();
    }

    public Order toEntity(User user, Store store){
        return Order.builder()
                .orderTime(LocalDateTime.now())
                .totalPrice(totalPrice)
                .orderStatus(orderStatus)
                .store(store)
                .user(user)
                .orderItems(orderItems)
                .build();

    }


}
