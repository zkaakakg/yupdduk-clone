package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.Order;
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
        this.price=orderItem.getPrice();
    }

    public OrderItem toEntity(Order order){
        return OrderItem.builder()
                .menuid(menuId)
                .order(order)
                .menuName(menuName)
                .menuType(menuType)
                .flavor(flavor)
                .toppings(toppings)
                .price(price)
                .build();
    }

}
