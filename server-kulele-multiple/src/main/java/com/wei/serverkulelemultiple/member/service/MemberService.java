package com.wei.serverkulelemultiple.member.service;

import com.wei.serverkulelemultiple.accounting.repository.AccountingRecordRepository;
import com.wei.serverkulelemultiple.member.dto.AddMemberRequest;
import com.wei.serverkulelemultiple.member.dto.MemberDetailsDTO;
import com.wei.serverkulelemultiple.member.entity.Member;
import com.wei.serverkulelemultiple.member.entity.MemberOrder;
import com.wei.serverkulelemultiple.member.repository.MemberOrderRepository;
import com.wei.serverkulelemultiple.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    private MemberRepository repository;

    @Autowired
    private MemberOrderRepository memberOrderRepository;

    @Autowired
    private AccountingRecordRepository accountingRecordRepository;

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

    public MemberDetailsDTO getMemberDetails(Long id) {
        Member member = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("未找到会员"));

        List<MemberOrder> orders = memberOrderRepository.findByMemberId(id);

        double totalRecharge = orders.stream()
                .filter(o -> o.getOrderType() == MemberOrder.OrderType.RECHARGE)
                .mapToDouble(MemberOrder::getAmount)
                .sum();

        double totalConsumption = orders.stream()
                .filter(o -> o.getOrderType() == MemberOrder.OrderType.CONSUMPTION)
                .mapToDouble(MemberOrder::getAmount)
                .sum();

        double balance = totalRecharge - totalConsumption;

        List<Long> roomRecordIds = orders.stream()
                .filter(o -> o.getOrderType() == MemberOrder.OrderType.ROOM)
                .map(MemberOrder::getRelatedId)
                .toList();

        double totalPlayTime = accountingRecordRepository.findAllById(roomRecordIds)
                .stream()
                .mapToDouble(record -> record.getDuration().doubleValue())
                .sum();

        MemberDetailsDTO dto = new MemberDetailsDTO();
        dto.setId(member.getId());
        dto.setName(member.getName());
        dto.setPhone(member.getPhone());
        dto.setRemark(member.getRemark());
        dto.setCreatedAt(member.getCreatedAt());
        dto.setOrders(orders);
        dto.setBalance(balance);
        dto.setTotalPlayTime(totalPlayTime);

        return dto;
    }

    public List<Member> searchMembers(String keyword) {
        return repository.findByNameContainingIgnoreCaseOrPhoneContainingIgnoreCase(keyword, keyword);
    }

    private void copyProperties(Member m, AddMemberRequest r) {
        m.setName(r.getName());
        m.setPhone(r.getPhone());
        m.setRemark(r.getRemark());
    }
}
