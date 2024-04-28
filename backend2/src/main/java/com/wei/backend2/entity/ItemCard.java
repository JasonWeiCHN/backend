package com.wei.backend2.entity;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "item_card")
public class ItemCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type_id")
    private String typeId;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "source_url")
    private String sourceUrl;

    private String title;
    private Integer views;
    private String description;
    private String publisher;
    private String date;
    private String tagIds;
    private String referer;

    @Column(columnDefinition = "TEXT")
    private String detail;

    // Constructors, getters, and setters
}
