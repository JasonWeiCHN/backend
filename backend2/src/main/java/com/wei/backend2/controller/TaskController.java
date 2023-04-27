package com.wei.backend2.controller;

import com.wei.backend2.entity.Task;
import com.wei.backend2.service.TaskService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = "task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    // 创建任务
    @PostMapping("/add")
    @ApiOperation("create task")
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task createdTask = taskService.createTask(task);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }

    // 获取任务
    @GetMapping("/{taskId}")
    @ApiOperation("get task")
    public ResponseEntity<Task> getTask(@PathVariable Long taskId) {
        Task task = taskService.getTask(taskId);
        if (task == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    // 获取所有任务
    @GetMapping("/")
    @ApiOperation("get all task")
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskService.getAllTasks();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    // 更新任务
    @PutMapping("/{taskId}")
    @ApiOperation("update task")
    public ResponseEntity<Task> updateTask(@PathVariable Long taskId, @RequestBody Task taskDetails) {
        Task updatedTask = taskService.updateTask(taskId, taskDetails);
        if (updatedTask == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedTask, HttpStatus.OK);
    }

    // 删除任务
    @DeleteMapping("/{taskId}")
    @ApiOperation("delete task")
    public ResponseEntity<Void> deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
