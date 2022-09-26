package com.spring.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="dimage")
public class Dimage {
	
	@Id
	private int imid;
	private String image;
	private int did;
	@OneToOne
	@JoinColumn(name="did" ,insertable = false, updatable = false)
	private Dog dog;
	
	public Dimage() {}
	
	public Dimage(int imid, String image, int did, Dog dog) {
		super();
		this.imid = imid;
		this.image = image;
		this.did = did;
		this.dog = dog;
	}

	public int getImid() {
		return imid;
	}

	public String getImage() {
		return image;
	}

	public int getDid() {
		return did;
	}

	public Dog getDog() {
		return dog;
	}

	public void setImid(int imid) {
		this.imid = imid;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public void setDog(Dog dog) {
		this.dog = dog;
	}

	@Override
	public String toString() {
		return "Dimage [imid=" + imid + ", image=" + image + ", did=" + did + ", dog=" + dog + "]";
	}
	
	
	
	

}
