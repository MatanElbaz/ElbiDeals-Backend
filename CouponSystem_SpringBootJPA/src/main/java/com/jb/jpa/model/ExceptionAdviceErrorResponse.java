package com.jb.jpa.model;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

public class ExceptionAdviceErrorResponse {

	private HttpStatus status;
	private String message;
	private LocalDateTime timestamp;

	public ExceptionAdviceErrorResponse(HttpStatus status, String message, LocalDateTime localDateTime) {
		this.status = status;
		this.message = message;
		this.timestamp = localDateTime;
	}

	public static ExceptionAdviceErrorResponse of(HttpStatus status, String message) {
		return new ExceptionAdviceErrorResponse(status, message, LocalDateTime.now());
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalDateTime getTimeStamp() {
		return timestamp;
	}

	public void seTimeStamp(LocalDateTime localDateTime) {
		this.timestamp = localDateTime;
	}

}
