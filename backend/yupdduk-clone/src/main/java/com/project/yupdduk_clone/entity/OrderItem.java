package com.project.yupdduk_clone.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "order_items")
@Getter
@NoArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @Column(name = "menu_id")
    private Long menuid;

    @Column(name = "menu_name")
    private String menuName;

    @Column(name = "menu_type")
    private String menuType;

    @Column
    private String flavor;

    @ElementCollection
    @Column
    private List<String> toppings;

    @Column
    private Integer price;

    @Builder
    public OrderItem(Long id, Order order, Long menuid, String menuName, String menuType, String flavor, List<String> toppings, Integer price) {
        this.id = id;
        this.order = order;
        this.menuid = menuid;
        this.menuName = menuName;
        this.menuType = menuType;
        this.flavor = flavor;
        this.toppings = toppings;
        this.price = price;
    }

}
