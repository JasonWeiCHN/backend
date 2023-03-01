package com.wei.backend2.entity;
import lombok.Data;
import java.sql.Timestamp;

@Data
public class Good {
    private int id;
    private String name;
    private String hash;
    private String category;
    private String price;
    private String description;
    private String keywords;
    private Timestamp createTime;
    private Timestamp updateTime;

    public Good() {}

    public Good(int id, String name, String hash, String category, String price, String description, String keywords, Timestamp createTime, Timestamp updateTime) {
        this.id = id;
        this.name = name;
        this.hash = hash;
        this.category = category;
        this.price = price;
        this.description = description;
        this.keywords = keywords;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Good(String name, String hash, String category, String price, String description, String keywords) {
        this.name = name;
        this.hash = hash;
        this.category = category;
        this.price = price;
        this.description = description;
        this.keywords = keywords;
        this.createTime = new Timestamp(System.currentTimeMillis());
        this.updateTime = new Timestamp(System.currentTimeMillis());
    }
}
