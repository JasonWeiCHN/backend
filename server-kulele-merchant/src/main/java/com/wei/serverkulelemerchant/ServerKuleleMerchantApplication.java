package com.wei.serverkulelemerchant;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ServerKuleleMerchantApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(ServerKuleleMerchantApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerKuleleMerchantApplication.class, args);
    }

    @PostConstruct
    public void started() {
        System.out.println("ServerKuleleMerchantApplication started!");
    }
}
