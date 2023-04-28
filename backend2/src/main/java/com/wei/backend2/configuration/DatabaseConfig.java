package com.wei.backend2.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "spring.datasource")
@Data
public class DatabaseConfig {
    private String url;
    private String username;
    private String password;
    private String driverClassName;

    // Getters and setters
}