package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.Store;
import com.project.yupdduk_clone.entity.User;
import lombok.*;

import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StoreDto {
    private Long id;
    private String storeName;
    private String managerName;
    private String address;
    private String storePhone;
    private LocalTime openTime;
    private LocalTime closeTime;
    private Long userId;

  public StoreDto(Store store){
      this.id= store.getId();
      this.storeName = store.getStoreName();
      this.managerName = store.getManagerName();
      this.address = store.getAddress();
      this.storePhone = store.getStorePhone();
      this.openTime = store.getOpenTime();
      this.closeTime = store.getCloseTime();
      this.userId = store.getUser().getId();
  }

  public Store toEntity(User user){
      return Store.builder()
              .storeName(storeName)
              .managerName(managerName)
              .address(address)
              .storePhone(storePhone)
              .openTime(openTime)
              .closeTime(closeTime)
              .user(user)
              .build();
  }
}
