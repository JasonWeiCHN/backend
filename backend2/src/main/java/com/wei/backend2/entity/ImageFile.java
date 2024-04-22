package com.wei.backend2.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "image_file")
public class ImageFile {
    @Id
    private String id;
    private String name;
    private String nameCN;
    private String path;
    private String heroName;
    private String heroNameEN;
    private String heroAvatarPath;
    private String description;

    @ManyToOne
    @JoinColumn(name = "warhammer_classifier_id") // 这里指定外键列名
    private WarhammerClassifier warhammerClassifier; // 添加关联属性
}
