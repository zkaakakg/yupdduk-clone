package com.project.yupdduk_clone.entity.valueobject;


import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Side {
    private String name;
    private Integer amount;
    private Integer extraPrice;
}
