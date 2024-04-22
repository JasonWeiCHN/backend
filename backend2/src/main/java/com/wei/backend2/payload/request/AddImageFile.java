package com.wei.backend2.payload.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddImageFile {
    private String id;
    private String name;
    private String nameCN;
    private String path;
    private String heroName;
    private String heroNameEN;
    private String heroAvatarPath;
    private String description;
    private String warhammerClassifierId;
}
