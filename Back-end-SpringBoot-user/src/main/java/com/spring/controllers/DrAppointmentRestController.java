package com.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entities.DrAppointment;
import com.spring.entities.User;
import com.spring.services.DrAppointmentService;

@CrossOrigin
@RestController
public class DrAppointmentRestController {

	@Autowired
	private DrAppointmentService appServices;
	
	@GetMapping("/appointment")
	public ResponseEntity<List<DrAppointment>> findAll(){
		List<DrAppointment> list  = appServices.findAll();
		return ResponseEntity.ok(list);
	}
}
