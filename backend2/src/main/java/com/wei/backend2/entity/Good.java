package com.wei.backend2.entity;
import lombok.Data;
import java.sql.Timestamp;

@Data
public class Good {
    private int id;
    private String name;
    private String hash;
    private String category;
    private Timestamp createTime;
    private Timestamp updateTime;

    public Good() {}

    public Good(int id, String name, String hash, String category, Timestamp createTime, Timestamp updateTime) {
        this.id = id;
        this.name = name;
        this.hash = hash;
        this.category = category;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}