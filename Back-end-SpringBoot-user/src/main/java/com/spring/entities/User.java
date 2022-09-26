package com.spring.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	
	@Id
	private int uid;
	private String fname;
	private String lname;
	private String mobile;
	private String email;
	private String password;
	private int pincode;
	private int drid;
	@ManyToOne
	@JoinColumn(name="drid",insertable = false, updatable = false)
	private Doctor doctor;
	
	
	public User(int uid, String fname, String lname, String mobile, String email, String password, int pincode,
			int drid, Doctor doctor) {
		super();
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
		this.pincode = pincode;
		this.drid = drid;
		this.doctor = doctor;
	}


	public Doctor getDoctor() {
		return doctor;
	}


	public void setDrid(int drid) {
		this.drid = drid;
	}


	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}


	public User() {
		//super();
		// TODO Auto-generated constructor stub
	}


	public User(int uid, String fname, String lname, String mobile, String email, String password,
			int pincode, int drid) {
		//super();
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
		this.pincode = pincode;
		this.drid = drid;
	}


	public int getUid() {
		return uid;
	}


	public String getFname() {
		return fname;
	}


	public String getLname() {
		return lname;
	}


	public String getMobile() {
		return mobile;
	}


	public String getEmail() {
		return email;
	}



	public String getPassword() {
		return password;
	}


	public int getPincode() {
		return pincode;
	}


	public int getDrid() {
		return drid;
	}


	public void setUid(int uid) {
		this.uid = uid;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public void setPincode(int pincode) {
		this.pincode = pincode;
	}


	public void setDr_id(int drid) {
		this.drid = drid;
	}


	@Override
	public String toString() {
		return "User [uid=" + uid + ", fname=" + fname + ", lname=" + lname + ", mobile=" + mobile + ", email=" + email
				+ ", password=" + password + ", pincode=" + pincode + ", dr_id=" + drid + "]";
	}	

}
