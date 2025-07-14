package com.wei.serverkulelemultiple.product.dto;

import lombok.Data;

@Data
public class AddProductRequest {
    private String productName;
    private String productCategory;
    private String productCode;
    private Double purchasePrice;
    private Double sellingPrice;
    private Integer inventory;
    private String description;
}
