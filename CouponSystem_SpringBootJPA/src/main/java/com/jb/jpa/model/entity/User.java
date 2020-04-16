package com.jb.jpa.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.Any;
import org.hibernate.annotations.AnyMetaDef;
import org.hibernate.annotations.MetaValue;

import com.jb.jpa.model.Client;

@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String email;
	private String password;

	@Any(metaColumn = @Column(name = "role"))
	@AnyMetaDef(idType = "long", metaType = "int", metaValues = {
			@MetaValue(value = "1", targetEntity = Customer.class),
			@MetaValue(value = "2", targetEntity = Company.class),
			@MetaValue(value = "-1", targetEntity = Admin.class) })
	@JoinColumn(name = "client_id")
	private Client client;

	private static long NO_ID = -1;

	public User() {
	}

	public User(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public static User empty() {
		return new User(NO_ID);
	}

}
