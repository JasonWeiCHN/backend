package com.wei.serverkulelemultiple.common.datasource;

import com.wei.serverkulelemultiple.common.context.TenantContext;
import com.wei.serverkulelemultiple.merchant.service.TenantInfoService;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class MultiTenantDataSource extends AbstractRoutingDataSource {

    private final Map<Object, Object> dataSources = new ConcurrentHashMap<>();

    private final TenantInfoService tenantInfoService;

    private DataSource defaultDataSource;  // 你自己维护的默认数据源

    public MultiTenantDataSource(TenantInfoService tenantInfoService) {
        this.tenantInfoService = tenantInfoService;

        super.setTargetDataSources(new HashMap<>());  // 初始化空Map
        super.afterPropertiesSet();
    }

    public void setDefaultDataSource(DataSource defaultDataSource) {
        this.defaultDataSource = defaultDataSource;  // 赋值给成员变量
        super.setDefaultTargetDataSource(defaultDataSource);
    }

    @Override
    protected Object determineCurrentLookupKey() {
        return TenantContext.getCurrentTenant();
    }

    @Override
    protected DataSource determineTargetDataSource() {
        String tenantId = (String) determineCurrentLookupKey();

        if (tenantId == null) {
            return defaultDataSource;  // 返回自己维护的默认数据源
        }

        if (!dataSources.containsKey(tenantId)) {
            String dbName = tenantInfoService.getDatabaseNameByTenantId(tenantId);
            DataSource ds = createDataSource(dbName);
            dataSources.put(tenantId, ds);

            super.setTargetDataSources(new HashMap<>(dataSources));
            super.afterPropertiesSet();
        }

        return (DataSource) dataSources.get(tenantId);
    }

    private DataSource createDataSource(String dbName) {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:postgresql://localhost:5432/" + dbName);
        ds.setUsername("kulele");
        ds.setPassword("P@ssw0rd11");
        ds.setDriverClassName("org.postgresql.Driver");
        return ds;
    }
}


