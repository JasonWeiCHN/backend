package com.wei.backend2.repositories;

import com.wei.backend2.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    Task findByTaskId(Long taskId);
    List<Task> findAll();
    Task save(Task task);
    void deleteByTaskId(Long taskId);
}

