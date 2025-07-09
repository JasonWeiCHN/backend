package com.wei.serverkulelemerchant.service;
import com.wei.serverkulelemerchant.entity.Merchant;
import com.wei.serverkulelemerchant.repositories.MerchantRepository;
import com.wei.serverkulelemerchant.request.MerchantLoginRequest;
import com.wei.serverkulelemerchant.request.MerchantRegisterRequest;
import com.wei.serverkulelemerchant.response.LoginResponse;
import javax.sql.DataSource;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MerchantService {

    @Autowired
    private MerchantRepository merchantRepository;

    @Autowired
    private DataSource defaultDataSource;

    public void register(MerchantRegisterRequest req) {
        if (merchantRepository.existsByDatabaseName(req.getDatabaseName())) {
            throw new RuntimeException("数据库名已存在");
        }

        Merchant merchant = new Merchant();
        merchant.setName(req.getName());
        merchant.setUsername(req.getUsername());
        merchant.setPassword(req.getPassword()); // 建议后期加密
        merchant.setDatabaseName(req.getDatabaseName());
        merchant.setCreatedAt(LocalDateTime.now());

        merchantRepository.save(merchant);

        createDatabase(req.getDatabaseName());
    }

    public LoginResponse login(MerchantLoginRequest req) {
        Merchant merchant = merchantRepository.findByUsername(req.getUsername())
                .orElseThrow(() -> new RuntimeException("用户名不存在"));

        if (!merchant.getPassword().equals(req.getPassword())) {
            throw new RuntimeException("密码错误");
        }

        return new LoginResponse(merchant.getDatabaseName());
    }

    private void createDatabase(String dbName) {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(defaultDataSource);
        jdbcTemplate.execute("CREATE DATABASE \"" + dbName + "\"");

        // 初始化数据库结构
        String jdbcUrl = "jdbc:postgresql://localhost:5432/" + dbName;

        Flyway flyway = Flyway.configure()
                .dataSource(jdbcUrl, "postgres", "P@ssw0rd11") // 建议密码放到配置或加密
                .locations("classpath:db/migration")
                .baselineOnMigrate(true)
                .load();

        flyway.migrate();
    }
}
