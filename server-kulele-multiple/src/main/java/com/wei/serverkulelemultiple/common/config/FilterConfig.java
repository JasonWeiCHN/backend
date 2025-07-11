package com.wei.serverkulelemultiple.common.config;

import com.wei.serverkulelemultiple.common.filter.JwtTenantFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
    @Bean
    public FilterRegistrationBean<JwtTenantFilter> tenantFilter() {
        FilterRegistrationBean<JwtTenantFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new JwtTenantFilter());
        registrationBean.addUrlPatterns("/*");
        return registrationBean;
    }
}

