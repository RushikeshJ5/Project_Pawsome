package com.spring.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.daos.DrAppointmentDao;
import com.spring.entities.DrAppointment;

@Transactional
@Service
public class DrAppServiceImpl implements DrAppointmentService{

	@Autowired
	private DrAppointmentDao appDao;
	
	@Autowired
	private DrAppointmentService appointment;
	
	@Override
	public List<DrAppointment> findAll() {
		// TODO Auto-generated method stub
		return appDao.findAll();
	}

}
