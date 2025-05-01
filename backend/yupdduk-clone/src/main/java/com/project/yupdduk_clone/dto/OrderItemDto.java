package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.OrderItem;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItemDto {
    private Long menuId;
    private Long orderId;
    private String menuName;
    private String menuType;
    private String flavor;
    private List<String> toppings;
    private List<String> sides;
    private Integer price;


    public OrderItemDto(OrderItem orderItem){
        this.menuId = orderItem.getMenuid();
        this.orderId = orderItem.getOrder().getId();
        this.menuName= orderItem.getMenuName();
        this.menuType=orderItem.getMenuType();
        this.flavor=orderItem.getFlavor();
        this.toppings=orderItem.getToppings();
        this.sides = orderItem.getSides();
        this.price=orderItem.getPrice();
    }


    public OrderItemDto(String menuName) {
        this.menuName=menuName;
    }
}
