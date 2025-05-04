package com.project.yupdduk_clone.controller;

import com.project.yupdduk_clone.dto.OrderDto;
import com.project.yupdduk_clone.dto.StoreDto;
import com.project.yupdduk_clone.dto.UserDto;
import com.project.yupdduk_clone.service.OrderService;
import com.project.yupdduk_clone.service.StoreService;
import com.project.yupdduk_clone.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private final StoreService storeService;
    private final UserService userService;
    private final OrderService orderService;

    @GetMapping
    public String admin() {
        return "관리자 페이지입니다.";
    }

    @PostMapping("/stores")
    public ResponseEntity<?> addStore(@RequestBody StoreDto storeDto) {
        try {
            storeService.addStore(storeDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(storeDto);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "이미 등록된 지점입니다."));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "서버 내부 오류가 발생했습니다."));

        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getUserList() {
        List<UserDto> userDtos = userService.getUserList();
        return ResponseEntity.ok(userDtos);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDto> getUserDetail(@PathVariable("id") Long userId){
        UserDto userDto = userService.getUserDetail(userId);
        return ResponseEntity.ok(userDto);

    }

    @PutMapping("/users/{id}/role")
    public ResponseEntity<?> updateRole(@PathVariable("id") Long userId,  @RequestBody String userRole) {
        try {
            userService.updateRole(userId, userRole);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid role");
        }
    }

    @GetMapping("/orders")
    public ResponseEntity<List<OrderDto>> getOrderList(){
        List<OrderDto> orderDtos = orderService.getOrderList();
        return ResponseEntity.ok(orderDtos);
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<OrderDto> getOrderDetail(@PathVariable("id") Long orderId){
        OrderDto orderDto = orderService.getOrderDetail(orderId);
        return ResponseEntity.ok(orderDto);
    }

}
