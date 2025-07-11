package com.wei.serverkulelemultiple.common.config;

import com.wei.serverkulelemultiple.common.datasource.MultiTenantDataSource;
import com.wei.serverkulelemultiple.merchant.service.TenantInfoService;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

@Configuration
@EnableConfigurationProperties({MasterDataSourceProperties.class, DefaultDataSourceProperties.class})
public class DataSourceConfig {

    @Bean(name = "masterDataSource")
    public DataSource masterDataSource(MasterDataSourceProperties props) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(props.getUrl());
        config.setUsername(props.getUsername());
        config.setPassword(props.getPassword());
        config.setDriverClassName(props.getDriverClassName());
        config.setMaximumPoolSize(props.getHikari().getMaximumPoolSize());
        config.setMinimumIdle(props.getHikari().getMinimumIdle());
        config.setIdleTimeout(props.getHikari().getIdleTimeout());
        config.setMaxLifetime(props.getHikari().getMaxLifetime());
        config.setConnectionTimeout(props.getHikari().getConnectionTimeout());
        config.setValidationTimeout(props.getHikari().getValidationTimeout());
        return new HikariDataSource(config);
    }

    @Bean(name = "defaultDataSource")
    public DataSource defaultDataSource(DefaultDataSourceProperties props) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(props.getUrl());
        config.setUsername(props.getUsername());
        config.setPassword(props.getPassword());
        config.setDriverClassName(props.getDriverClassName());
        config.setMaximumPoolSize(props.getHikari().getMaximumPoolSize());
        config.setMinimumIdle(props.getHikari().getMinimumIdle());
        config.setIdleTimeout(props.getHikari().getIdleTimeout());
        config.setMaxLifetime(props.getHikari().getMaxLifetime());
        config.setConnectionTimeout(props.getHikari().getConnectionTimeout());
        config.setValidationTimeout(props.getHikari().getValidationTimeout());
        return new HikariDataSource(config);
    }

    @Bean(name = "masterJdbcTemplate")
    public JdbcTemplate masterJdbcTemplate(@Qualifier("masterDataSource") DataSource ds) {
        return new JdbcTemplate(ds);
    }

    @Bean(name = "multiTenantDataSource")
    public DataSource multiTenantDataSource(@Qualifier("defaultDataSource") DataSource defaultDataSource,
                                            TenantInfoService tenantInfoService) {
        MultiTenantDataSource ds = new MultiTenantDataSource(tenantInfoService);
        ds.setDefaultDataSource(defaultDataSource); // ✅ 设置默认数据源
        return ds;
    }
}
