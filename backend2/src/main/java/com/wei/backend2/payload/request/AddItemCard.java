package com.wei.backend2.payload.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddItemCard {
    private String id;
    private String typeId;
    private String imageUrl;
    private String sourceUrl;
    private String title;
    private int views;
    private String description;
    private String publisher;
    private String date;
    private String detail;
}
