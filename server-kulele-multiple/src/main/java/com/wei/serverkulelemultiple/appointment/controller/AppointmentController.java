package com.wei.serverkulelemultiple.appointment.controller;

import com.wei.serverkulelemultiple.appointment.dto.AddAppointmentRequest;
import com.wei.serverkulelemultiple.appointment.entity.Appointment;
import com.wei.serverkulelemultiple.appointment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService service;

    @GetMapping
    public List<Appointment> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Appointment getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new RuntimeException("未找到预约记录"));
    }

    @PostMapping
    public Appointment create(@RequestBody AddAppointmentRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public Appointment update(@PathVariable Long id, @RequestBody AddAppointmentRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
