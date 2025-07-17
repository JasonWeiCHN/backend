package com.wei.games;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ServerGamesApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(ServerGamesApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerGamesApplication.class, args);
    }

    @PostConstruct
    public void started() {
        System.out.println("ServerGamesApplication started!");
    }
}
