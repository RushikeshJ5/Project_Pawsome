package com.spring.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.spring.entities.User;

public interface UserDao  extends JpaRepository<User, Integer>{
	
	User findByEmail(String email);
	User save(User u);
	User findByEmailAndPassword(String email,String password);
	List<User> findAll();
	void deleteByUid(int uid);
	User findByFname(String fname);
	User findByUid(int id);

}
