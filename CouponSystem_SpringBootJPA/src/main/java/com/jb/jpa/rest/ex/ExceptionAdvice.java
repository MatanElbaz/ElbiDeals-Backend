package com.jb.jpa.rest.ex;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.jb.jpa.model.ExceptionAdviceErrorResponse;
import com.jb.jpa.rest.controller.AdminController;
import com.jb.jpa.rest.controller.CompanyController;
import com.jb.jpa.rest.controller.CustomerController;
import com.jb.jpa.rest.controller.LoginController;

@ControllerAdvice(assignableTypes = { LoginController.class, CompanyController.class, CustomerController.class,
		AdminController.class })

public class ExceptionAdvice {

	@ExceptionHandler(InvalidLoginException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleUnathorized(InvalidLoginException exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.UNAUTHORIZED, exception.getMessage());
	}

	@ExceptionHandler(CustomerDoesntExistsException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleBadRequest(CustomerDoesntExistsException exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.BAD_REQUEST, exception.getMessage());
	}

	@ExceptionHandler(AdminDoesntExistsException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleBadRequest(AdminDoesntExistsException exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.BAD_REQUEST, exception.getMessage());
	}

	@ExceptionHandler(CustomerAlreadyExists.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleUnathorized(CustomerAlreadyExists exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.UNAUTHORIZED, exception.getMessage());
	}

	@ExceptionHandler(CouponDoesntExistsException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleUnathorized(CouponDoesntExistsException exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.BAD_REQUEST, exception.getMessage());
	}

	@ExceptionHandler(CouponAlreadyPurchased.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleUnathorized(CouponAlreadyPurchased exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.UNAUTHORIZED, exception.getMessage());
	}

	@ExceptionHandler(CompanyDoesntExistsException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleBadRequest(CompanyDoesntExistsException exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.BAD_REQUEST, exception.getMessage());
	}

	@ExceptionHandler(CompanyAlreadyExists.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleUnathorized(CompanyAlreadyExists exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.UNAUTHORIZED, exception.getMessage());
	}

	@ExceptionHandler(CannotUpdateException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleUnathorized(CannotUpdateException exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.UNAUTHORIZED, exception.getMessage());
	}

	@ExceptionHandler(CannotCreateException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public ExceptionAdviceErrorResponse handleUnathorized(CannotCreateException exception) {
		return ExceptionAdviceErrorResponse.of(HttpStatus.UNAUTHORIZED, exception.getMessage());
	}
}
