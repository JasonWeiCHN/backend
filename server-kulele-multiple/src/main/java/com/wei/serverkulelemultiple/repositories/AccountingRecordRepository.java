package com.wei.serverkulelemultiple.repositories;

import com.wei.serverkulelemultiple.entity.AccountingRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface AccountingRecordRepository extends JpaRepository<AccountingRecord, Long> {
    List<AccountingRecord> findByStartDateTimeBetween(LocalDateTime start, LocalDateTime end);
}