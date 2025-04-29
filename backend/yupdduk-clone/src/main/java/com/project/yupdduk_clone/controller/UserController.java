package com.project.yupdduk_clone.controller;

import com.project.yupdduk_clone.dto.UserDto;
import com.project.yupdduk_clone.entity.User;
import com.project.yupdduk_clone.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/user")
    public ResponseEntity<?> signUp(@RequestBody UserDto userDto){
        try{
            userService.signUp(userDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(userDto);
        }catch (DataIntegrityViolationException e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "이미 등록된 사용자입니다."));
        }catch (Exception e){
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "서버 내부 오류가 발생했습니다."));
        }
    }

    @GetMapping("/user")
    public ResponseEntity<UserDto> getUser(){
       Optional<User> user = userService.getUser();
        if (user.isPresent()) {
            UserDto userDto = new UserDto(user.get());
            return ResponseEntity.status(HttpStatus.OK).body(userDto);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/user")
    public ResponseEntity<?> deleteUser(){
        Optional<User> user = userService.getUser();
        if (user.isPresent()){
            userService.deleteUser(user);
            return ResponseEntity.status(HttpStatus.OK).build();
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }


}
