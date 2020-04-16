package com.jb.jpa.rest.ex;

public class InvalidLoginException extends Exception {
    public InvalidLoginException(String msg) {
        super(msg);
    }
}
