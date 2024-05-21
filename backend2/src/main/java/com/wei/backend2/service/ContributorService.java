package com.wei.backend2.service;

import com.wei.backend2.entity.Contributor;
import com.wei.backend2.payload.request.AddContributor;

import java.util.List;

public interface ContributorService {
    List<Contributor> findAll();
    Contributor saveContributor(AddContributor addContributor);
    Contributor findById(Long id);  // 新增的方法
}
