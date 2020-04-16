package com.jb.jpa.rest.ex;

public class CompanyDoesntExistsException extends Exception {
	public CompanyDoesntExistsException(String msg) {
		super(msg);
	}
}
