package com.wei.games.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "genre")
public class Genre {

    @Id
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;
}
