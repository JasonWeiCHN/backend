package com.wei.price.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "price")
public class Price {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // 价格信息的ID

    @ManyToOne
    @JoinColumn(name = "good_id", referencedColumnName = "id", nullable = false)
    private Good good;  // 商品实体

    @ManyToOne
    @JoinColumn(name = "platform_id", referencedColumnName = "id", nullable = false)
    private Platform platform;  // 平台实体

    @Column(nullable = false)
    private LocalDate date;  // 价格日期（精确到天）

    @Column(nullable = false)
    private Double price;  // 商品价格

    @Column(columnDefinition = "TEXT")
    private String sourceUrl;  // 信息来源 URL

    public Good getGood() {
        return good;
    }

    public void setGood(Good good) {
        this.good = good;
    }

    public Platform getPlatform() {
        return platform;
    }

    public void setPlatform(Platform platform) {
        this.platform = platform;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getSourceUrl() {
        return sourceUrl;
    }

    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }
}
