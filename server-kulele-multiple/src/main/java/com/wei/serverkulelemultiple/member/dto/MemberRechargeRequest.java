package com.wei.serverkulelemultiple.member.dto;

import lombok.Data;

@Data
public class MemberRechargeRequest {
    private Long memberId;
    private Double amount;       // 充值金额
    private Double bonusAmount;  // 赠送金额
    private String remark;
}
