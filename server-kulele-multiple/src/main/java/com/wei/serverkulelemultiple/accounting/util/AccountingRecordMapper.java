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
        dto.setContactType(record.getContactType() != null ? record.getContactType() : null);
        dto.setContactValue(record.getContactValue() != null ? record.getContactValue() : null);
        dto.setIsReturning(record.getIsReturning());

        // ✅ 防止空指针异常
        if (record.getRoom() != null) {
            dto.setRoomId(record.getRoom().getId());
            dto.setRoomNumber(record.getRoom().getRoomNumber());
        }
        dto.setRoomId(record.getRoom() != null ? record.getRoom().getId() : null);

        // 新增：会员信息
        if (record.getMember() != null) {
            dto.setMemberId(record.getMember().getId());
            dto.setMemberName(record.getMember().getName()); // 假设 Member 有 getName()
        }

        return dto;
    }
}
