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

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "game_tag",
            joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> tags;

    @Column(name = "search_keywords")
    private String searchKeywords;

    // 跳转链接/源链接
    @Column
    private String path;

    // 发布时间
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

    // 新增 detail 图片数组
    @ElementCollection
    @CollectionTable(name = "game_images_for_detail", joinColumns = @JoinColumn(name = "game_id"))
    @Column(name = "image_url")
    private List<String> imagesForDetail;

    // 视频链接
    @ElementCollection
    @CollectionTable(name = "game_videos", joinColumns = @JoinColumn(name = "game_id"))
    @Column(name = "video_url")
    private List<String> videos;
}