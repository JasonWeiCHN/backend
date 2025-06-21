package com.wei.appointment.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private Integer version;

    // 预约时间
    @Column(name = "date_time", nullable = false)
    private LocalDateTime dateTime;

    // 姓名
    @Column(nullable = false)
    private String name;

    // 联系方式类型：微信 / 电话
    @Column(name = "contact_type", nullable = false)
    private String contactType;

    // 联系方式内容
    @Column(name = "contact_value", nullable = false)
    private String contactValue;

    // 描述信息（可选）
    @Column
    private String description;
}
