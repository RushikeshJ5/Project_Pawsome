package com.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entities.Dimage;

import com.spring.services.DimageService;

@CrossOrigin
@RestController
public class DimageRestController {

	@Autowired
	private DimageService dimageService;
	
	@GetMapping("/dogimg")
	public ResponseEntity<List<Dimage>> findAll(){
		List<Dimage> list  = dimageService.findAll();
		return ResponseEntity.ok(list);
	}
}
