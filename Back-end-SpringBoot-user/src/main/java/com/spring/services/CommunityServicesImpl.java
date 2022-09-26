package com.spring.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.daos.CommunityDao;
import com.spring.entities.Community;

@Transactional
@Service
public class CommunityServicesImpl implements CommunityService{

	@Autowired
	private CommunityDao communityDao;
	
	@Autowired
	private CommunityService community;
	
	@Override
	public Community findByCname(String cname) {
		// TODO Auto-generated method stub
		return communityDao.findByCname(cname);
	}

	@Override
	public Community findByPincode(int pincode) {
		// TODO Auto-generated method stub
		return communityDao.findByPincode(pincode);
	}

	@Override
	public Community save(Community community) {
		// TODO Auto-generated method stub
		return communityDao.save(community);
	}

	@Override
	public List<Community> findAll() {
		// TODO Auto-generated method stub
		return communityDao.findAll();
	}

	@Override
	public boolean deleteByCid(int cid) {
		// TODO Auto-generated method stub
		if(communityDao.existsById(cid)) {
			communityDao.deleteByCid(cid);
			return true;
		}
		return false;
	}
	
	

}
