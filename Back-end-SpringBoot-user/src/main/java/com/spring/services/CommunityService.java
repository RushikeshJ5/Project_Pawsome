package com.spring.services;

import java.util.List;

import com.spring.entities.Community;

public interface CommunityService {
	
	Community findByCname(String cname);
	Community findByPincode(int pincode);
	Community save(Community community);
	List<Community> findAll();
	boolean deleteByCid(int cid);


}
