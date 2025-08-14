package com.wei.serverkulelemultiple.member.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "member_consumption")
public class MemberConsumption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private Integer version;

    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Column(nullable = false)
    private Double amount; // 消费金额

    @Column(name = "remark")
    private String remark;

    @Column(name = "consumption_time", nullable = false)
    private LocalDateTime consumptionTime;
}
