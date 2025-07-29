package com.wei.serverkulelemultiple.room.controller;

import com.wei.serverkulelemultiple.room.dto.AddRoomRequest;
import com.wei.serverkulelemultiple.room.dto.RoomStatusDTO;
import com.wei.serverkulelemultiple.room.entity.Room;
import com.wei.serverkulelemultiple.room.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room")
public class RoomController {

    @Autowired
    private RoomService service;

    @GetMapping
    public List<Room> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Room getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new RuntimeException("未找到包房记录"));
    }

    @PostMapping
    public Room create(@RequestBody AddRoomRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public Room update(@PathVariable Long id, @RequestBody AddRoomRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/with-status")
    public List<RoomStatusDTO> getRoomsWithStatus() {
        return service.getRoomStatusList();
    }
}
