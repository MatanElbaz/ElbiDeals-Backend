package com.jb.jpa.rest.ex;

public class CustomerAlreadyExists extends Exception {
	public CustomerAlreadyExists(String msg) {
		super(msg);
	}
}
