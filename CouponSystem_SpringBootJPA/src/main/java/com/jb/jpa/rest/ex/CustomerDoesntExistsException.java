package com.jb.jpa.rest.ex;

public class CustomerDoesntExistsException extends Exception {
	public CustomerDoesntExistsException(String msg) {
		super(msg);
	}
}
