package com.backend3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    /**
     * 读取配置文件内容：
     * 1.@Value
     * 2.Environment
     * 3.@ConfigurationProperties
     */
    @Value("${name}")
    private String name;

    @Value("${person.name}")
    private String name2;

    @Value("${address[0]}")
    private String address0;

    @Value("${address2[1]}")
    private String address2;

    //对象注入，一次可以获得多个值
    @Autowired
    private Environment env;

    @RequestMapping("/hello2")
    public String hello2(){
        System.out.println(name);
        System.out.println(address0);
        System.out.println(address2);
        System.out.println("--------------");
        System.out.println(env.getProperty("address[1]"));
        System.out.println(env.getProperty("person.name"));
        return name2;
    }

    @RequestMapping("/hello")
    public String hello(){
        return "hello 3!";
    }

}
