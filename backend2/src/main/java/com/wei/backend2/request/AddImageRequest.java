package com.wei.backend2.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class AddImageRequest {
    private String name;
    private String category;
    private MultipartFile file;
}