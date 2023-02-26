package com.wei.backend2.dao;

import com.wei.backend2.entity.Image;
import com.wei.backend2.util.PostgreCon;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

@Component
public class ImageDaoImpl implements ImageDao {

    @Override
    public Image findById(int id) {
        // TODO: 实现根据ID查询图片的方法
        return null;
    }

    @Override
    public List<Image> findAll() {
        // TODO: 实现查询所有图片的方法
        return null;
    }

    @Override
    public void save(Image image) {
        Connection connection = null;
        PreparedStatement statement = null;

        try {
            connection = PostgreCon.getConnection();
            String sql = "INSERT INTO image(name, hash, category, create_time, update_time) VALUES (?, ?, ?, ?, ?)";
            statement = connection.prepareStatement(sql);
            statement.setString(1, image.getName());
            statement.setString(2, image.getHash());
            statement.setString(3, image.getCategory());
            statement.setTimestamp(4, new java.sql.Timestamp(image.getCreateTime().getTime()));
            statement.setTimestamp(5, new java.sql.Timestamp(image.getUpdateTime().getTime()));
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
    public void update(Image image) {
        // TODO: 实现更新图片的方法
    }

    @Override
    public void deleteById(int id) {
        // TODO: 实现删除图片的方法
    }
}
