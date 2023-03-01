package com.wei.backend2.service;

import com.wei.backend2.dao.GoodDAO;
import com.wei.backend2.entity.Good;
import com.wei.backend2.entity.Image;
import com.wei.backend2.request.AddGoodRequest;
import com.wei.backend2.request.AddImageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class GoodServiceImpl implements GoodService {

    @Autowired
    private ImageServiceImpl imageService;

    @Autowired
    private GoodDAO goodDAO;

    @Override
    public boolean addGood(AddGoodRequest goodRequest) {
        // 保存商品图片
        AddImageRequest imageRequest = new AddImageRequest();
        imageRequest.setName(goodRequest.getName());
        imageRequest.setCategory(goodRequest.getCategory());
        imageRequest.setFile(goodRequest.getFile());

        Image image = imageService.saveImage(imageRequest);

        // 获取图片哈希值并创建 Good 对象
        String hash = image.getHash();
        Good newGood = new Good();
        newGood.setName(goodRequest.getName());
        newGood.setCategory(goodRequest.getCategory());
        newGood.setHash(hash);
        newGood.setPrice(goodRequest.getPrice());
        newGood.setDescription(goodRequest.getDescription());
        newGood.setKeywords(goodRequest.getKeywords());
        newGood.setCreateTime(new Timestamp(System.currentTimeMillis()));
        newGood.setUpdateTime(new Timestamp(System.currentTimeMillis()));

        // 保存 Good 对象到数据库
        goodDAO.addGood(newGood);

        return true;
    }
}

