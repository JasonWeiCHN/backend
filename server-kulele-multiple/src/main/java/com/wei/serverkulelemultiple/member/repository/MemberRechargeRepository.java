package com.wei.serverkulelemultiple.member.repository;

import com.wei.serverkulelemultiple.member.entity.MemberRecharge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRechargeRepository extends JpaRepository<MemberRecharge, Long> {
    List<MemberRecharge> findByMemberIdOrderByRechargeTimeDesc(Long memberId);
}
