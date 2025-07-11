package com.wei.serverkulelemultiple.merchant.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;

@Service
public class TenantInfoService {

    private final JdbcTemplate jdbcTemplate;

    public TenantInfoService(@Qualifier("masterDataSource") DataSource masterDataSource) {
        this.jdbcTemplate = new JdbcTemplate(masterDataSource);
    }

    public String getDatabaseNameByTenantId(String tenantId) {
        String sql = "SELECT database_name FROM merchant WHERE tenant_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{tenantId}, String.class);
    }
}

