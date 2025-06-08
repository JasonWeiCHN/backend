package com.wei.games.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class AddGameRequest extends BaseGameRequest {
    // 可扩展字段
}
