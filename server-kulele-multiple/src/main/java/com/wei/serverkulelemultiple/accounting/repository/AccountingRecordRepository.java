package com.wei.serverkulelemultiple.accounting.repository;

import com.wei.serverkulelemultiple.accounting.entity.AccountingRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface AccountingRecordRepository extends JpaRepository<AccountingRecord, Long> {

    List<AccountingRecord> findByStartDateTimeBetween(LocalDateTime start, LocalDateTime end);

    // ✅ 新增：预加载 gameNames，避免 LazyInitializationException
    @Query("SELECT DISTINCT a FROM AccountingRecord a " +
            "LEFT JOIN FETCH a.gameNames " +
            "LEFT JOIN FETCH a.room " +
            "ORDER BY a.startDateTime DESC")
    List<AccountingRecord> findAllWithGameNames();

    @Query("SELECT a FROM AccountingRecord a " +
            "LEFT JOIN FETCH a.gameNames " +
            "LEFT JOIN FETCH a.room " +
            "WHERE a.id = :id")
    Optional<AccountingRecord> findByIdWithGameNames(@Param("id") Long id);

    @Query("SELECT a FROM AccountingRecord a WHERE a.room.id = :roomId AND a.startDateTime < :now AND a.endDateTime > :now")
    List<AccountingRecord> findActiveByRoom(@Param("roomId") Long roomId, @Param("now") LocalDateTime now);
}
