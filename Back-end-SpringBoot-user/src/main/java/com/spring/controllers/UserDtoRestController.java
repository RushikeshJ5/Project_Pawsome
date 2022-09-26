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

import com.spring.entities.User;
import com.spring.services.UserService;

@CrossOrigin
@RestController
public class UserDtoRestController {
	
	@Autowired
	private UserService userServices;
	
	@GetMapping("user/email/{email}")
	public ResponseEntity<User> findByEmail(@PathVariable("email") String email) {
		User user = userServices.findByEmail(email);
		if(user == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(user);
	}
	
	@GetMapping("user/id/{id}")
	public ResponseEntity<User> findById(@PathVariable("id") int id) {
		User user = userServices.findByUid(id);
		if(user == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(user);
	}
	
	@GetMapping("user/fname/{fname}")
	public ResponseEntity<User> findByFname(@PathVariable("fname") String fname){
		User user = userServices.findByFname(fname);
		if(user == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(user);
	}
	@PostMapping("user/registerUser")
	private String registerUser(@RequestBody User user) {
		userServices.save(user);
		System.out.println("User Added");
		return "User added Successfully";
	}
	
	@PostMapping("/user/login")
	public User findUser(@RequestBody User user){
		User u = userServices.findEmail(user);
		return u;
	}
	
	@GetMapping("/user")
	public ResponseEntity<List<User>> findAll(){
		List<User> list  = userServices.findAll();
		return ResponseEntity.ok(list);
	}
	
	@DeleteMapping("/user/uid/{uid}")
	public boolean findByEmail(@PathVariable("uid") int uid) {
		boolean res = userServices.deleteById(uid);

		return res;
	}
}
