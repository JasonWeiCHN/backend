package com.wei.serverkulelemultiple.room.dto;

import com.wei.serverkulelemultiple.room.enums.RoomStatus;
import lombok.Data;

@Data
public class RoomStatusUpdateRequest {
    private RoomStatus status;
}
