package com.wei.backend2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    @RequestMapping("/")
    @ResponseBody
    public String sayHello() {
        System.out.println("Hello, World!");
        return "Hello, World!";
    }

    @RequestMapping("/hello")
    @ResponseBody
    public String sayHelloText() {
        System.out.println("Hello, World 2!");
        return "Hello, World 2!";
    }
}
