package com.wei.serverkulelemultiple.room.service;

import com.wei.serverkulelemultiple.room.dto.AddRoomRequest;
import com.wei.serverkulelemultiple.room.entity.Room;
import com.wei.serverkulelemultiple.room.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    private RoomRepository repository;

    public List<Room> getAll() {
        return repository.findAll();
    }

    public Optional<Room> getById(Long id) {
        return repository.findById(id);
    }

    public Room create(AddRoomRequest request) {
        Room room = new Room();
        copyProperties(room, request);
        return repository.save(room);
    }

    public Room update(Long id, AddRoomRequest request) {
        Room room = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("未找到包房记录: id=" + id));
        copyProperties(room, request);
        return repository.save(room);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyProperties(Room room, AddRoomRequest request) {
        room.setRoomNumber(request.getRoomNumber());
        room.setRoomType(request.getRoomType());
        room.setCapacity(request.getCapacity());
        room.setPricePerHour(request.getPricePerHour());
        room.setDescription(request.getDescription());
        room.setStatus(request.getStatus());
    }
}
