package com.project.yupdduk_clone.service;

import com.project.yupdduk_clone.entity.OrderItemRepository;
import com.project.yupdduk_clone.entity.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final UserService userService;

}
