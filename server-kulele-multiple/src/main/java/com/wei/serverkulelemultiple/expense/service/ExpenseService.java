package com.wei.serverkulelemultiple.expense.service;

import com.wei.serverkulelemultiple.expense.dto.AddExpenseRequest;
import com.wei.serverkulelemultiple.expense.entity.Expense;
import com.wei.serverkulelemultiple.expense.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository repository;

    public List<Expense> getAll() {
        return repository.findAll();
    }

    public Optional<Expense> getById(Long id) {
        return repository.findById(id);
    }

    public Expense create(AddExpenseRequest request) {
        Expense expense = new Expense();
        copyProperties(expense, request);
        return repository.save(expense);
    }

    public Expense update(Long id, AddExpenseRequest request) {
        Expense expense = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("未找到支出记录: id=" + id));
        copyProperties(expense, request);
        return repository.save(expense);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyProperties(Expense e, AddExpenseRequest r) {
        e.setDateTime(r.getDateTime());
        e.setCategory(r.getCategory());
        e.setDescription(r.getDescription());
        e.setAmount(r.getAmount());
    }
}
