package com.spring.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.entities.Dimage;

public interface DimageDao extends JpaRepository<Dimage, Integer>{
	
	List<Dimage> findAll();

}
