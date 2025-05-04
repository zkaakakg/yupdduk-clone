package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.OrderItem;
import com.project.yupdduk_clone.entity.valueobject.Side;
import com.project.yupdduk_clone.entity.valueobject.Topping;
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
    private Integer price;
    private List<Topping> toppings;
    private List<Side> sides;
    private Integer totalPrice;
    private Long id;


    public OrderItemDto(OrderItem orderItem) {
        this.menuId = orderItem.getMenuid();
        this.orderId = orderItem.getOrder().getId();
        this.menuName = orderItem.getMenuName();
        this.menuType = orderItem.getMenuType();
        this.flavor = orderItem.getFlavor();
        this.toppings = orderItem.getToppings();
        this.sides = orderItem.getSides();
        this.price = orderItem.getPrice();
        this.totalPrice = orderItem.getTotalPrice();
        this.id = orderItem.getId();
    }


    public OrderItemDto(String menuName) {
        this.menuName = menuName;
    }
}
