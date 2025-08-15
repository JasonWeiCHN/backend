package com.wei.serverkulelemultiple.member.repository;

import com.wei.serverkulelemultiple.member.dto.MemberListDTO;
import com.wei.serverkulelemultiple.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    // 按姓名或手机号模糊搜索
    List<Member> findByNameContainingIgnoreCaseOrPhoneContainingIgnoreCase(String nameKeyword, String phoneKeyword);

    @Query("""
        SELECT new com.wei.serverkulelemultiple.member.dto.MemberListDTO(
            m.id, m.name, m.phone, m.remark, m.createdAt,
            COALESCE(SUM(o.amount), 0)
        )
        FROM Member m
        LEFT JOIN MemberOrder o ON m.id = o.member.id
        GROUP BY m.id, m.name, m.phone, m.remark, m.createdAt
        ORDER BY m.createdAt DESC
    """)
    List<MemberListDTO> findAllWithBalance();
}
