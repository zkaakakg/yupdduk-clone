package com.project.yupdduk_clone.controller;

import com.project.yupdduk_clone.dto.StoreDto;
import com.project.yupdduk_clone.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private final StoreService storeService;

    @GetMapping
    public String admin(){
        return "관리자 페이지입니다.";
    }

    @PostMapping("/store")
    public ResponseEntity<?> addStore(@RequestBody StoreDto storeDto){
        try{
            storeService.addStore(storeDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(storeDto);
        }catch (DataIntegrityViolationException e){
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
}
