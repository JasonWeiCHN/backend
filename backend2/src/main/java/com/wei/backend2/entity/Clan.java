package com.wei.backend2.entity;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "clan")
public class Clan {
    @Id
    private String parentId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "file_id", referencedColumnName = "id")
    private ImageFile file;
}
