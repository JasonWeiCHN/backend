package com.wei.serverkulelemultiple.accounting.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class AccountingRecordDTO {
    private Long id;
    private LocalDateTime startDateTime;
    private LocalDateTime endDateTime;
    private BigDecimal duration;
    private String consoleType;
    private List<String> gameNames;
    private String customerType;
    private Boolean isReturning;
    private BigDecimal actualAmount;
    private String platform;
    private String contactType;
    private String contactValue;
    private String remark;
    private Long roomId;
}
