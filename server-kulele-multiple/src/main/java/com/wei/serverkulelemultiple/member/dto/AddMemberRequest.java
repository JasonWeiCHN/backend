package com.wei.serverkulelemultiple.member.dto;

import lombok.Data;

@Data
public class AddMemberRequest {
    private String name;
    private String phone;
    private String remark;
}
