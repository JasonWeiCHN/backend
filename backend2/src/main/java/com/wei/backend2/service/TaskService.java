package com.wei.backend2.service;

import com.wei.backend2.entity.Task;
import com.wei.backend2.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

//    public static void main(String[] args) {
//        TaskService taskService = new TaskService();
//        Task task = new Task();
//        task.setTaskCode("T001");
//        task.setTitle("完成项目计划书");
//        task.setDescription("编写并完成项目计划书");
//        task.setAssignedTo("张三");
//        task.setStatus("待处理");
//        taskService.createTask(task);
//    }

}
