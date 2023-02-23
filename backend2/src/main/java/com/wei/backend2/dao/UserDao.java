package com.wei.backend2.dao;

import com.wei.backend2.entity.User;

import java.sql.SQLException;
import java.util.List;

public interface UserDao {
    User findById(int id);
    List<User> findAll() throws SQLException;
    void save(User user);
    void update(User user);
    void deleteById(int id);
}
