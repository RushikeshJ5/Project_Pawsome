package com.spring.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.daos.HostelDao;
import com.spring.entities.Hostel;

@Transactional
@Service
public class HostelServicesImpl implements HostelService {

	@Autowired
	private HostelDao hostelDao;
	
	@Autowired
	private HostelService hostel;
	
	@Override
	public List<Hostel> findAll() {
		// TODO Auto-generated method stub
		return hostelDao.findAll();
	}

	@Override
	public Hostel save(Hostel hostel) {
		// TODO Auto-generated method stub
		return hostelDao.save(hostel);
	}

	@Override
	public boolean deleteByHid(int hid) {
		// TODO Auto-generated method stub
		if(hostelDao.existsById(hid)) {
			hostelDao.deleteByHid(hid);
			return true;
		}
		return false;
	}
	
	

}
