package com.spring.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.entities.Doctor;
import com.spring.entities.User;

public interface DoctorDao extends JpaRepository<Doctor, Integer> {

	
	  Doctor findByEmail(String email); 
	  Doctor save(Doctor u); 
	  Doctor findByEmailAndPassword(String email,String password); 
	  List<Doctor> findAll();
	  void deleteByDrid(int drid);
	  Doctor findByFname(String fname);
	  Doctor findByDrid(int drid);
}
