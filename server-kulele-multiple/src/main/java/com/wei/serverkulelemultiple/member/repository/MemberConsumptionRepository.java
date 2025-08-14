package com.wei.serverkulelemultiple.member.repository;

import com.wei.serverkulelemultiple.member.entity.MemberConsumption;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberConsumptionRepository extends JpaRepository<MemberConsumption, Long> {
    List<MemberConsumption> findByMemberIdOrderByConsumptionTimeDesc(Long memberId);
}
