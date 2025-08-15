package com.wei.serverkulelemultiple.accounting.service;

import com.wei.serverkulelemultiple.accounting.dto.AccountingRecordDTO;
import com.wei.serverkulelemultiple.accounting.entity.AccountingRecord;
import com.wei.serverkulelemultiple.accounting.repository.AccountingRecordRepository;
import com.wei.serverkulelemultiple.accounting.request.AddAccountingRecordRequest;
import com.wei.serverkulelemultiple.accounting.util.AccountingRecordMapper;
import com.wei.serverkulelemultiple.member.entity.MemberOrder;
import com.wei.serverkulelemultiple.member.repository.MemberOrderRepository;
import com.wei.serverkulelemultiple.member.repository.MemberRepository;
import com.wei.serverkulelemultiple.room.entity.Room;
import com.wei.serverkulelemultiple.room.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;
import static com.wei.serverkulelemultiple.accounting.util.AccountingRecordMapper.toDTO;

@Service
public class AccountingRecordService {

    @Autowired
    private AccountingRecordRepository repository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private MemberOrderRepository memberOrderRepository;

    @Autowired
    private MemberRepository memberRepository;

    public List<AccountingRecordDTO> getAll() {
        List<AccountingRecord> records = repository.findAllWithGameNames();
        return records.stream()
                .map(AccountingRecordMapper::toDTO)
                .toList();
    }

    @Transactional(transactionManager = "tenantTransactionManager", readOnly = true)
    public Optional<AccountingRecordDTO> getById(Long id) {
        return repository.findByIdWithGameNames(id)
                .map(AccountingRecordMapper::toDTO);
    }

    @Transactional(transactionManager = "tenantTransactionManager")
    public AccountingRecordDTO create(AddAccountingRecordRequest request) {
        AccountingRecord record = new AccountingRecord();
        copyProperties(record, request);

        // 如果是会员，绑定 Member 实体
        if (request.getMemberId() != null) {
            memberRepository.findById(request.getMemberId()).ifPresent(record::setMember);
        }

        AccountingRecord saved = repository.save(record);

        // 生成对应的 MemberOrder（如果是会员）
        if (record.getMember() != null) {
            MemberOrder order = new MemberOrder();
            order.setMember(record.getMember());
            order.setOrderType(MemberOrder.OrderType.ROOM);
            order.setRelatedId(saved.getId()); // 指向 accounting_record id
            order.setAmount(request.getActualAmount().doubleValue());
            memberOrderRepository.save(order);
        }

        saved.getGameNames().size(); // 手动触发懒加载
        return toDTO(saved);
    }


    @Transactional(transactionManager = "tenantTransactionManager")
    public AccountingRecordDTO update(Long id, AddAccountingRecordRequest request) {
        AccountingRecord record = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("记录未找到: id=" + id));

        copyProperties(record, request);

        // 如果是会员，绑定 Member 实体
        if (request.getMemberId() != null) {
            memberRepository.findById(request.getMemberId()).ifPresent(record::setMember);
        } else {
            record.setMember(null);
        }

        AccountingRecord saved = repository.save(record);

        // 修改对应 MemberOrder
        if (record.getMember() != null) {
            // 找到这条记录对应的 MemberOrder
            MemberOrder order = memberOrderRepository
                    .findByMemberIdAndRelatedIdAndOrderType(record.getMember().getId(), saved.getId(), MemberOrder.OrderType.ROOM)
                    .orElseGet(() -> {
                        // 如果不存在，则创建新的（保证兼容旧数据）
                        MemberOrder newOrder = new MemberOrder();
                        newOrder.setMember(record.getMember());
                        newOrder.setOrderType(MemberOrder.OrderType.ROOM);
                        newOrder.setRelatedId(saved.getId());
                        return newOrder;
                    });
            order.setAmount(request.getActualAmount().doubleValue());
            memberOrderRepository.save(order);
        }

        saved.getGameNames().size(); // 手动触发懒加载
        return toDTO(saved);
    }

    @Transactional(transactionManager = "tenantTransactionManager")
    public void delete(Long id) {
        // 先查找 AccountingRecord
        AccountingRecord record = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("记录未找到: id=" + id));

        // 如果有绑定会员，则删除对应的 MemberOrder
        if (record.getMember() != null) {
            memberOrderRepository
                    .findByMemberIdAndRelatedIdAndOrderType(
                            record.getMember().getId(),
                            record.getId(),
                            MemberOrder.OrderType.ROOM
                    )
                    .ifPresent(memberOrderRepository::delete);
        }

        // 再删除 AccountingRecord
        repository.delete(record);
    }

    private void copyProperties(AccountingRecord record, AddAccountingRecordRequest request) {
        record.setStartDateTime(request.getStartDateTime());
        record.setEndDateTime(request.getEndDateTime());
        record.setDuration(request.getDuration());
        record.setConsoleType(request.getConsoleType());
        record.setGameNames(request.getGameNames());
        record.setCustomerType(request.getCustomerType());
        record.setIsReturning(request.getIsReturning());
        record.setActualAmount(request.getActualAmount());
        record.setPlatform(request.getPlatform());
        record.setContactType(request.getContactType());
        record.setContactValue(request.getContactValue());
        record.setRemark(request.getRemark());
        // 你需要先拿到 Room 实体，比如通过 RoomRepository 查找 Room
        if (request.getRoomId() != null) {
            Room room = roomRepository.findById(request.getRoomId())
                    .orElseThrow(() -> new RuntimeException("房间不存在 id=" + request.getRoomId()));
            record.setRoom(room);
        } else {
            record.setRoom(null);
        }
    }
}
