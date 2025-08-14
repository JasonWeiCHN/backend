package com.wei.serverkulelemultiple.member.dto;

import com.wei.serverkulelemultiple.member.entity.MemberOrder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class MemberDetailsDTO {
    private Long id;
    private String name;
    private String phone;
    private String remark;
    private LocalDateTime createdAt;

    private List<MemberOrder> orders;
    private double balance;
    private double totalPlayTime; // 分钟
}
