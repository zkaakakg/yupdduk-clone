package com.project.yupdduk_clone.controller;

import com.project.yupdduk_clone.dto.OrderDto;
import com.project.yupdduk_clone.dto.OrderItemDto;
import com.project.yupdduk_clone.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/orders")
public class OrderController {
    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderItemDto orderItemDto){
        try{
            OrderDto orderDto = orderService.createOrder(orderItemDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(orderDto);

        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "서버 내부 오류가 발생했습니다."));
        }



    }

}
