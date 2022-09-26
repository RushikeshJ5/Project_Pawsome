package com.spring.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.entities.Hostel;

public interface HostelDao extends JpaRepository<Hostel,Integer>{
	
	List<Hostel> findAll();
	Hostel save(Hostel h);
	void deleteByHid(int hid);

}
