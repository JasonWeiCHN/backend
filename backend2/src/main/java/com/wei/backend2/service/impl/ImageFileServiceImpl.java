package com.wei.backend2.service.impl;

import com.wei.backend2.entity.ImageFile;
import com.wei.backend2.entity.WarhammerClassifier;
import com.wei.backend2.payload.request.AddImageFile;
import com.wei.backend2.repositories.ImageFileRepository;
import com.wei.backend2.service.ImageFileService;
import com.wei.backend2.service.WarhammerClassifierService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ImageFileServiceImpl implements ImageFileService {
    private final ImageFileRepository repository;
    private final WarhammerClassifierService warhammerClassifierService; // 添加 WarhammerClassifierService 依赖

    public ImageFileServiceImpl(ImageFileRepository repository, WarhammerClassifierService warhammerClassifierService) {
        this.repository = repository;
        this.warhammerClassifierService = warhammerClassifierService; // 初始化 WarhammerClassifierService
    }

    @Override
    public List<ImageFile> findAll() {
        return repository.findAll();
    }

    @Override
    public ImageFile saveImageFile(AddImageFile addImageFile) {
        String warhammerClassifierId = addImageFile.getWarhammerClassifierId();

        WarhammerClassifier warhammerClassifier = warhammerClassifierService.findById(warhammerClassifierId);

        ImageFile imageFile = new ImageFile();
        BeanUtils.copyProperties(addImageFile, imageFile);
        imageFile.setWarhammerClassifier(warhammerClassifier); // 设置关联的 WarhammerClassifier 对象

        return repository.save(imageFile);
    }
}
