package com.spring.services;

import java.util.List;

import com.spring.entities.Dog;

public interface DogService {
	
	Dog findByDname(String dname);
	List<Dog> findByDbreed(String dbreed);
	Dog save(Dog dog);
	List<Dog> findAll();
	boolean deleteByDid(int did);

}
