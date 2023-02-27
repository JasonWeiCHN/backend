package com.wei.backend2.service;

import com.wei.backend2.request.AddImageRequest;
import org.springframework.web.multipart.MultipartFile;

public interface ImageService {
    boolean addImage(AddImageRequest image);
    boolean addImageByExcel(MultipartFile file);
}
