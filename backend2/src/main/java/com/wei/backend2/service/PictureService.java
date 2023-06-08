package com.wei.backend2.service;

import com.wei.backend2.entity.Picture;
import com.wei.backend2.exception.ImageSaveException;
import com.wei.backend2.payload.request.AddPicture;
import com.wei.backend2.repositories.PictureRepository;
import com.wei.backend2.util.SaveImageFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class PictureService {

    @Autowired
    private PictureRepository pictureRepository;

    public Picture createPicture(AddPicture addPicture, MultipartFile file) {
        // 保存图片
        String hash = UUID.randomUUID().toString();
        String imgPath = "images/" + hash;
        boolean saveImageSuccess = SaveImageFile.saveImage(file, imgPath);
        if (!saveImageSuccess) {
            // 处理图片保存失败的情况，例如抛出异常或返回错误信息
            throw new ImageSaveException("Failed to save the image.");
        }

        // 将 AddPicture 对象转换为 Picture 对象
        Picture picture = new Picture();
        picture.setName(addPicture.getName());
        picture.setHash(hash);
        picture.setSearchKey(addPicture.getSearchKey());
        picture.setCategory(addPicture.getCategory());
        picture.setSize(addPicture.getSize());
        picture.setCreateTime(LocalDateTime.now());

        return pictureRepository.save(picture);
    }

    public Picture getPicture(Long id) {
        return pictureRepository.findByPictureId(id);
    }

    public List<Picture> getAllPictures() {
        return pictureRepository.findAll();
    }

    public Picture updatePicture(Long id, Picture pictureDetails) {
        Picture picture = pictureRepository.findByPictureId(id);
        picture.setName(pictureDetails.getName());
        picture.setHash(pictureDetails.getHash());
        picture.setSearchKey(pictureDetails.getSearchKey());
        picture.setCategory(pictureDetails.getCategory());
        picture.setSize(pictureDetails.getSize());
        picture.setUpdateTime(pictureDetails.getUpdateTime());
        return pictureRepository.save(picture);
    }

    public void deletePicture(Long id) {
        pictureRepository.deleteById(id);
    }
}
