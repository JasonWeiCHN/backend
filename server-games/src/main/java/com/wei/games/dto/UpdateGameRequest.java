package com.wei.games.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UpdateGameRequest extends BaseGameRequest {
    // 可扩展字段，比如：版本号、乐观锁等
}
