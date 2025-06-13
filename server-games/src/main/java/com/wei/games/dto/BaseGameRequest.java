package com.wei.games.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
public abstract class BaseGameRequest {
    private String name;
    private String image;
    private List<String> tags;
    private String searchKeywords;
    private String path;
    private String releaseDate;
    private String description;
    private String video;
    // 改为只传 genre id 字符串列表
    private List<String> genres;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<GameGuideDTO> guides;
}