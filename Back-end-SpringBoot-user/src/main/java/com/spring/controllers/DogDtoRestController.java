package com.spring.controllers;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entities.Dog;
import com.spring.services.DogService;

@CrossOrigin
@RestController
public class DogDtoRestController {
	
	@Autowired
	private DogService dogServices;
	
	@GetMapping("dog/dname/{dname}")
	public ResponseEntity<Dog> findByDname(@PathVariable("dname") String dname){
		Dog dog = dogServices.findByDname(dname);
		if(dog == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(dog);
	}
	
	@GetMapping("dog/dbreed/{dbreed}")
	public ResponseEntity<List<Dog>> findByDbreed(@PathVariable("dbreed") String dbreed){
		List<Dog> dog = dogServices.findByDbreed(dbreed);
		if(dog == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(dog);
	}
	
	
    @PostMapping("dog/addDog")
    private String addDog(@RequestBody Dog dog) {
    	dogServices.save(dog);
    	System.out.println("Dog Added");
    	return "Dog Added Sucessfully";
    }
    
    @GetMapping("/dog")
    public ResponseEntity<List<Dog>> findAll(){
    	List<Dog> list = dogServices.findAll();
    	return ResponseEntity.ok(list);
    }
    
    @DeleteMapping("/dog/did/{did}")
    public boolean findByDname(@PathVariable("did") int did) {
    	boolean res= dogServices.deleteByDid(did);
    	return res;
    }
    
    @Autowired
    EntityManager entityManager;

   

}
