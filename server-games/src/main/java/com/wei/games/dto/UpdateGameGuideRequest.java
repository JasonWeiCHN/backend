package com.wei.games.dto;

import lombok.Data;

import java.util.List;

@Data
public class UpdateGameGuideRequest {
    private List<GameGuideDTO> guides;
}
