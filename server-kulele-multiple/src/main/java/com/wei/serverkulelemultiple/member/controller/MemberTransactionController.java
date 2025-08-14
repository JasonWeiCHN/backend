package com.wei.serverkulelemultiple.member.controller;

import com.wei.serverkulelemultiple.member.dto.MemberRechargeRequest;
import com.wei.serverkulelemultiple.member.dto.MemberConsumptionRequest;
import com.wei.serverkulelemultiple.member.entity.MemberRecharge;
import com.wei.serverkulelemultiple.member.entity.MemberConsumption;
import com.wei.serverkulelemultiple.member.service.MemberTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/member-transactions")
public class MemberTransactionController {

    @Autowired
    private MemberTransactionService transactionService;

    @PostMapping("/recharge")
    public MemberRecharge recharge(@RequestBody MemberRechargeRequest request) {
        return transactionService.recharge(request);
    }

    @PostMapping("/consume")
    public MemberConsumption consume(@RequestBody MemberConsumptionRequest request) {
        return transactionService.consume(request);
    }
}
