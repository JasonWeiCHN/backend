package com.wei.backend2.service;

import com.wei.backend2.entity.ImageFile;
import com.wei.backend2.payload.request.AddImageFile;

import java.util.List;

public interface ImageFileService {
    List<ImageFile> findAll();

    ImageFile saveImageFile(AddImageFile imageFile);
}
