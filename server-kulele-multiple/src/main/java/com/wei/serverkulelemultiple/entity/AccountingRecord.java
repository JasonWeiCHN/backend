package com.wei.serverkulelemultiple.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "accounting_record")
public class AccountingRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 添加版本字段
    @Version
    private Integer version;

    @Column(name = "start_date_time", nullable = false)
    private LocalDateTime startDateTime;

    @Column(name = "end_date_time", nullable = false)
    private LocalDateTime endDateTime;

    @Column(nullable = false)
    private BigDecimal duration;

    @Column(name = "console_type", nullable = false)
    private String consoleType;

    @ElementCollection
    @CollectionTable(name = "game_names", joinColumns = @JoinColumn(name = "record_id"))
    @Column(name = "game_name")
    private List<String> gameNames;

    @Column(name = "customer_type", nullable = false)
    private String customerType;

    @Column(name = "is_returning", nullable = false)
    private Boolean isReturning;

    @Column(name = "actual_amount", nullable = false)
    private BigDecimal actualAmount;

    @Column(nullable = false)
    private String platform;

    @Column(name = "contact_type")
    private String contactType;

    @Column(name = "contact_value")
    private String contactValue;

    @Column(name = "remark")
    private String remark;
}
