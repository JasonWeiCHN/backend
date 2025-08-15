package com.wei.serverkulelemultiple.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MemberListDTO {
    private Long id;
    private String name;
    private String phone;
    private String remark;
    private LocalDateTime createdAt;
    private double balance;
}
