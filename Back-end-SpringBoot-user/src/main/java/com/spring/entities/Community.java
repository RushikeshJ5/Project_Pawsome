package com.spring.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="community")
public class Community {
	
	@Id
	private int cid;
	private String cname;
	private int pincode;
	
	public Community() {}

	public Community(int cid, String cname, int pincode) {
		//super();
		this.cid = cid;
		this.cname = cname;
		this.pincode = pincode;
	}

	public int getCid() {
		return cid;
	}

	public String getCname() {
		return cname;
	}

	public int getPincode() {
		return pincode;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Community [cid=" + cid + ", cname=" + cname + ", pincode=" + pincode + "]";
	}
	
	
	
	

}
