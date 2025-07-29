package com.wei.serverkulelemultiple.room.service;

import com.wei.serverkulelemultiple.accounting.entity.AccountingRecord;
import com.wei.serverkulelemultiple.accounting.repository.AccountingRecordRepository;
import com.wei.serverkulelemultiple.room.dto.AddRoomRequest;
import com.wei.serverkulelemultiple.room.dto.RoomStatusDTO;
import com.wei.serverkulelemultiple.room.entity.Room;
import com.wei.serverkulelemultiple.room.enums.RoomStatus;
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
        LocalDateTime now = LocalDateTime.now();

        return rooms.stream().map(room -> {
            RoomStatusDTO dto = new RoomStatusDTO();
            dto.setId(room.getId());
            dto.setRoomNumber(room.getRoomNumber());
            dto.setRoomType(room.getRoomType());

            RoomStatus roomStatus = room.getStatus();

            // 停用状态直接返回
            if (roomStatus == RoomStatus.DISABLED) {
                dto.setStatus(RoomStatus.DISABLED);
                return dto;
            }

            // 仅对空闲状态的房间判断是否有活跃记录
            if (roomStatus == RoomStatus.AVAILABLE) {
                List<AccountingRecord> activeRecords = recordRepository.findActiveByRoom(room.getId(), now);
                if (!activeRecords.isEmpty()) {
                    AccountingRecord record = activeRecords.get(0); // 理论上只会有一个
                    dto.setStatus(RoomStatus.OCCUPIED);
                    dto.setStartTime(record.getStartDateTime());
                    dto.setEndTime(record.getEndDateTime());
                    dto.setAccountingId(record.getId());

                    dto.setContactType(record.getContactType());
                    dto.setContactValue(record.getContactValue());
                    dto.setRemark(record.getRemark());
                    return dto;
                }
            }

            // 仍为 AVAILABLE 且无记录
            dto.setStatus(roomStatus);
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

    public Room changeStatus(Long roomId, RoomStatus newStatus) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("包房不存在"));
        room.setStatus(newStatus);
        return roomRepository.save(room);
    }
}
