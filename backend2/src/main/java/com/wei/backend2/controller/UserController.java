package com.wei.backend2.controller;

import com.wei.backend2.dto.UserDTO;
import com.wei.backend2.request.AddUserRequest;
import com.wei.backend2.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = "user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    @ApiOperation("get user")
    public List<UserDTO> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/")
    @ApiOperation("add user")
    public void addUser(@RequestBody AddUserRequest addUserRequest) {
        userService.addUser(addUserRequest);
    }
}
