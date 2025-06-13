package com.wei.accounting.service;

import com.wei.accounting.entity.AccountingRecord;
import com.wei.accounting.repositories.AccountingRecordRepository;
import com.wei.accounting.request.AddAccountingRecordRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountingRecordService {

    @Autowired
    private AccountingRecordRepository repository;

    public List<AccountingRecord> getAll() {
        return repository.findAll();
    }

    public Optional<AccountingRecord> getById(Long id) {
        return repository.findById(id);
    }

    public AccountingRecord create(AddAccountingRecordRequest request) {
        AccountingRecord record = new AccountingRecord();
        copyProperties(record, request);
        return repository.save(record);
    }

    public AccountingRecord update(Long id, AddAccountingRecordRequest request) {
        AccountingRecord record = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("记录未找到: id=" + id));
        copyProperties(record, request);
        return repository.save(record);
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
    }
}
