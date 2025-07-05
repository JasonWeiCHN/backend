package com.wei.serverkulelemultiple.datasource;

import com.wei.serverkulelemultiple.context.TenantContext;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

public class MultiTenantDataSource extends AbstractRoutingDataSource {

    @Override
    protected Object determineCurrentLookupKey() {
        return TenantContext.getTenant(); // 返回当前线程设置的租户 ID
    }
}
