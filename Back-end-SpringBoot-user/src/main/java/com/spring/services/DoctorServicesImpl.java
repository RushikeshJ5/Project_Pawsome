package com.spring.services;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.daos.DoctorDao;
import com.spring.entities.Doctor;

@Transactional
@Service
public class DoctorServicesImpl implements DoctorService {

	@Autowired
	private DoctorDao doctorDao;
	
	@Autowired
	private DoctorService doctor;
	
	@Override
	public Doctor findByEmail(String email) {
		// TODO Auto-generated method stub
		return doctorDao.findByEmail(email);
	}

	@Override
	public Doctor save(Doctor doctor) {
		// TODO Auto-generated method stub
		return doctorDao.save(doctor);
	}

	@Override
	public Doctor findEmail(Doctor doctor) {
		// TODO Auto-generated method stub
		return doctorDao.findByEmailAndPassword(doctor.getEmail(), doctor.getPassword());
	}

	@Override
	public List<Doctor> findAll() {
		// TODO Auto-generated method stub
		return doctorDao.findAll();
	}

	@Override
	public boolean deleteByDrid(int drid) {
		// TODO Auto-generated method stub
		if(doctorDao.existsById(drid)) {
			doctorDao.deleteByDrid(drid);
			return true;
		}
		return false;
	}

	@Override
	public Doctor update(Doctor d) {
		// TODO Auto-generated method stub
		return doctorDao.save(d);
	}

	@Override
	public Doctor findByFname(String fname) {
		// TODO Auto-generated method stub
		return doctorDao.findByFname(fname);
	}

	@Override
	public Doctor findByDrid(int drid) {
		// TODO Auto-generated method stub
		return doctorDao.findByDrid(drid);
	}

}
