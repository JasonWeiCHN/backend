package com.wei.serverkulelemultiple.member.dto;

import lombok.Data;

@Data
public class MemberConsumptionRequest {
    private Long memberId;
    private Double amount;   // 消费金额
    private String remark;
}
