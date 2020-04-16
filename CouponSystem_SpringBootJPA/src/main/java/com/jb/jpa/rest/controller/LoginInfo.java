package com.jb.jpa.rest.controller;

import org.springframework.stereotype.Service;

@Service
public class LoginInfo {
	
	private long type;
	private String token;
	
	public LoginInfo(long type, String token) {
		this.type = type;
		this.token = token;
	}

	public LoginInfo() {
		// TODO Auto-generated constructor stub
	}

	public long getType() {
		return type;
	}

	public void setType(long type) {
		this.type = type;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}
