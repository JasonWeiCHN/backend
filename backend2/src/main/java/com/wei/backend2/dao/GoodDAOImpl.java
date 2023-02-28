package com.wei.backend2.dao;

import com.wei.backend2.entity.Good;
import com.wei.backend2.util.PostgreCon;
import org.springframework.stereotype.Component;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

@Component
public class GoodDAOImpl implements GoodDAO {
    @Override
    public void addGood(Good good) {
        Connection connection = null;
        PreparedStatement statement = null;

        try {
            connection = PostgreCon.getConnection();
            String sql = "INSERT INTO goods(name, hash, category, create_time, update_time) VALUES (?, ?, ?, ?, ?)";
            statement = connection.prepareStatement(sql);
            statement.setString(1, good.getName());
            statement.setString(2, good.getHash());
            statement.setString(3, good.getCategory());
            statement.setTimestamp(4, new java.sql.Timestamp(good.getCreateTime().getTime()));
            statement.setTimestamp(5, new java.sql.Timestamp(good.getUpdateTime().getTime()));
            statement.executeUpdate();
        } catch (SQLException e) {
            // 处理异常
            e.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void updateGood(Good good) {

    }

    @Override
    public void deleteGood(int goodId) {

    }

    @Override
    public Good getGoodById(int goodId) {
        return null;
    }

    @Override
    public List<Good> getAllGoods() {
        return null;
    }

    @Override
    public List<Good> getGoodsByCategory(String category) {
        return null;
    }
}
