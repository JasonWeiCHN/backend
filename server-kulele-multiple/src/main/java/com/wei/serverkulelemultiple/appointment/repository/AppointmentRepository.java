package com.wei.serverkulelemultiple.appointment.repository;

import com.wei.serverkulelemultiple.appointment.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
