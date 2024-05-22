package com.wei.backend2.repositories;

import com.wei.backend2.entity.Contributor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ContributorRepository extends JpaRepository<Contributor, Long>, JpaSpecificationExecutor<Contributor> {
}
