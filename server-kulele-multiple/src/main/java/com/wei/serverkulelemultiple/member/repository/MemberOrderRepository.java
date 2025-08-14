package com.wei.serverkulelemultiple.member.repository;

import com.wei.serverkulelemultiple.member.entity.MemberOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberOrderRepository extends JpaRepository<MemberOrder, Long> {
    // 按会员ID查所有订单
    List<MemberOrder> findByMemberId(Long memberId);
}
