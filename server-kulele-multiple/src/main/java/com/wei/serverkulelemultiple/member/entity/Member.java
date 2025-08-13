package com.wei.serverkulelemultiple.member.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private Integer version;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String phone;

    @Column(name = "remark")
    private String remark;

    @Column(name = "total_play_time", nullable = false)
    private Integer totalPlayTime; // 单位分钟

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.totalPlayTime = 0;
        this.createdAt = LocalDateTime.now();
    }
}
