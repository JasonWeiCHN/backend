package com.wei.backend2.payload.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddProduct {
    private String name;
    private String title;
    private String category;
    private Integer available;
    private Integer price;
    private String description;
}
