package com.wei.backend2.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class AddGoodRequest {
    private String name;
    private String category;
    private MultipartFile file;

    public AddGoodRequest() {}

    public AddGoodRequest(String name, String category, MultipartFile file) {
        this.name = name;
        this.category = category;
        this.file = file;
    }
}
