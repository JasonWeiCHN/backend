package com.wei.backend2.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "warhammer_classifier")
public class WarhammerClassifier {
    @Id
    private String id;

    private String directory;
    private String nameCN;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "warhammerClassifier", orphanRemoval = true)
    private List<ImageFile> files;
}
