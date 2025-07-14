package com.wei.serverkulelemultiple.appointment.service;

import com.wei.serverkulelemultiple.appointment.dto.AddAppointmentRequest;
import com.wei.serverkulelemultiple.appointment.entity.Appointment;
import com.wei.serverkulelemultiple.appointment.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository repository;

    public List<Appointment> getAll() {
        return repository.findAll();
    }

    public Optional<Appointment> getById(Long id) {
        return repository.findById(id);
    }

    public Appointment create(AddAppointmentRequest request) {
        Appointment a = new Appointment();
        copyProperties(a, request);
        return repository.save(a);
    }

    public Appointment update(Long id, AddAppointmentRequest request) {
        Appointment a = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("未找到预约记录: id=" + id));
        copyProperties(a, request);
        return repository.save(a);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyProperties(Appointment a, AddAppointmentRequest r) {
        a.setDateTime(r.getDateTime());
        a.setName(r.getName());
        a.setContactType(r.getContactType());
        a.setContactValue(r.getContactValue());
        a.setDescription(r.getDescription());
    }
}
