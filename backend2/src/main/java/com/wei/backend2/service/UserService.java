package com.wei.backend2.service;

import com.wei.backend2.dto.UserDTO;
import com.wei.backend2.request.AddUserRequest;

import java.util.List;

public interface UserService {
    List<UserDTO> getUsers();
    void addUser(AddUserRequest user);
}
