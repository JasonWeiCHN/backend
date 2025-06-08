package com.wei.games.dto;

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
    private List<GenreDTO> genres;
    private List<GameGuideDTO> guides;
}