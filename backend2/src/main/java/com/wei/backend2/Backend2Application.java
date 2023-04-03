package com.wei.backend2;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Backend2Application {
    public static void main(String[] args) {
        SpringApplication.run(Backend2Application.class, args);
    }
}
