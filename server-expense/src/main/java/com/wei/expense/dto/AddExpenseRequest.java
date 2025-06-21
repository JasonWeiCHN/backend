package com.wei.expense.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class AddExpenseRequest {
    private LocalDateTime dateTime;
    private String category;
    private String description;
    private BigDecimal amount;
}
