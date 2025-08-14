package com.wei.serverkulelemultiple.member.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "member_recharge")
public class MemberRecharge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private Integer version;

    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Column(nullable = false)
    private Double amount; // 充值金额

    @Column(name = "bonus_amount", nullable = false)
    private Double bonusAmount; // 赠送金额

    @Column(name = "recharge_time", nullable = false)
    private LocalDateTime rechargeTime;
}
