package com.wei.serverkulelemultiple.room.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class AddRoomRequest {
    private String roomNumber;
    private String roomType;
    private Integer capacity;
    private BigDecimal pricePerHour;
    private String description;
    private String status; // 例如 "AVAILABLE"、"OCCUPIED"、"MAINTENANCE"
}
