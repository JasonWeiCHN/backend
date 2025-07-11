package com.wei.serverkulelemultiple.common.context;

public class TenantContext {
    private static final ThreadLocal<String> CURRENT_TENANT = new ThreadLocal<>();

    // ✅ 更语义化的方法名，建议主用这个
    public static void setCurrentTenant(String tenantId) {
        CURRENT_TENANT.set(tenantId);
    }

    public static String getCurrentTenant() {
        return CURRENT_TENANT.get();
    }

    public static void clear() {
        CURRENT_TENANT.remove();
    }

    // ✅ 兼容老方法名，如果你项目里有用到 setTenant/getTenant，也保留
    @Deprecated
    public static void setTenant(String tenantId) {
        setCurrentTenant(tenantId);
    }

    @Deprecated
    public static String getTenant() {
        return getCurrentTenant();
    }
}
