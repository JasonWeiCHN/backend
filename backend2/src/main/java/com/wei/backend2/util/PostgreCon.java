package com.wei.backend2.util;

import com.sun.tools.javac.Main;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.io.IOException;
import java.sql.Statement;

/**
 * createUserTable 可以废弃 因为有大量的hard code
 * executeSqlFromFile 可以调整下 里面有数据库信息的hard code 应该改到配置 而且 密码明文了 应该考虑怎么保护
 * connectPostgreSQL 可以废弃 测试用的方法
 */
public class PostgreCon {
    @Deprecated
    public static void createUserTable() {
        String url = "jdbc:postgresql://localhost:5432/jason";
        String user = "postgres";
        String password = "19871227";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement()) {

            // 加载包含创建表和添加注释的SQL语句的文件
//            InputStream stream = Main.class.getResourceAsStream("/db/create_and_comment_user_table.sql");
//            String sql = new String(stream.readAllBytes());

            // 加载SQL文件
//            InputStream is = new FileInputStream("src\\main\\resources\\db\\create_user_table.sql");
            // 加载包含创建表和添加注释的SQL语句的文件
//            InputStream stream = Main.class.getResourceAsStream("create_user_table.sql");
            InputStream stream = Main.class.getResourceAsStream("src/main/resources/db/create_user_table.sql");
            String sql = new String(stream.readAllBytes());
//            String sql = new String(is.readAllBytes(), StandardCharsets.UTF_8);

            // 执行创建表的SQL语句
            stmt.executeUpdate(sql);

            System.out.println("User表和它的列已成功创建并添加了注释。");

        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }
    }

    private static void executeSqlFromFile(String filePath) throws IOException {
        try (InputStream inputStream = PostgreCon.class.getResourceAsStream(filePath)) {
            if (inputStream == null) {
                throw new IOException("Cannot find resource file: " + filePath);
            }
            String sql = new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);

            String url = "jdbc:postgresql://localhost:5432/jason";
            String user = "postgres";
            String password = "19871227";

            try (Connection conn = DriverManager.getConnection(url, user, password);
                 Statement stmt = conn.createStatement()) {
                stmt.execute(sql);
                System.out.println("SQL executed successfully");
            } catch (SQLException e) {
                System.err.println("Failed to execute SQL: " + e.getMessage());
            }
        }
    }

    public static Connection getConnection() {
        String url = "jdbc:postgresql://localhost:5432/jason";
        String user = "postgres";
        String password = "19871227";
        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server successfully.");
            return conn;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public static void main(String[] args) throws IOException {
//        createUserTable();
//        executeSqlFromFile("/db/create_user_table.sql");
//        executeSqlFromFile("/db/create_image_table.sql");
//        executeSqlFromFile("/db/create_good_table.sql");
        executeSqlFromFile("/db/create_w_user_table.sql");
    }
}
