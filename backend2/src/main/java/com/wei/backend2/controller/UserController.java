package com.wei.backend2.controller;

import com.wei.backend2.dto.UserDTO;
import com.wei.backend2.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    @ResponseBody
//    @RequestMapping("/users")
//    @ResponseBody
    public List<UserDTO> getUsers() {
        return userService.getUserList();
    }
}
