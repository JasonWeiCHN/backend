package com.wei.accounting.repositories;

import com.wei.accounting.entity.AccountingRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface AccountingRecordRepository extends JpaRepository<AccountingRecord, Long> {
    List<AccountingRecord> findByStartDateTimeBetween(LocalDateTime start, LocalDateTime end);
}