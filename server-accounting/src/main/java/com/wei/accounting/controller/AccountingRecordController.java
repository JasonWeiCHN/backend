package com.wei.accounting.controller;

import com.wei.accounting.entity.AccountingRecord;
import com.wei.accounting.request.AddAccountingRecordRequest;
import com.wei.accounting.service.AccountingRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounting")
@CrossOrigin(origins = "*") // 如需允许前端本地访问
public class AccountingRecordController {

    @Autowired
    private AccountingRecordService service;

    @GetMapping
    public List<AccountingRecord> getAllRecords() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public AccountingRecord getRecordById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new RuntimeException("Record not found"));
    }

    @PostMapping
    public AccountingRecord createRecord(@RequestBody AddAccountingRecordRequest record) {
        return service.create(record);
    }

    @PutMapping("/{id}")
    public AccountingRecord updateRecord(@PathVariable Long id, @RequestBody AddAccountingRecordRequest record) {
        return service.update(id, record);
    }

    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable Long id) {
        service.delete(id);
    }
}
