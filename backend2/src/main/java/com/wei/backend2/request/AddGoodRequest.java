package com.wei.backend2.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class AddGoodRequest {
    private String name;
    private String hash;
    private String category;
    private String price;
    private String description;
    private String keywords;
    private MultipartFile file;

    public AddGoodRequest() {}

    public AddGoodRequest(String name, String hash, String category, String price, String description, String keywords, MultipartFile file) {
        this.name = name;
        this.hash = hash;
        this.category = category;
        this.price = price;
        this.description = description;
        this.keywords = keywords;
        this.file = file;
    }
}
