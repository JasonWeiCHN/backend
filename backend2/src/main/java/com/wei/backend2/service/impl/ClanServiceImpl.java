package com.wei.backend2.service.impl;
import com.wei.backend2.entity.Clan;
import com.wei.backend2.entity.WarhammerClassifier;
import com.wei.backend2.payload.request.AddClan;
import com.wei.backend2.repositories.ClanRepository;
import com.wei.backend2.service.ClanService;
import com.wei.backend2.service.WarhammerClassifierService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClanServiceImpl implements ClanService {
    private ClanRepository repository;
    private final WarhammerClassifierService warhammerClassifierService; // 添加 WarhammerClassifierService 依赖

    public ClanServiceImpl(ClanRepository repository, WarhammerClassifierService warhammerClassifierService) {
        this.repository = repository;
        this.warhammerClassifierService = warhammerClassifierService; // 初始化 WarhammerClassifierService
    }

    @Override
    public List<Clan> findAll() {
        return repository.findAll();
    }

    @Override
    public Clan saveClan(AddClan addClan) {
        String warhammerClassifierId = addClan.getWarhammerClassifierId();
        WarhammerClassifier warhammerClassifier = warhammerClassifierService.findById(warhammerClassifierId);

        Clan clan = new Clan();
        BeanUtils.copyProperties(addClan, clan);
        clan.setWarhammerClassifier(warhammerClassifier); // 设置关联的 WarhammerClassifier 对象

        return repository.save(clan);
    }
}

