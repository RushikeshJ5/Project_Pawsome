package com.spring.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.daos.DogDao;
import com.spring.entities.Dog;

@Transactional
@Service
public class DogServicesImpl implements DogService{

	@Autowired
	private DogDao dogDao;
	
	@Autowired
	private DogService dog;
	
	@Override
	public Dog findByDname(String dname) {
		// TODO Auto-generated method stub
		return dogDao.findByDname(dname);
	}

	@Override
	public List<Dog> findByDbreed(String dbreed) {
		// TODO Auto-generated method stub
		return  dogDao.findByDbreed(dbreed);
	}

	@Override
	public Dog save(Dog dog) {
		// TODO Auto-generated method stub
		return dogDao.save(dog);
	}

	@Override
	public List<Dog> findAll() {
		// TODO Auto-generated method stub
		return dogDao.findAll();
	}

	@Override
	public boolean deleteByDid(int did) {
		// TODO Auto-generated method stub
		if(dogDao.existsById(did)) {
			dogDao.deleteByDid(did);
			return true;
		}
		return false;
	}

}
