package com.spring.services;

import java.util.List;

import com.spring.entities.Hostel;

public interface HostelService {
	
	List<Hostel> findAll();
	Hostel save(Hostel h);
	boolean deleteByHid(int hid);

}
