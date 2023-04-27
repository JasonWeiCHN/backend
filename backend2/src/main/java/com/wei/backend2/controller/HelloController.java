package com.wei.backend2.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "HelloController")
public class HelloController {
    @RequestMapping("/")
    @ResponseBody
    public String sayHello() {
        System.out.println("Hello, World!");
        return "Hello, World!";
    }

    @RequestMapping("/hello")
    @ResponseBody
    @ApiOperation("hello")
    public String sayHelloText() {
        System.out.println("Hello, World 2!");
        return "Hello, World 2!";
    }
}
