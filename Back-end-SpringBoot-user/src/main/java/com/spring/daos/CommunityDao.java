package com.spring.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.entities.Community;

public interface CommunityDao extends JpaRepository<Community, Integer> {
	
	Community findByCname(String cname);
	Community findByPincode(int pincode);
	Community save(Community c);
	List<Community> findAll();
	void deleteByCid(int cid);

}
