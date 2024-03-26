package com.wei.backend2.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

@Configuration
public class DatabaseInitializer {

    @Autowired
    private DatabaseConfig databaseConfig;

    @PostConstruct
    public void initializeDatabase() {
        try {
            // 连接到 PostgreSQL 数据库服务器
            Connection connection = DriverManager.getConnection(databaseConfig.getUrl(), databaseConfig.getUsername(), databaseConfig.getPassword());
            Statement statement = connection.createStatement();

            // 检查数据库是否存在
            String dbName = "jason";
            boolean databaseExists = statement.executeQuery("SELECT 1 FROM pg_database WHERE datname = '" + dbName + "'").next();

            // 如果数据库不存在，则创建数据库
            if (!databaseExists) {
                statement.executeUpdate("CREATE DATABASE " + dbName);
                System.out.println("数据库 " + dbName + " 创建成功");
            }

            // 关闭连接
            statement.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
