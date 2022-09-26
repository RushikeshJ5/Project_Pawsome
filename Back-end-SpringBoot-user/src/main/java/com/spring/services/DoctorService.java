package com.spring.services;

import java.util.List;

import com.spring.entities.Doctor;
import com.spring.entities.User;

public interface DoctorService {
	Doctor findByEmail(String email);
	Doctor save(Doctor doctor);
	 Doctor findEmail(Doctor doctor);
	 List<Doctor> findAll();
	 boolean deleteByDrid(int drid);
	 Doctor update(Doctor d);
	 Doctor findByFname(String fname);
	 Doctor findByDrid(int drid);

}
