package com.wei.serverkulelemultiple.member.repository;

import com.wei.serverkulelemultiple.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    // 按姓名或手机号模糊搜索
    List<Member> findByNameContainingIgnoreCaseOrPhoneContainingIgnoreCase(String nameKeyword, String phoneKeyword);
}
