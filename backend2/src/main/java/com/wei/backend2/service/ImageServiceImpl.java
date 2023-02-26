package com.wei.backend2.service;

import com.wei.backend2.dao.ImageDaoImpl;
import com.wei.backend2.entity.Image;
import com.wei.backend2.request.AddImageRequest;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.UUID;

@Service
public class ImageServiceImpl implements ImageService{
    private final ImageDaoImpl imageDao;

    public ImageServiceImpl(ImageDaoImpl imageDao) {
        this.imageDao = imageDao;
    }

    @Override
    public boolean addImage(AddImageRequest request) {
        String fileName = StringUtils.cleanPath(request.getFile().getOriginalFilename());

        // 生成唯一的hash
        String hash = UUID.randomUUID().toString();

        Image image = new Image();
        image.setName(request.getName());
        image.setCategory(request.getCategory());
        image.setHash(hash);

        // 设置创建时间和更新时间
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        image.setCreateTime(timestamp);
        image.setUpdateTime(timestamp);

        // 保存图片文件
        try {
            byte[] data = request.getFile().getBytes();
            Path path = Paths.get("images/" + hash + "/" + fileName);
            Files.createDirectories(path.getParent());
            Files.write(path, data);

            // 保存图片信息到数据库
            imageDao.save(image);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}

