package com.wei.serverkulelemultiple.member.controller;

import com.wei.serverkulelemultiple.member.dto.AddMemberRequest;
import com.wei.serverkulelemultiple.member.dto.MemberDetailsDTO;
import com.wei.serverkulelemultiple.member.entity.Member;
import com.wei.serverkulelemultiple.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    @Autowired
    private MemberService service;

    @GetMapping
    public List<Member> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Member getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new RuntimeException("未找到会员"));
    }

    @PostMapping
    public Member create(@RequestBody AddMemberRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public Member update(@PathVariable Long id, @RequestBody AddMemberRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/details/{id}")
    public MemberDetailsDTO getMemberDetails(@PathVariable Long id) {
        return service.getMemberDetails(id);
    }
}
