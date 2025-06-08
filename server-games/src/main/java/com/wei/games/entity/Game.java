package com.wei.games.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 添加版本字段
    @Version
    private Integer version;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String image;

    @ElementCollection
    @CollectionTable(name = "game_tags", joinColumns = @JoinColumn(name = "game_id"))
    @Column(name = "tag")
    private List<String> tags;

    @Column(name = "search_keywords")
    private String searchKeywords;

    @Column
    private String path;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(columnDefinition = "TEXT")
    private String description;

    // 游戏类型（genre）使用单独实体 + 多对多关系
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "game_genre",
            joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private List<Genre> genres;

    // 攻略（guides）为嵌套对象，使用 Embeddable + ElementCollection
    @ElementCollection
    @CollectionTable(name = "game_guides", joinColumns = @JoinColumn(name = "game_id"))
    private List<GameGuide> guides;

    @Column
    private String video;
}