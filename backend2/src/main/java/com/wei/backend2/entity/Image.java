package com.wei.backend2.entity;

import lombok.Data;
import java.sql.Timestamp;

@Data
public class Image {
    private int id;

    private String name;

    private String hash;

    private String category;

    private Timestamp createTime;

    private Timestamp updateTime;
}
