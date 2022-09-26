package com.spring.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.daos.DimageDao;
import com.spring.entities.Dimage;

@Transactional
@Service
public class DimageServiceImpl implements DimageService{

	@Autowired
	private DimageDao dimageDao;
	
	@Autowired
	private DimageService dimageService;
	
	@Override
	public List<Dimage> findAll() {
		// TODO Auto-generated method stub
		return dimageDao.findAll();
	}

}
