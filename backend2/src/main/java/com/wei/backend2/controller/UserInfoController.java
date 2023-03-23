package com.wei.backend2.controller;

import com.wei.backend2.entity.UserInfo;
import com.wei.backend2.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserInfoController {
    private final UserInfoService userInfoService;

    @Autowired
    public UserInfoController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

    @PostMapping("/")
    public ResponseEntity<String> saveUserInfo(@RequestBody UserInfo userInfo) {
        userInfoService.saveUserInfo(userInfo);
        return ResponseEntity.ok("User information saved successfully");
    }
}
