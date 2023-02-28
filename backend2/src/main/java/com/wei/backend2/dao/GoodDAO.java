package com.wei.backend2.dao;

import com.wei.backend2.entity.Good;

import java.util.List;

public interface GoodDAO {
    public void addGood(Good good);
    public void updateGood(Good good);
    public void deleteGood(int goodId);
    public Good getGoodById(int goodId);
    public List<Good> getAllGoods();
    public List<Good> getGoodsByCategory(String category);
}

