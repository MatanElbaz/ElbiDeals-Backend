package com.jb.jpa.rest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jb.jpa.data.db.CompanyRepository;
import com.jb.jpa.data.db.CouponRepository;
import com.jb.jpa.data.db.UserRepository;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;

@CrossOrigin(origins = { "http://localhost:4200" }, allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class CouponsController {
	CouponRepository couponRepository;
	CompanyRepository companyRepository;
	UserRepository userRepository;

	@Autowired
	public CouponsController(CouponRepository couponRepository) {
		this.couponRepository = couponRepository;
	}

	@GetMapping("/coupons/all")
	public ResponseEntity<List<Coupon>> getOurCoupons() {
		List<Coupon> allCoupons = couponRepository.findAll();
		return ResponseEntity.ok(allCoupons);
	}

	@GetMapping("/coupons/{id}")
	public ResponseEntity<Coupon> findCouponById(@PathVariable("id") Long id) throws CouponDoesntExistsException {

		Optional<Coupon> optCoupon = couponRepository.findById(id);
		if (!optCoupon.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon not found! "));
		}
		Coupon coupon = optCoupon.get();
		coupon.setCompanyName(coupon.getCompany().getName());
		return ResponseEntity.ok(coupon);
	}

}
