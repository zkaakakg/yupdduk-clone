package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.Order;
import com.project.yupdduk_clone.enumeration.OrderStatus;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDto {
    private Long id;
    private LocalDateTime orderTime;
    private Integer totalPrice;
    private OrderStatus orderStatus;
    private Long userId;
    private Long storeId;
    private String storeName;
    private List<OrderItemDto> orderItems;

    public OrderDto(Order order) {
        this.id = order.getId();
        this.orderTime = order.getOrderTime();
        this.totalPrice = order.getTotalPrice();
        this.orderStatus = order.getOrderStatus();
        this.userId = order.getUser().getId();
        this.storeId = order.getStore().getId();
        this.storeName = order.getStore().getStoreName();
        this.orderItems = order.getOrderItems().stream()
                .map(OrderItemDto::new)
                .collect(Collectors.toList());
    }

    public OrderDto(Long id, LocalDateTime orderTime, String storeName, OrderStatus orderStatus, Integer totalPrice,List<OrderItemDto> orderItems) {
        this.id = id;
        this.orderTime = orderTime;
        this.storeName = storeName;
        this.orderStatus = orderStatus;
        this.totalPrice = totalPrice;
        this.orderItems = orderItems;
    }


}
