package com.wei.backend2.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "warhammer_classifier")
public class WarhammerClassifier {
    @Id
    private String id;

    private String directory;
    private String nameCN;

    @Column(name = "order_value")
    private Integer order;
}
