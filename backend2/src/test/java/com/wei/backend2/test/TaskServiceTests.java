package com.wei.backend2.test;

import com.wei.backend2.entity.Task;
import com.wei.backend2.repositories.TaskRepository;
import com.wei.backend2.service.TaskService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskServiceTests {

    @Autowired
    private TaskService taskService;

    @Autowired
    private TaskRepository taskRepository;

    @Test
    public void testCreateTask() {
        Task task = new Task();
        task.setTaskCode("T001");
        task.setTitle("完成项目计划书");
        task.setDescription("编写并完成项目计划书");
        task.setAssignedTo("张三");
        task.setStatus("待处理");

        Task savedTask = taskService.createTask(task);
        assertNotNull(savedTask);
    }
}
