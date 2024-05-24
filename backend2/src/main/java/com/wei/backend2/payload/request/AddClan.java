package com.wei.backend2.payload.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddClan {
    private String id;
    private String name;
    private String nameCN;
    private String path;
    private String heroName;
    private String heroNameEN;
    private String heroNickName;
    private String heroAvatarPath;
    private String description;
    private String warhammerClassifierId;
    private String contributorIds;  // 贡献者ID列表，用逗号分隔
    private Integer order;
}