package com.wei.serverkulelemultiple.room.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RoomStatusDTO {
    private Long id;
    private String roomNumber;
    private String roomType;
    private String status; // 空闲、使用中、停用

    // 如果使用中，填充以下字段
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Long accountingId;

    // 可选：展示客户信息
    private String contactType;
    private String contactValue;
    private String remark;
}
