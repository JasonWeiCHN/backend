package com.wei.backend2.entity;

import lombok.Data;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "picture")
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "picture_id")
    private Long pictureId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "hash", nullable = false)
    private String hash;

    @Column(name = "search_key", nullable = false)
    private String searchKey;

    @Column(name = "category")
    private String category;

    @Column(name = "size", nullable = false)
    private int size;

    @Column(name = "create_time", nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createTime;

    @Column(name = "update_time", nullable = false)
    @UpdateTimestamp
    private LocalDateTime updateTime;


    // 添加构造函数、getter和setter等其他方法根据需要

}
