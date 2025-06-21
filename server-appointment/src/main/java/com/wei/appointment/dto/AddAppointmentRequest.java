package com.wei.appointment.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AddAppointmentRequest {
    private LocalDateTime dateTime;
    private String name;
    private String contactType;
    private String contactValue;
    private String description;
}
