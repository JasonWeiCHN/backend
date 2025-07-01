package com.wei.games.dto;

import lombok.Data;
import java.util.List;

@Data
public class GameResponse {
    private Long id;
    private String name;
    private String image;
    private List<TagDTO> tags;
    private String searchKeywords;
    private String path;
    private String releaseDate;
    private String description;
    private List<GenreDTO> genres;
    private List<GameGuideDTO> guides;
    private String video;
}
