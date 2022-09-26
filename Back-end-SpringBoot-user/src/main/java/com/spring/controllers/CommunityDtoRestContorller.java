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

import com.spring.entities.Community;
import com.spring.entities.Doctor;
import com.spring.services.CommunityService;

@CrossOrigin
@RestController
public class CommunityDtoRestContorller {

	@Autowired
	private CommunityService communityServices;
	
	@PostMapping("community/addCommunity")
	private String addCommunity(@RequestBody Community community) {
		communityServices.save(community);
		System.out.println("Community Added");
		return "Communinty added Successfully";
	}
	
	@GetMapping("community/cname/{cname}")
	public ResponseEntity<Community> findByCname(@PathVariable("cname") String cname) {
		Community community = communityServices.findByCname(cname);
		if(community == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(community);
	    }
	
	@GetMapping("community/pincode/{pincode}")
	public ResponseEntity<Community> findByPincode(@PathVariable("pincode") int pincode) {
		Community community = communityServices.findByPincode(pincode);
		if(community == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(community);
	    }
	
	@GetMapping("/community")
	public ResponseEntity<List<Community>> findAll(){
		List<Community> list  = communityServices.findAll();
		return ResponseEntity.ok(list);
	}
	
	@DeleteMapping("/community/cid/{cid}")
	public boolean findByCname(@PathVariable("cid") int cid) {
		boolean res = communityServices.deleteByCid(cid);

		return res;
	}
	
}
