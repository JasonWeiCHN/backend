package com.wei.backend2.payload.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddClan {
    private String parentId;
    private String fileId;
    private String name;
    private String nameCN;
    private String path;
    private String description;
    private String[] heroNames;
}