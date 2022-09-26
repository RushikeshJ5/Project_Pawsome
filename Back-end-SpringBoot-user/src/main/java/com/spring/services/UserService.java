package com.spring.services;

import java.util.List;


import com.spring.entities.User;

public interface UserService {
	
	User findByEmail(String email);
	User save(User user);
	 User findEmail(User user);
	 List<User> findAll();
	 boolean deleteById(int uid);
	 User update(User u);
	 User findByFname(String fname);
	 User findByUid(int id);
}
