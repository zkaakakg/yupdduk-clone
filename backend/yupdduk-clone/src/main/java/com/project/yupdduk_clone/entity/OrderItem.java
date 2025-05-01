package com.project.yupdduk_clone.entity;

import com.project.yupdduk_clone.entity.valueobject.Side;
import com.project.yupdduk_clone.entity.valueobject.Topping;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "order_items")
@Getter
@Setter
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

    @Column
    private Integer price;

    @Column
    private Integer totalPrice;

    @ElementCollection
    @CollectionTable(name = "order_item_toppings", joinColumns = @JoinColumn(name = "order_item_id"))
    @Column(name = "topping")
    private List<Topping> toppings;


    @ElementCollection
    @CollectionTable(name = "order_item_sides", joinColumns = @JoinColumn(name = "order_item_id"))
    @Column(name = "side")
    private List<Side> sides;




    @Builder
    public OrderItem(Long id, Order order, Long menuid, String menuName, String menuType, String flavor, List<Topping> toppings, List<Side> sides, Integer price) {
        this.id = id;
        this.order = order;
        this.menuid = menuid;
        this.menuName = menuName;
        this.menuType = menuType;
        this.flavor = flavor;
        this.toppings = toppings;
        this.sides = sides;
        this.price = price;
    }

    @Builder
    public OrderItem(Long menuid, String menuName, String menuType, String flavor, List<Topping> toppings, List<Side> sides, Integer price, Integer totalPrice) {
        this.menuid = menuid;
        this.menuName = menuName;
        this.menuType = menuType;
        this.flavor = flavor;
        this.toppings = toppings;
        this.sides = sides;
        this.price = price;
        this.totalPrice=totalPrice;
    }

    public void updateOrder(Order order) {
        this.order = order;
    }

    public void update(String menuName, String menuType, String flavor,
                       List<Topping> toppings, List<Side> sides, Integer price, Integer totalPrice) {
        this.menuName = menuName;
        this.menuType = menuType;
        this.flavor = flavor;
        this.toppings = toppings;
        this.sides = sides;
        this.price = price;
        this.totalPrice=totalPrice;
    }

}
