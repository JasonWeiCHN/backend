package com.wei.serverkulelemerchant.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "merchant")
public class Merchant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;         // 商户名称
    private String username;     // 登录用户名
    private String password;     // 明文或加密密码
    @Column(name = "database_name", unique = true)
    private String databaseName; // SaaS系统中对应的租户数据库名

    private LocalDateTime createdAt;
}
