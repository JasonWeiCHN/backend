package com.wei.serverkulelemerchant.response;

import lombok.Data;

@Data
public class SimpleResponse {
    private String message;
    private boolean success;

    public SimpleResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}

