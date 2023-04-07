package com.wei.backend2.entity;
import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long taskId;

    @Column(name = "task_code", nullable = false)
    private String taskCode;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "assigned_to")
    private String assignedTo;

    @Column(name = "status", nullable = false)
    private String status;

}

