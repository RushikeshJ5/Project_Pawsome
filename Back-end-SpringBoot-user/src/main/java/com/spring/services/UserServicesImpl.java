package com.spring.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.daos.UserDao;
import com.spring.entities.User;

@Transactional
@Service
public class UserServicesImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private UserService user; 
	
	@Override
	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		return userDao.findByEmail(email);
	}

	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		return userDao.save(user);
	}

	@Override
	public User findEmail(User user) {
		// TODO Auto-generated method stub
		return userDao.findByEmailAndPassword(user.getEmail(), user.getPassword());
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public boolean deleteById(int uid) {
		// TODO Auto-generated method stub
		if(userDao.existsById(uid)) {
			userDao.deleteByUid(uid);
			return true;
		}
		return false;
	}

	@Override
	public User update(User u) {
		// TODO Auto-generated method stub
		return userDao.save(u);
	}

	@Override
	public User findByFname(String fname) {
		// TODO Auto-generated method stub
		return userDao.findByFname(fname);
	}

	@Override
	public User findByUid(int id) {
		// TODO Auto-generated method stub
		return userDao.findByUid(id);
	}
	
}
