package com.wei.serverkulelemultiple.game.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "game_relation")
public class GameRelation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private Integer version;

    @Column(name = "game_id", nullable = false)
    private Long gameId;

    @Column(name = "added_at")
    private LocalDateTime addedAt;

    @Column
    private String note;
}
