package com.spring.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="dog")
public class Dog {

	@Id
	private int did;
	private String dname;
	private String dage;
	private String dbreed;
	@ManyToOne
	@JoinColumn(name="uid")
	private User user;
	
	public Dog(int did, String dname, String dage, String dbreed, User user) {
		super();
		this.did = did;
		this.dname = dname;
		this.dage = dage;
		this.dbreed = dbreed;
		this.user = user;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Dog() {}

	public Dog(int did, String dname, String dage, String dbreed) {
		super();
		this.did = did;
		this.dname = dname;
		this.dage = dage;
		this.dbreed = dbreed;
	}

	public int getDid() {
		return did;
	}

	public String getDname() {
		return dname;
	}

	public String getDage() {
		return dage;
	}

	public String getDbreed() {
		return dbreed;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public void setDage(String dage) {
		this.dage = dage;
	}

	public void setDbreed(String dbreed) {
		this.dbreed = dbreed;
	}

	@Override
	public String toString() {
		return "Dog [did=" + did + ", dname=" + dname + ", dage=" + dage + ", dbreed=" + dbreed + "]";
	}
	
}
