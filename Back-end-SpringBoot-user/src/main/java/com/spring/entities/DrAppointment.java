package com.spring.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="drappointment")
public class DrAppointment {
	
	@Id
	private int aid;
	private String clinictime;
	private int drid;
	@ManyToOne
	@JoinColumn(name="drid",insertable = false, updatable = false)
	private Doctor doctor;
	
	public DrAppointment() {}

	public DrAppointment(int aid, String clinictime, int drid, Doctor doctor) {
		super();
		this.aid = aid;
		this.clinictime = clinictime;
		this.drid = drid;
		this.doctor = doctor;
	}

	public int getAid() {
		return aid;
	}

	public String getClinictime() {
		return clinictime;
	}

	public int getDrid() {
		return drid;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public void setClinictime(String clinictime) {
		this.clinictime = clinictime;
	}

	public void setDrid(int drid) {
		this.drid = drid;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "DrAppointment [aid=" + aid + ", clinictime=" + clinictime + ", drid=" + drid + ", doctor=" + doctor
				+ "]";
	}
	
	
	
	

}
