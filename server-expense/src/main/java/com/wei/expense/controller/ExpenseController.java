package com.wei.expense.controller;

import com.wei.expense.entity.Expense;
import com.wei.expense.dto.AddExpenseRequest;
import com.wei.expense.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseService service;

    @GetMapping
    public List<Expense> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Expense getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new RuntimeException("未找到支出记录"));
    }

    @PostMapping
    public Expense create(@RequestBody AddExpenseRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public Expense update(@PathVariable Long id, @RequestBody AddExpenseRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
