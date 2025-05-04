package com.project.yupdduk_clone.service;

import com.project.yupdduk_clone.dto.StoreDto;
import com.project.yupdduk_clone.entity.Store;
import com.project.yupdduk_clone.repository.StoreRepository;
import com.project.yupdduk_clone.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StoreService {
    private final StoreRepository storeRepository;
    private final UserService userService;

    public void addStore(StoreDto storeDto){
        Optional<User> user = userService.getUser();
        if (user.isPresent()) {
            User currentUser = user.get();

            storeRepository.save(storeDto.toEntity(currentUser));
        } else {
            throw new IllegalStateException("로그인된 사용자를 찾을 수 없습니다.");
        }

    }

    public List<StoreDto> getStoreList(){
        List<Store> stores = storeRepository.findAll();
        List<StoreDto> storeDtos = stores.stream()
                .map(StoreDto::new)
                .collect(Collectors.toList());
        return storeDtos;
    }

    public StoreDto getStore(Long id){
        Optional<Store> store = storeRepository.findById(id);
        if (store.isPresent()){
            StoreDto storeDto = new StoreDto(store.get());
            return storeDto;
        }else{
            throw new IllegalStateException("지점을 찾을 수 없습니다.");
        }



    }
}

