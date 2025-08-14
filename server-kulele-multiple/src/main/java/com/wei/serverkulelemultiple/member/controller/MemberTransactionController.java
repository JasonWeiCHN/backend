package com.wei.serverkulelemultiple.member.controller;

import com.wei.serverkulelemultiple.member.dto.MemberRechargeRequest;
import com.wei.serverkulelemultiple.member.dto.MemberConsumptionRequest;
import com.wei.serverkulelemultiple.member.entity.MemberRecharge;
import com.wei.serverkulelemultiple.member.entity.MemberConsumption;
import com.wei.serverkulelemultiple.member.service.MemberTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/recharges/{memberId}")
    public List<MemberRecharge> getRechargesByMember(@PathVariable Long memberId) {
        return transactionService.getRechargesByMember(memberId);
    }

    @GetMapping("/consumptions/{memberId}")
    public List<MemberConsumption> getConsumptionsByMember(@PathVariable Long memberId) {
        return transactionService.getConsumptionsByMember(memberId);
    }
}
