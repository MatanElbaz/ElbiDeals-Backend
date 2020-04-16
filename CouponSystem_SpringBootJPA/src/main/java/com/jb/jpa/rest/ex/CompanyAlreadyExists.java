package com.jb.jpa.rest.ex;

public class CompanyAlreadyExists extends Exception {
	public CompanyAlreadyExists(String msg) {
		super(msg);
	}
}
