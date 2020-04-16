package com.jb.jpa.rest.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.model.entity.Customer;
import com.jb.jpa.rest.ClientSession;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CouponAlreadyPurchased;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;
import com.jb.jpa.rest.ex.InvalidLoginException;
import com.jb.jpa.service.CustomerServiceImpl;

@CrossOrigin(origins = { "http://localhost:4200" }, allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class CustomerController {

	private Map<String, ClientSession> tokenMap;

	@Autowired
	public CustomerController(@Qualifier("tokens") Map<String, ClientSession> tokenMap) {
		this.tokenMap = tokenMap;

	}

	private ClientSession getSession(String token) {
		return tokenMap.get(token);
	}

	@GetMapping("/customers/get/{token}")
	public ResponseEntity<Customer> getCustomer(@PathVariable String token) throws InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get customer, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		Customer customer = customerServiceImpl.getCustomer();
		session.accessed();
		return ResponseEntity.ok(customer);
	}

	@PutMapping("/customers/update/customer/{token}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable String token, @RequestBody Customer customer)
			throws InvalidLoginException, CannotUpdateException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update customer, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		Customer updatedCustomer = customerServiceImpl.updateCustomer(customer);
		session.accessed();
		return ResponseEntity.ok(updatedCustomer);
	}

	@PutMapping("/customers/purchasecoupon/{id}/{token}")
	public ResponseEntity<Coupon> purchaseCoupon(@PathVariable long id, @PathVariable String token)
			throws CannotUpdateException, CouponAlreadyPurchased, CouponDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot purchase coupon, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		Coupon purchaseCoupon = customerServiceImpl.purchaseCoupon(id);
		session.accessed();

		return ResponseEntity.ok(purchaseCoupon);
	}

	@PutMapping("/customers/update/email/{token}")
	public ResponseEntity<Customer> updateCustomerEmail(@PathVariable String token, @RequestParam String email)
			throws CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update customer email, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		Customer updatedCustomer = customerServiceImpl.updateCustomerEmail(email);
		session.accessed();

		return ResponseEntity.ok(updatedCustomer);
	}

	@PutMapping("/customers/update/name/{token}")
	public ResponseEntity<Customer> updateCustomerFristNameLastName(@PathVariable String token,
			@RequestParam String firstName, @RequestParam String lastName)
			throws CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(
					String.format("Cannot update customer first name and last name, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		Customer updatedCustomer = customerServiceImpl.updateCustomerFirstNameLastName(firstName, lastName);
		session.accessed();

		return ResponseEntity.ok(updatedCustomer);
	}

	@PutMapping("/customers/update/password/{token}")
	public ResponseEntity<Customer> updateCustomerPassword(@PathVariable String token, @RequestParam String password)
			throws CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(
					String.format("Cannot update customer password, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		Customer updatedCustomer = customerServiceImpl.updateCustomerPassword(password);
		session.accessed();

		return ResponseEntity.ok(updatedCustomer);
	}

	@GetMapping("/customers/findcoupon/{id}/{token}")
	public ResponseEntity<Coupon> findCouponById(@PathVariable long id, @PathVariable String token)
			throws CannotUpdateException, CouponDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find coupon, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		Coupon findCouponById = customerServiceImpl.findCouponById(id);
		session.accessed();

		return ResponseEntity.ok(findCouponById);
	}

	@GetMapping("/customers/coupons/all/{token}")
	public ResponseEntity<List<Coupon>> getAllCustomerCoupons(@PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get coupons, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		List<Coupon> allCoupons = customerServiceImpl.findAllCustomerCoupons();
		session.accessed();

		if (allCoupons.isEmpty()) {
			throw new CouponDoesntExistsException(String.format("There is no coupons in your bag."));
		}
		return ResponseEntity.ok(allCoupons);
	}

	@GetMapping("/customers/coupons/bycategory/{category}/{token}")
	public ResponseEntity<List<Coupon>> getAllCouponsByCategory(@PathVariable int category, @PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get coupons, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		List<Coupon> allCouponsByCategory = customerServiceImpl.findCouponsByCategory(category);
		session.accessed();

		if (allCouponsByCategory.isEmpty()) {
			throw new CouponDoesntExistsException(
					String.format("There is no coupons with category : %d in your bag.", category));
		}
		return ResponseEntity.ok(allCouponsByCategory);
	}

	@GetMapping("/customers/coupons/lessthen/{price}/{token}")
	public ResponseEntity<List<Coupon>> getAllCouponsLessThen(@PathVariable double price, @PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get coupons, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		List<Coupon> allCouponsLessThen = customerServiceImpl.findCouponsLessThen(price);
		session.accessed();

		if (allCouponsLessThen.isEmpty()) {
			throw new CouponDoesntExistsException(
					String.format("There is no coupons less the : %.2f in your bag.", price));
		}
		return ResponseEntity.ok(allCouponsLessThen);
	}

	@GetMapping("/customers/coupons/{token}")
	public ResponseEntity<List<Coupon>> findAllCoupons(@PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find coupons, session does not exists. "));
		}
		CustomerServiceImpl customerServiceImpl = (CustomerServiceImpl) session.getAbsService();
		List<Coupon> allCoupons = customerServiceImpl.findAllCoupons();
		session.accessed();

		if (allCoupons.isEmpty()) {
			throw new CouponDoesntExistsException(String.format("There is no coupons for now, please try later."));
		}
		return ResponseEntity.ok(allCoupons);
	}

}
