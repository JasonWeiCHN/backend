package com.wei.backend2.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "clan")
public class Clan {
    @Id
    private String id;
    private String name;
    private String nameCN;
    private String path;
    private String heroName;
    private String heroNameEN;
    private String heroAvatarPath;
    private String description;

    @ManyToOne
    @JoinColumn(name = "warhammer_classifier_id") // 这里指定外键列名
    private WarhammerClassifier warhammerClassifier; // 添加关联属性

    @ManyToMany
    @JoinTable(
            name = "clan_contributor",
            joinColumns = @JoinColumn(name = "clan_id"),
            inverseJoinColumns = @JoinColumn(name = "contributor_id")
    )
    private List<Contributor> contributors;
}
