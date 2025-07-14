package com.wei.serverkulelemultiple.expense.repository;

import com.wei.serverkulelemultiple.expense.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
