package com.wei.accounting.service;

import com.wei.accounting.entity.AccountingRecord;
import com.wei.accounting.repositories.AccountingRecordRepository;
import com.wei.accounting.request.AddAccountingRecordRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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

    public String generateAccountingTxtContent() {
        List<AccountingRecord> records = getAll();

        BigDecimal totalAmount = BigDecimal.ZERO;
        BigDecimal totalDuration = BigDecimal.ZERO;
        int totalRecords = records.size();

        StringBuilder content = new StringBuilder();

        for (AccountingRecord record : records) {
            totalAmount = totalAmount.add(record.getActualAmount());
            totalDuration = totalDuration.add(record.getDuration());
        }

        // 汇总信息
        content.append("记账单统计\n");
        content.append("总实收金额: ").append(totalAmount).append(" 元\n");
        content.append("总游戏时长: ").append(totalDuration).append(" 小时\n");
        content.append("总记录数: ").append(totalRecords).append(" 条\n");
        content.append("\n详细记录如下：\n");

        // 明细记录
        for (AccountingRecord record : records) {
            String date = record.getStartDateTime().toLocalDate().toString();

            // 处理游戏名，替换空字符串或空集合为 "未知游戏"
            List<String> gameNamesList = record.getGameNames();
            String gameNames;
            if (gameNamesList == null || gameNamesList.isEmpty()) {
                gameNames = "未知游戏";
            } else {
                // 过滤掉空字符串，再判断
                List<String> filteredNames = gameNamesList.stream()
                        .filter(name -> name != null && !name.trim().isEmpty())
                        .toList();
                gameNames = filteredNames.isEmpty() ? "未知游戏" : String.join(",", filteredNames);
            }

            content.append(date).append(" ")
                    .append(gameNames).append(" ")
                    .append(record.getDuration()).append("小时 ")
                    .append(record.getActualAmount()).append("元 ")
                    .append(record.getCustomerType()).append(" ")
                    .append(record.getPlatform())
                    .append("\n");
        }

        return content.toString();
    }
}
