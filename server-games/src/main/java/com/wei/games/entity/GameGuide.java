package com.wei.games.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Embeddable
public class GameGuide {

    private String title;
    private String description;
    private String author;

    @Column(name = "source_url")
    private String sourceUrl;
}