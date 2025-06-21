package com.wei.expense.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "expense")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private Integer version;

    // 支出时间
    @Column(name = "date_time", nullable = false)
    private LocalDateTime dateTime;

    // 支出类别，例如 游戏机、游戏、装修
    @Column(nullable = false)
    private String category;

    // 描述信息
    @Column
    private String description;

    // 支出金额
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal amount;
}
