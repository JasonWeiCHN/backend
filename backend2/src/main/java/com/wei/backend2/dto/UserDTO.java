package com.wei.backend2.dto;

import lombok.Data;

@Data
public class UserDTO {
    private String name;
    private String email;
    private String phone;
    private String creationTime;
}
