package com.project.yupdduk_clone.dto;

import lombok.*;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderRequestDto {
    private Long storeId;;
    private List<OrderItemDto> orderItems;
}
