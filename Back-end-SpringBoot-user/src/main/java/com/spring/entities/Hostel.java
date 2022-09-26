package com.spring.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="hostel")
public class Hostel {
	
	@Id
	private int hid;
	private String hname;
	private String contact;
	
	public Hostel() {
		
	}

	public Hostel(int hid, String hname, String contact) {
		super();
		this.hid = hid;
		this.hname = hname;
		this.contact = contact;
	}

	public int getHid() {
		return hid;
	}

	public String getHname() {
		return hname;
	}

	public String getContact() {
		return contact;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public void setHname(String hname) {
		this.hname = hname;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	@Override
	public String toString() {
		return "Hostel [hid=" + hid + ", hname=" + hname + ", contact=" + contact + "]";
	}
	
	

}
