package com.spring.services;

import java.util.List;


import com.spring.entities.DrAppointment;


public interface DrAppointmentService {

	List<DrAppointment> findAll();
}
