package com.wei.serverkulelemultiple.accounting.util;

import com.wei.serverkulelemultiple.accounting.dto.AccountingRecordDTO;
import com.wei.serverkulelemultiple.accounting.entity.AccountingRecord;

public class AccountingRecordMapper {

    public static AccountingRecordDTO toDTO(AccountingRecord record) {
        if (record == null) return null;

        AccountingRecordDTO dto = new AccountingRecordDTO();
        dto.setId(record.getId());
        dto.setStartDateTime(record.getStartDateTime());
        dto.setEndDateTime(record.getEndDateTime());
        dto.setConsoleType(record.getConsoleType());
        dto.setGameNames(record.getGameNames());
        dto.setDuration(record.getDuration());
        dto.setActualAmount(record.getActualAmount());
        dto.setCustomerType(record.getCustomerType());
        dto.setPlatform(record.getPlatform());
        dto.setRemark(record.getRemark());
        dto.setIsReturning(record.getIsReturning());

        // ✅ 防止空指针异常
        dto.setRoomId(record.getRoom() != null ? record.getRoom().getId() : null);

        return dto;
    }
}
