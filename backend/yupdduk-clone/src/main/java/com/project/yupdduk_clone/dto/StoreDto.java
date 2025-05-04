package com.project.yupdduk_clone.dto;

import com.project.yupdduk_clone.entity.Store;
import com.project.yupdduk_clone.entity.User;
import lombok.*;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StoreDto {
    private Long id;
    private String storeName;
    private String managerName;
    private String address;
    private String storePhone;
    private String openTime;
    private String closeTime;
    private Long userId;

  public StoreDto(Store store){
      this.id= store.getId();
      this.storeName = store.getStoreName();
      this.managerName = store.getManagerName();
      this.address = store.getAddress();
      this.storePhone = store.getStorePhone();
      this.openTime = store.getOpenTime().toString();
      this.closeTime = store.getCloseTime().toString();
      this.userId = store.getUser() != null ? store.getUser().getId() : null;


  }

    public Store toEntity(User user){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        return Store.builder()
                .storeName(storeName)
                .managerName(managerName)
                .address(address)
                .storePhone(storePhone)
                .openTime(LocalTime.parse(openTime, formatter))
                .closeTime(LocalTime.parse(closeTime, formatter))
                .user(user)
                .build();
        }
}
