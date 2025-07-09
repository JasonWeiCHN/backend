package com.wei.serverkulelemerchant.request;

import lombok.Data;

@Data
public class MerchantRegisterRequest {
    private String name;
    private String username;
    private String password;
    private String databaseName;
}
