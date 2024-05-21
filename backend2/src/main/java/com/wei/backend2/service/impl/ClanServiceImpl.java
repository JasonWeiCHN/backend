package com.wei.backend2.service.impl;
import com.wei.backend2.entity.Clan;
import com.wei.backend2.entity.Contributor;
import com.wei.backend2.entity.WarhammerClassifier;
import com.wei.backend2.payload.request.AddClan;
import com.wei.backend2.repositories.ClanRepository;
import com.wei.backend2.service.ClanService;
import com.wei.backend2.service.ContributorService;
import com.wei.backend2.service.WarhammerClassifierService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ClanServiceImpl implements ClanService {
    private ClanRepository repository;
    private final WarhammerClassifierService warhammerClassifierService; // 添加 WarhammerClassifierService 依赖
    private final ContributorService contributorService;

    public ClanServiceImpl(ClanRepository repository, WarhammerClassifierService warhammerClassifierService, ContributorService contributorService) {
        this.repository = repository;
        this.warhammerClassifierService = warhammerClassifierService; // 初始化 WarhammerClassifierService
        this.contributorService = contributorService;
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

        // 处理 contributors ID 列表
        List<Contributor> contributors = new ArrayList<>();
        if (addClan.getContributorIds() != null && !addClan.getContributorIds().isEmpty()) {
            List<Long> contributorIds = Stream.of(addClan.getContributorIds().split(","))
                    .map(Long::parseLong)
                    .collect(Collectors.toList());
            contributors = contributorIds.stream()
                    .map(contributorService::findById)
                    .collect(Collectors.toList());
        }
        clan.setContributors(contributors);

        return repository.save(clan);
    }
}

