package com.wei.serverkulelemultiple.config;

import com.wei.serverkulelemultiple.datasource.MultiTenantDataSource;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Configuration
public class DataSourceConfig {

    // 假设你支持这两个租户，可改为从数据库或配置中心动态加载
    private final List<String> tenantIds = List.of("accounting-A", "accounting-B");

    @Bean
    public DataSource dataSource() {
        Map<Object, Object> dataSourceMap = new HashMap<>();
        for (String tenantId : tenantIds) {
            dataSourceMap.put(tenantId, createDataSource(tenantId));
        }

        MultiTenantDataSource dataSource = new MultiTenantDataSource();
        dataSource.setDefaultTargetDataSource(createDataSource("accounting")); // 默认数据源
        dataSource.setTargetDataSources(dataSourceMap);
        dataSource.afterPropertiesSet();
        return dataSource;
    }

    private DataSource createDataSource(String dbName) {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl("jdbc:postgresql://localhost:5432/" + dbName);
        dataSource.setUsername("postgres");
        dataSource.setPassword("P@ssw0rd11");
        dataSource.setDriverClassName("org.postgresql.Driver");
        return dataSource;
    }
}

