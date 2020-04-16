package com.jb.jpa.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jb.jpa.model.Client;

@Entity
@Table(name = "company")
public class Company extends Client {
	public static long NO_ID = -1;

	private String name;
	private String password;
	private String email;
	@OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Coupon> coupons;
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private User user;

	public Company() {
		this.coupons = new ArrayList<>();
	}

	public Company(long id) {
		super(id);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Coupon> getCoupons() {
		return coupons;
	}

	public void setCoupons(List<Coupon> coupons) {
		this.coupons = coupons;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public static Company empty() {
		return new Company(-1);
	}

}
