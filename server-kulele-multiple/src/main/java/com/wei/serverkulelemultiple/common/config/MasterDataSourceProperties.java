package com.wei.serverkulelemultiple.common.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "spring.datasource.master")
@Data
public class MasterDataSourceProperties {
    private String url;
    private String username;
    private String password;
    private String driverClassName;
    private HikariCpProperties hikari = new HikariCpProperties();

    @Data
    public static class HikariCpProperties {
        private int maximumPoolSize;
        private int minimumIdle;
        private long idleTimeout;
        private long maxLifetime;
        private long connectionTimeout;
        private long validationTimeout;
        private int loginTimeout;
    }
}
