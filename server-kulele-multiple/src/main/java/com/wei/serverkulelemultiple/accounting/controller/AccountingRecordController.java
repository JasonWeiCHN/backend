package com.wei.serverkulelemultiple.accounting.controller;

import com.wei.serverkulelemultiple.accounting.dto.AccountingRecordDTO;
import com.wei.serverkulelemultiple.accounting.request.AddAccountingRecordRequest;
import com.wei.serverkulelemultiple.accounting.service.AccountingRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/accounting")
public class AccountingRecordController {

    @Autowired
    private AccountingRecordService service;

    @GetMapping
    public List<AccountingRecordDTO> getAllRecords() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public AccountingRecordDTO getRecordById(@PathVariable Long id) {
        return service.getById(id)
                .orElseThrow(() -> new RuntimeException("Record not found"));
    }

    @PostMapping
    public AccountingRecordDTO createRecord(@RequestBody AddAccountingRecordRequest record) {
        return service.create(record); // ✅ 已改为返回 DTO
    }

    @PutMapping("/{id}")
    public AccountingRecordDTO updateRecord(@PathVariable Long id, @RequestBody AddAccountingRecordRequest record) {
        return service.update(id, record); // ✅ 返回 DTO
    }

    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable Long id) {
        service.delete(id);
    }
}
