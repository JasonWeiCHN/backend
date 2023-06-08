package com.wei.backend2.repositories;

import com.wei.backend2.entity.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Long> {
    Picture findByPictureId(Long id); // 根据图片的唯一标识符查找图片
    List<Picture> findAll(); // 查找所有图片
    Picture save(Picture picture); // 保存图片
    void deleteById(Long id); // 根据图片的唯一标识符删除图片
}
