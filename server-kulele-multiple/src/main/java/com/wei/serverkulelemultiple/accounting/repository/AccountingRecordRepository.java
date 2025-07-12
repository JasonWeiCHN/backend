package com.wei.serverkulelemultiple.accounting.repository;

import com.wei.serverkulelemultiple.accounting.entity.AccountingRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface AccountingRecordRepository extends JpaRepository<AccountingRecord, Long> {

    List<AccountingRecord> findByStartDateTimeBetween(LocalDateTime start, LocalDateTime end);

    // ✅ 新增：预加载 gameNames，避免 LazyInitializationException
    @Query("SELECT a FROM AccountingRecord a LEFT JOIN FETCH a.gameNames")
    List<AccountingRecord> findAllWithGameNames();
}
