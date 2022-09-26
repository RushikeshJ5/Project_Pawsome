package com.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entities.Doctor;
import com.spring.entities.User;
import com.spring.services.DoctorService;

@CrossOrigin
@RestController
public class DoctorDtoRestController {

	@Autowired
	private DoctorService doctorServices;
	
	
	@GetMapping("doctor/email/{email}")
public ResponseEntity<Doctor> findByEmail(@PathVariable("email") String email) {
	Doctor doctor = doctorServices.findByEmail(email);
	if(doctor == null)
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	return ResponseEntity.ok(doctor);
    }
	
	@GetMapping("doctor/drid/{drid}")
	public ResponseEntity<Doctor> findByDid(@PathVariable("drid") int drid) {
		Doctor doctor = doctorServices.findByDrid(drid);
		if(doctor == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(doctor);
	    }
	
	@GetMapping("doctor/fname/{fname}")
	public ResponseEntity<Doctor> findByFname(@PathVariable("fname") String fname) {
		Doctor doctor = doctorServices.findByFname(fname);
		if(doctor == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(doctor);
	    }
	
	@PostMapping("doctor/registerDoctor")
	private String registerDoctor(@RequestBody Doctor doctor) {
		doctorServices.save(doctor);
		System.out.println("Doctor Added");
		return "Doctor added Successfully";
	}
	
	@PostMapping("/doctor/login")
	public Doctor findDoctor(@RequestBody Doctor doctor){
		Doctor d = doctorServices.findEmail(doctor);
		return d;
	}
	
	@GetMapping("/doctor")
	public ResponseEntity<List<Doctor>> findAll(){
		List<Doctor> list  = doctorServices.findAll();
		return ResponseEntity.ok(list);
	}
	
	@DeleteMapping("/doctor/dr_id/{drid}")
	public boolean findByEmail(@PathVariable("drid") int drid) {
		boolean res = doctorServices.deleteByDrid(drid);

		return res;
	}

	
}
