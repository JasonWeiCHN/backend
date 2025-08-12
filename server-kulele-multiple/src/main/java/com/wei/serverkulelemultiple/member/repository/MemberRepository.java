package com.wei.serverkulelemultiple.member.repository;

import com.wei.serverkulelemultiple.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
