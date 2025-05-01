package com.project.yupdduk_clone.controller;

import com.project.yupdduk_clone.dto.OrderDto;
import com.project.yupdduk_clone.dto.OrderItemDto;
import com.project.yupdduk_clone.dto.OrderRequestDto;
import com.project.yupdduk_clone.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/orders")
public class OrderController {
    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequestDto orderRequestDto) {
        try {
            OrderDto orderDto = orderService.createOrder(orderRequestDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(orderDto);

        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "서버 내부 오류가 발생했습니다."));
        }
    }

    @PutMapping("/{id}/confirm")
    public ResponseEntity<?> confirmOrder(@PathVariable("id") Long orderId) {
        try {
            OrderDto orderDto = orderService.confirmOrder(orderId);
            return ResponseEntity.ok(orderDto);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "서버 내부 오류가 발생했습니다."));
        }
    }

    @PutMapping("/item/{id}")
    public ResponseEntity<?> updateOrderItem(@PathVariable("id") Long orderItemId, @RequestBody OrderItemDto orderItemDto) {
        try {
            OrderDto orderDto = orderService.updateOrderItem(orderItemId, orderItemDto);
            return ResponseEntity.ok(orderDto);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "서버 내부 오류가 발생했습니다."));
        }
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<?> deleteOrderItem(@PathVariable("id") Long orderItemId){
        try{
            OrderDto orderDto = orderService.deleteOrderItem(orderItemId);
            return ResponseEntity.ok(orderDto);
        }catch (Exception e){
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "서버 내부 오류가 발생했습니다."));
        }
    }

    @GetMapping
    public ResponseEntity<List<OrderDto>>  getOrderList(){
        List<OrderDto> orderDtos = orderService.getOrderMyList();
        return ResponseEntity.ok(orderDtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDto> getOrderDetail(@PathVariable("id") Long orderId){
        OrderDto orderDto = orderService.getOrderDetail(orderId);
        return ResponseEntity.ok(orderDto);
    }

}
