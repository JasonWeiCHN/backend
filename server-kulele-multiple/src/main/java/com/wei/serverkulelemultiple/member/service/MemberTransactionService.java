package com.wei.serverkulelemultiple.member.service;

import com.wei.serverkulelemultiple.member.dto.MemberRechargeRequest;
import com.wei.serverkulelemultiple.member.dto.MemberConsumptionRequest;
import com.wei.serverkulelemultiple.member.entity.*;
import com.wei.serverkulelemultiple.member.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MemberTransactionService {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private MemberRechargeRepository rechargeRepository;
    @Autowired
    private MemberConsumptionRepository consumptionRepository;
    @Autowired
    private MemberOrderRepository orderRepository;

    @Transactional(transactionManager = "tenantTransactionManager")
    public MemberRecharge recharge(MemberRechargeRequest request) {
        Member member = memberRepository.findById(request.getMemberId())
                .orElseThrow(() -> new RuntimeException("会员不存在"));

        // 充值记录
        MemberRecharge recharge = new MemberRecharge();
        recharge.setMember(member);
        recharge.setAmount(request.getAmount());
        recharge.setBonusAmount(request.getBonusAmount());
        recharge.setRechargeTime(LocalDateTime.now());
        rechargeRepository.save(recharge);

        // 会员订单记录
        MemberOrder order = new MemberOrder();
        order.setMember(member);
        order.setOrderType(MemberOrder.OrderType.RECHARGE);
        order.setRelatedId(recharge.getId());
        order.setAmount(request.getAmount() + request.getBonusAmount());
        orderRepository.save(order);

        return recharge;
    }

    @Transactional(transactionManager = "tenantTransactionManager")
    public MemberConsumption consume(MemberConsumptionRequest request) {
        Member member = memberRepository.findById(request.getMemberId())
                .orElseThrow(() -> new RuntimeException("会员不存在"));

        // 消费记录
        MemberConsumption consumption = new MemberConsumption();
        consumption.setMember(member);
        consumption.setAmount(request.getAmount());
        consumption.setRemark(request.getRemark());
        consumption.setConsumptionTime(LocalDateTime.now());
        consumptionRepository.save(consumption);

        // 会员订单记录（负数金额）
        MemberOrder order = new MemberOrder();
        order.setMember(member);
        order.setOrderType(MemberOrder.OrderType.CONSUMPTION);
        order.setRelatedId(consumption.getId());
        order.setAmount(-request.getAmount());
        orderRepository.save(order);

        return consumption;
    }

    public List<MemberRecharge> getRechargesByMember(Long memberId) {
        return rechargeRepository.findByMemberIdOrderByRechargeTimeDesc(memberId);
    }

    public List<MemberConsumption> getConsumptionsByMember(Long memberId) {
        return consumptionRepository.findByMemberIdOrderByConsumptionTimeDesc(memberId);
    }
}
