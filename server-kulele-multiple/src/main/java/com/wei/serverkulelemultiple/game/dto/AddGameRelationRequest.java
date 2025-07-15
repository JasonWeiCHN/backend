package com.wei.serverkulelemultiple.game.dto;

import lombok.Data;

@Data
public class AddGameRelationRequest {
    private Long gameId;
    private String note;
}
