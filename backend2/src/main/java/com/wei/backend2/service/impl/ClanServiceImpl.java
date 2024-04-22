package com.wei.backend2.service.impl;
import com.wei.backend2.entity.Clan;
import com.wei.backend2.payload.request.AddClan;
import com.wei.backend2.repositories.ClanRepository;
import com.wei.backend2.service.ClanService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClanServiceImpl implements ClanService {
    private ClanRepository repository;

    public ClanServiceImpl(ClanRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Clan> findAll() {
        return repository.findAll();
    }

    @Override
    public Clan saveClan(AddClan addClan) {
        Clan clan = new Clan();
        BeanUtils.copyProperties(addClan, clan);
        return repository.save(clan);
    }
}

