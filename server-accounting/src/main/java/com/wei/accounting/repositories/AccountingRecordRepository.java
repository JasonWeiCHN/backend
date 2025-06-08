package com.wei.accounting.repositories;

import com.wei.accounting.entity.AccountingRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountingRecordRepository extends JpaRepository<AccountingRecord, Long> {
}