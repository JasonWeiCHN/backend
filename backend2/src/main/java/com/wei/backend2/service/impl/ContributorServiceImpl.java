package com.wei.backend2.service.impl;

import com.wei.backend2.entity.Contributor;
import com.wei.backend2.payload.request.AddContributor;
import com.wei.backend2.repositories.ContributorRepository;
import com.wei.backend2.service.ContributorService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContributorServiceImpl implements ContributorService {
    private final ContributorRepository contributorRepository;

    public ContributorServiceImpl(ContributorRepository contributorRepository) {
        this.contributorRepository = contributorRepository;
    }

    @Override
    public List<Contributor> findAll() {
        return contributorRepository.findAll();
    }

    @Override
    public Contributor saveContributor(AddContributor addContributor) {
        Contributor contributor = new Contributor();
        BeanUtils.copyProperties(addContributor, contributor);
        return contributorRepository.save(contributor);
    }

    @Override
    public Contributor findById(Long id) {
        Optional<Contributor> optionalContributor = contributorRepository.findById(id);
        return optionalContributor.orElseThrow(() -> new RuntimeException("Contributor not found with id: " + id));
    }
}
