package com.wei.serverkulelemultiple.member.repository;

import com.wei.serverkulelemultiple.member.entity.MemberOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberOrderRepository extends JpaRepository<MemberOrder, Long> {
}
