package com.wei.serverkulelemerchant.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String tenantId;  // 实际就是 databaseName
}
