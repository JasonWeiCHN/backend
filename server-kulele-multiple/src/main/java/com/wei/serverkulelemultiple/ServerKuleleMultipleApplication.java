package com.wei.serverkulelemultiple;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ServerKuleleMultipleApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(ServerKuleleMultipleApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.                           run(ServerKuleleMultipleApplication.class, args);
    }

    @PostConstruct
    public void started() {
        System.out.println("ServerKuleleMultipleApplication started!");
    }

}
