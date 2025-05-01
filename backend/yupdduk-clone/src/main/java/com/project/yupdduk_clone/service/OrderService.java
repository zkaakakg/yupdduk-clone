package com.project.yupdduk_clone.service;

import com.project.yupdduk_clone.dto.OrderDto;
import com.project.yupdduk_clone.dto.OrderItemDto;
import com.project.yupdduk_clone.dto.OrderRequestDto;
import com.project.yupdduk_clone.entity.*;
import com.project.yupdduk_clone.enumeration.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final StoreRepository storeRepository;
    private final UserService userService;

    public OrderDto createOrder(OrderRequestDto orderRequestDto) {
        Optional<User> user = userService.getUser();
        List<OrderItemDto> orderItemDtos = orderRequestDto.getOrderItems();
        List<OrderItem> orderItems = new ArrayList<>();

        if (user.isPresent()) {
            User currentUser = user.get();
            int totalPrice = 0;
            for (OrderItemDto item : orderItemDtos) {
                Integer menuPrice = item.getPrice();
                totalPrice += menuPrice;

                OrderItem orderItem = new OrderItem(item.getMenuId(), item.getMenuName(), item.getMenuType(), item.getFlavor(), item.getToppings(), item.getSides(), item.getPrice());
                orderItems.add(orderItem);
            }

            OrderStatus status = OrderStatus.PAYING;
            Optional<Store> store = storeRepository.findById(orderRequestDto.getStoreId());

            Order order = new Order(totalPrice, status, store.get(), currentUser, orderItems);

            for (OrderItem orderItem : orderItems) {
                orderItem.updateOrder(order);

            }

            orderRepository.save(order);
            return new OrderDto(order);

        } else {
            throw new IllegalStateException("로그인된 사용자를 찾을 수 없습니다.");
        }
    }

    public OrderDto confirmOrder(Long orderId) {
        Optional<Order> order = orderRepository.findById(orderId);
        if (order.isPresent()) {
            Order newOrder = order.get();
            LocalDateTime orderTime = LocalDateTime.now();
            OrderStatus status = OrderStatus.ORDERED;

            newOrder.update(orderTime, status);
            orderRepository.save(newOrder);
            return new OrderDto(newOrder);
        } else {
            throw new IllegalStateException("주문이 존재하지 않습니다.");

        }
    }

    public OrderDto updateOrderItem(Long orderItemId, OrderItemDto orderItemDto) {
        Optional<OrderItem> optionalOrderItem = orderItemRepository.findById(orderItemId);
        if (optionalOrderItem.isPresent()) {
            OrderItem orderItem = optionalOrderItem.get();

            orderItem.update(orderItemDto.getMenuName(), orderItemDto.getMenuType(), orderItemDto.getFlavor(), orderItemDto.getToppings(), orderItemDto.getSides(), orderItemDto.getPrice());
            orderItemRepository.save(orderItem);

            Order order = orderItem.getOrder();

            int updatedTotalPrice = order.getOrderItems().stream()
                    .mapToInt(OrderItem::getPrice)
                    .sum();

            order.updateTotalPrice(updatedTotalPrice);
            orderRepository.save(order);

            return new OrderDto(order);
        } else {
            throw new IllegalStateException("주문이 존재하지 않습니다.");
        }
    }

    public OrderDto deleteOrderItem(Long id) {
        Optional<OrderItem> orderItem = orderItemRepository.findById(id);
        if (orderItem.isPresent()) {
            orderItemRepository.delete(orderItem.get());

            Order order = orderItem.get().getOrder();
            int updatedTotalPrice = order.getOrderItems().stream()
                    .mapToInt(OrderItem::getPrice)
                    .sum();
            order.updateTotalPrice(updatedTotalPrice);
            orderRepository.save(order);
            return new OrderDto(order);

        } else {
            throw new IllegalStateException("주문 아이템이 존재하지 않습니다.");
        }
    }

    public List<OrderDto> getOrderMyList() {
        Optional<User> user = userService.getUser();
        if (user.isPresent()) {
            List<Order> orders = orderRepository.findByUserId(user.get().getId());
            return orders.stream()
                    .map(order -> {
                        List<OrderItemDto> orderItemDtos = order.getOrderItems().stream()
                                .map(item -> new OrderItemDto(item.getMenuName()))
                                .collect(Collectors.toList());

                        return new OrderDto(order.getId(), order.getOrderTime(), order.getStore().getStoreName(), order.getOrderStatus(), order.getTotalPrice(), orderItemDtos);
                    }).collect(Collectors.toList());
        } else {
            throw new IllegalStateException("로그인된 사용자를 찾을 수 없습니다.");

        }
    }

    public OrderDto getOrderDetail(Long id) {
        Optional<Order> order = orderRepository.findById(id);
        if (order.isPresent()) {
            OrderDto orderDto = new OrderDto(order.get());
            return orderDto;
        } else {
            throw new IllegalStateException("주문이 존재하지 않습니다.");
        }
    }

    public List<OrderDto> getOrderList() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream()
                .map(order -> {
                    List<OrderItemDto> orderItemDtos = order.getOrderItems().stream()
                            .map(item -> new OrderItemDto(item.getMenuName()))
                            .collect(Collectors.toList());

                    return new OrderDto(order.getId(), order.getOrderTime(), order.getStore().getStoreName(), order.getOrderStatus(), order.getTotalPrice(), orderItemDtos);
                }).collect(Collectors.toList());
    }


}
