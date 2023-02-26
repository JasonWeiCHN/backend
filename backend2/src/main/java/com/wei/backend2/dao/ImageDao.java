package com.wei.backend2.dao;

import com.wei.backend2.entity.Image;

import java.util.List;

public interface ImageDao {
    Image findById(int id);
    List<Image> findAll();
    void save(Image image);
    void update(Image image);
    void deleteById(int id);
}
