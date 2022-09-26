package com.spring.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.spring.entities.DrAppointment;

public interface DrAppointmentDao extends JpaRepository<DrAppointment, Integer>{
	
	List<DrAppointment> findAll();

}
