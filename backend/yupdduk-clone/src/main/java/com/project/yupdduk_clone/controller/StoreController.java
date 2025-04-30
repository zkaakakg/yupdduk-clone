package com.project.yupdduk_clone.controller;

import com.project.yupdduk_clone.dto.StoreDto;
import com.project.yupdduk_clone.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/stores")
public class StoreController {
    private final StoreService storeService;

    @GetMapping
    public ResponseEntity<List<StoreDto>> getStoreList() {
        List<StoreDto> storeList = storeService.getStoreList();
        return ResponseEntity.ok(storeList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StoreDto> getStore(@PathVariable("id") Long id) {
        StoreDto storeDto = storeService.getStore(id);
        return ResponseEntity.ok(storeDto);
    }
}
