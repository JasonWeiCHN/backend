package com.wei.serverkulelemultiple.member.service;

import com.wei.serverkulelemultiple.member.dto.AddMemberRequest;
import com.wei.serverkulelemultiple.member.entity.Member;
import com.wei.serverkulelemultiple.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    private MemberRepository repository;

    public List<Member> getAll() {
        return repository.findAll();
    }

    public Optional<Member> getById(Long id) {
        return repository.findById(id);
    }

    public Member create(AddMemberRequest request) {
        Member m = new Member();
        copyProperties(m, request);
        return repository.save(m);
    }

    public Member update(Long id, AddMemberRequest request) {
        Member m = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("未找到会员: id=" + id));
        copyProperties(m, request);
        return repository.save(m);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyProperties(Member m, AddMemberRequest r) {
        m.setName(r.getName());
        m.setPhone(r.getPhone());
        m.setRemark(r.getRemark());
    }
}
