package com.wei.serverkulelemultiple.room.service;

import com.wei.serverkulelemultiple.accounting.entity.AccountingRecord;
import com.wei.serverkulelemultiple.accounting.repository.AccountingRecordRepository;
import com.wei.serverkulelemultiple.room.dto.AddRoomRequest;
import com.wei.serverkulelemultiple.room.dto.RoomStatusDTO;
import com.wei.serverkulelemultiple.room.entity.Room;
import com.wei.serverkulelemultiple.room.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private AccountingRecordRepository recordRepository;

    public List<Room> getAll() {
        return roomRepository.findAll();
    }

    public Optional<Room> getById(Long id) {
        return roomRepository.findById(id);
    }

    public Room create(AddRoomRequest request) {
        Room room = new Room();
        copyProperties(room, request);
        return roomRepository.save(room);
    }

    public Room update(Long id, AddRoomRequest request) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("未找到包房记录: id=" + id));
        copyProperties(room, request);
        return roomRepository.save(room);
    }

    public void delete(Long id) {
        roomRepository.deleteById(id);
    }

    public List<RoomStatusDTO> getRoomStatusList() {
        List<Room> rooms = roomRepository.findAll();

        // 当前时间
        LocalDateTime now = LocalDateTime.now();

        return rooms.stream().map(room -> {
            RoomStatusDTO dto = new RoomStatusDTO();
            dto.setId(room.getId());
            dto.setRoomNumber(room.getRoomNumber());
            dto.setRoomType(room.getRoomType());

            // 停用状态优先
            if ("停用".equals(room.getStatus())) {
                dto.setStatus("停用");
                return dto;
            }

            // 查找是否存在有效的订单（当前时间在范围内）
            List<AccountingRecord> activeRecords = recordRepository.findActiveByRoom(room.getId(), now);

            if (!activeRecords.isEmpty()) {
                AccountingRecord record = activeRecords.get(0); // 理论上只会有一个
                dto.setStatus("使用中");
                dto.setStartTime(record.getStartDateTime());
                dto.setEndTime(record.getEndDateTime());
                dto.setAccountingId(record.getId());

                // 可选：添加客户信息
                dto.setContactType(record.getContactType());
                dto.setContactValue(record.getContactValue());
                dto.setRemark(record.getRemark());
            } else {
                dto.setStatus("空闲");
            }

            return dto;
        }).collect(Collectors.toList());
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
