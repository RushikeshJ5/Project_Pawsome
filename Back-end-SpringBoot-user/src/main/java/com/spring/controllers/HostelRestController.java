package com.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entities.Hostel;
import com.spring.services.HostelService;

@CrossOrigin
@RestController
public class HostelRestController {
	
	@Autowired
	private HostelService hostelServices;
	
	@PostMapping("hostel/addHostel")
	private String addHostel(@RequestBody Hostel hostel) {
		hostelServices.save(hostel);
		System.out.println("Hostel Added");
		return "Hostel added Successfully";
	}
	
	@GetMapping("/hostel")
	public ResponseEntity<List<Hostel>> findAll(){
		List<Hostel> list  = hostelServices.findAll();
		return ResponseEntity.ok(list);
	}
	
	@DeleteMapping("/hostel/hid/{hid}")
	public boolean findByEmail(@PathVariable("hid") int hid) {
		boolean res = hostelServices.deleteByHid(hid);

		return res;
	}

}
