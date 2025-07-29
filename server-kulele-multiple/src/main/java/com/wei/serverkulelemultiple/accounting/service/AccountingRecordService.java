package com.wei.serverkulelemultiple.accounting.service;

import com.wei.serverkulelemultiple.accounting.dto.AccountingRecordDTO;
import com.wei.serverkulelemultiple.accounting.entity.AccountingRecord;
import com.wei.serverkulelemultiple.accounting.repository.AccountingRecordRepository;
import com.wei.serverkulelemultiple.accounting.request.AddAccountingRecordRequest;
import com.wei.serverkulelemultiple.accounting.util.AccountingRecordMapper;
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

    public AccountingRecordDTO create(AddAccountingRecordRequest request) {
        AccountingRecord record = new AccountingRecord();
        copyProperties(record, request);
        AccountingRecord saved = repository.save(record);

        // 手动加载懒加载字段，防止 LazyInitializationException
        saved.getGameNames().size();

        return toDTO(saved);
    }

    public AccountingRecordDTO update(Long id, AddAccountingRecordRequest request) {
        AccountingRecord record = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("记录未找到: id=" + id));
        copyProperties(record, request);
        AccountingRecord saved = repository.save(record);

        saved.getGameNames().size(); // 手动触发懒加载字段

        return toDTO(saved);
    }

    public void delete(Long id) {
        repository.deleteById(id);
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
