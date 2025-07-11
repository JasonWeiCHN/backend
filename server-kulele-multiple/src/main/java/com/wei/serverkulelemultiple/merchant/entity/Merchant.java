package com.wei.serverkulelemultiple.merchant.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "merchant")
@Data
public class Merchant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tenantId;

    @Column(name = "database_name")
    private String databaseName;
}
