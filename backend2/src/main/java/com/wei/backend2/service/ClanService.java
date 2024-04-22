package com.wei.backend2.service;

import com.wei.backend2.entity.Clan;
import com.wei.backend2.payload.request.AddClan;

import java.util.List;

public interface ClanService {
    List<Clan> findAll();

    Clan saveClan(AddClan clan);
}
