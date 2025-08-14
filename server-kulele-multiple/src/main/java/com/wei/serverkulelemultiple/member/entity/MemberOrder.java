package com.wei.serverkulelemultiple.member.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "member_order")
public class MemberOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private Integer version;

    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Enumerated(EnumType.STRING)
    @Column(name = "order_type", nullable = false)
    private OrderType orderType;

    @Column(name = "related_id", nullable = false)
    private Long relatedId; // 指向 recharge / consumption / accounting_record 对应id

    @Column(nullable = false)
    private Double amount;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    public enum OrderType {
        RECHARGE,
        CONSUMPTION,
        ROOM
    }

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}

