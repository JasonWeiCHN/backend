package com.wei.serverkulelemultiple.accounting.repository;

import com.wei.serverkulelemultiple.accounting.entity.AccountingRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface AccountingRecordRepository extends JpaRepository<AccountingRecord, Long> {
    List<AccountingRecord> findByStartDateTimeBetween(LocalDateTime start, LocalDateTime end);
}