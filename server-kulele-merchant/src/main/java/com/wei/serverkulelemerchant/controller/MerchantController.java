package com.wei.serverkulelemerchant.controller;
import com.wei.serverkulelemerchant.request.MerchantLoginRequest;
import com.wei.serverkulelemerchant.request.MerchantRegisterRequest;
import com.wei.serverkulelemerchant.response.LoginResponse;
import com.wei.serverkulelemerchant.response.SimpleResponse;
import com.wei.serverkulelemerchant.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/merchants")
public class MerchantController {

    @Autowired
    private MerchantService merchantService;

    @PostMapping("/register")
    public SimpleResponse register(@RequestBody MerchantRegisterRequest req) {
        merchantService.register(req);
        return new SimpleResponse(true,"注册成功");
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody MerchantLoginRequest req) {
        return merchantService.login(req);
    }
}
