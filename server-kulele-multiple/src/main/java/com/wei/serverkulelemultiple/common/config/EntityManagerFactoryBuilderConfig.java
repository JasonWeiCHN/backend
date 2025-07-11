package com.wei.serverkulelemultiple.common.config;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.persistenceunit.DefaultPersistenceUnitManager;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import java.util.HashMap;

@Configuration
public class EntityManagerFactoryBuilderConfig {

    @Bean
    public EntityManagerFactoryBuilder entityManagerFactoryBuilder() {
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        // 你可以根据需要设置 vendorAdapter 属性，比如 showSql
        DefaultPersistenceUnitManager persistenceUnitManager = new DefaultPersistenceUnitManager();
        persistenceUnitManager.afterPropertiesSet();

        return new EntityManagerFactoryBuilder(
                vendorAdapter,
                new HashMap<>(), // jpaPropertyMap（这里可以传空，后续通过 application.yml 统一设置）
                persistenceUnitManager
        );
    }
}