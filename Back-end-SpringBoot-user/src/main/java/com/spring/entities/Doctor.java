package com.spring.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="doctor")
public class Doctor {
	
	@Id
	private int drid;
	private String fname;
	private String lname;
	private String mobile;
	private String email;
	private String password;
	private int pincode;
	
	
	public Doctor()
	{
		
	}

	public Doctor(int drid, String fname, String lname, String mobile, String email, String password, int pincode) {
		super();
		this.drid = drid;
		this.fname = fname;
		this.lname = lname;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
		this.pincode = pincode;
	}

	public int getDrid() {
		return drid;
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

	public void setDr_id(int dr_id) {
		this.drid = drid;
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

	@Override
	public String toString() {
		return "Doctor [drid=" + drid + ", fname=" + fname + ", lname=" + lname + ", mobile=" + mobile + ", email="
				+ email + ", password=" + password + ", pincode=" + pincode + "]";
	}
	
	

}
