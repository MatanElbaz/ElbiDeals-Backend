package com.jb.jpa.rest.ex;

public class CouponDoesntExistsException extends Exception {
	public CouponDoesntExistsException(String msg) {
		super(msg);
	}
}
