package com.jb.jpa.rest.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jb.jpa.model.entity.Company;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.rest.ClientSession;
import com.jb.jpa.rest.ex.CannotCreateException;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;
import com.jb.jpa.rest.ex.InvalidLoginException;
import com.jb.jpa.service.CompanyServiceImpl;

@CrossOrigin(origins = { "http://localhost:4200" }, allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class CompanyController {

	private Map<String, ClientSession> tokenMap;

	@Autowired
	public CompanyController(@Qualifier("tokens") Map<String, ClientSession> tokenMap) {
		this.tokenMap = tokenMap;

	}

	private ClientSession getSession(String token) {
		return tokenMap.get(token);
	}

	@GetMapping("/companies/get/{token}")
	public ResponseEntity<Company> getCompany(@PathVariable String token) throws InvalidLoginException
			{
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get company, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Company company = companyServiceImpl.getCompany();
		session.accessed();
		return ResponseEntity.ok(company);
	}

	@PutMapping("/companies/add/{token}")
	public ResponseEntity<Coupon> addCoupon(@RequestBody Coupon coupon, @PathVariable String token)
			throws CouponDoesntExistsException, CannotUpdateException, CannotCreateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot add coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		companyServiceImpl.addCoupon(coupon);
		session.accessed();

		return ResponseEntity.ok(coupon);
	}

	@PutMapping("/companies/update/coupon/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCoupon(@PathVariable long couponId, @PathVariable String token,
			@RequestBody Coupon coupon) throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon updatedCoupon = companyServiceImpl.updateCoupon(couponId, coupon);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/companies/update/couponamount/{couponId}/{amount}/{token}")
	public ResponseEntity<Coupon> updateCouponAmount(@PathVariable long couponId, @PathVariable int amount,
			@PathVariable String token)
			throws CannotUpdateException, CouponDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon updatedCoupon = companyServiceImpl.updateCouponAmount(couponId, amount);
		session.accessed();
		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/companies/update/couponcategory/{couponId}/{category}/{token}")
	public ResponseEntity<Coupon> updateCouponCategory(@PathVariable long couponId, @PathVariable int category,
			@PathVariable String token)
			throws CannotUpdateException, CouponDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon updatedCoupon = companyServiceImpl.updateCouponCategory(couponId, category);
		session.accessed();
		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/companies/update/coupondescription/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponDescription(@PathVariable long couponId, @RequestParam String description,
			@PathVariable String token)
			throws CannotUpdateException, CouponDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon updatedCoupon = companyServiceImpl.updateCouponDescription(couponId, description);
		session.accessed();
		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/companies/update/coupondate/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponEndDate(@PathVariable long couponId, @PathVariable String token,
			@DateTimeFormat(iso = ISO.DATE) @RequestParam LocalDate endDate)
			throws CouponDoesntExistsException, CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon end date, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon updatedCoupon = companyServiceImpl.updateCouponEndDate(couponId, endDate);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/companies/update/couponimage/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponImageUrl(@PathVariable long couponId, @PathVariable String token,
			@RequestParam String imageurl)
			throws CouponDoesntExistsException, CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon updatedCoupon = companyServiceImpl.updateCouponImage(couponId, imageurl);
		session.accessed();
		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/companies/update/couponprice/{couponId}/{price}/{token}")
	public ResponseEntity<Coupon> updateCouponPrice(@PathVariable long couponId, @PathVariable double price,
			@PathVariable String token)
			throws CannotUpdateException, CouponDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon updatedCoupon = companyServiceImpl.updateCouponPrice(couponId, price);
		session.accessed();
		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/companies/update/coupontitle/{couponId}/{title}/{token}")
	public ResponseEntity<Coupon> updateCouponTitle(@PathVariable long couponId, @PathVariable String title,
			@PathVariable String token)
			throws CouponDoesntExistsException, CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon updatedCoupon = companyServiceImpl.updateCouponTitle(couponId, title);
		session.accessed();
		return ResponseEntity.ok(updatedCoupon);

	}

	@DeleteMapping("/companies/deletecoupon/{id}/{token}")
	public ResponseEntity<HttpStatus> removeCouponById(@PathVariable long id, @PathVariable String token)
			throws CannotUpdateException, CouponDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot remove coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		companyServiceImpl.removeCouponById(id);
		session.accessed();
		return ResponseEntity.ok(HttpStatus.OK);
	}

	@GetMapping("/companies/findcoupon/{id}/{token}")
	public ResponseEntity<Coupon> findCouponById(@PathVariable long id, @PathVariable String token)
			throws CannotUpdateException, CouponDoesntExistsException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new CannotUpdateException(String.format("Cannot find coupon, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Coupon findCouponById = companyServiceImpl.findCouponById(id);
		session.accessed();

		return ResponseEntity.ok(findCouponById);
	}

	@GetMapping("/companies/allcoupons/{token}")
	public ResponseEntity<List<Coupon>> getAllCoupons(@PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get coupons, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		List<Coupon> allCoupons = companyServiceImpl.findAllCoupons();

		session.accessed();

		if (allCoupons.isEmpty()) {
			throw new CouponDoesntExistsException(String.format("There is no coupons in your company."));
		}
		return ResponseEntity.ok(allCoupons);
	}

	@GetMapping("/companies/allbycategory/{category}/{token}")
	public ResponseEntity<List<Coupon>> getAllCouponsByCategory(@PathVariable int category, @PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get coupons, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		List<Coupon> allCouponsByCategory = companyServiceImpl.findCouponsByCategory(category);
		session.accessed();

		if (allCouponsByCategory.isEmpty()) {
			throw new CouponDoesntExistsException(
					String.format("There is no coupons with category : %d in your company.", category));
		}
		return ResponseEntity.ok(allCouponsByCategory);
	}

	@GetMapping("/companies/alllessthen/{price}/{token}")
	public ResponseEntity<List<Coupon>> getAllCouponsLessThen(@PathVariable double price, @PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get coupons, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		List<Coupon> allCouponsLessThen = companyServiceImpl.findCouponsLessThen(price);
		session.accessed();

		if (allCouponsLessThen.isEmpty()) {
			throw new CouponDoesntExistsException(
					String.format("There is no coupons less then: %.2f in your company.", price));
		}
		return ResponseEntity.ok(allCouponsLessThen);
	}

	@GetMapping("/companies/allbeforedate/{token}")
	public ResponseEntity<List<Coupon>> getAllCouponsBeforeDate(
			@DateTimeFormat(iso = ISO.DATE) @RequestParam LocalDate date, @PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get coupons, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		List<Coupon> allCouponsLessThen = companyServiceImpl.findCouponsBeforeDate(date);
		session.accessed();

		if (allCouponsLessThen.isEmpty()) {
			throw new CouponDoesntExistsException(
					String.format("There is no coupons before date: %s in your company.", date.toString()));
		}
		return ResponseEntity.ok(allCouponsLessThen);
	}

	@PutMapping("/companies/update/company/{token}")
	public ResponseEntity<Company> updateCompany(@PathVariable String token, @RequestBody Company company)
			throws InvalidLoginException, CannotUpdateException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update company, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Company updatedCompany = companyServiceImpl.updateCompany(company);
		session.accessed();
		return ResponseEntity.ok(updatedCompany);
	}

	@PutMapping("/companies/update/email/{token}")
	public ResponseEntity<Company> updateCompanyEmail(@PathVariable String token, @RequestParam String email)
			throws CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update company email, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Company updatedCompany = companyServiceImpl.updateCompanyEmail(email);
		session.accessed();
		return ResponseEntity.ok(updatedCompany);
	}

	@PutMapping("/companies/update/password/{token}")
	public ResponseEntity<Company> updateCompanyPassword(@PathVariable String token, @RequestParam String password)
			throws CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update company password, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Company updatedCompany = companyServiceImpl.updateCompanyPassword(password);
		session.accessed();

		return ResponseEntity.ok(updatedCompany);
	}

	@PutMapping("/companies/update/name/{token}")
	public ResponseEntity<Company> updateCompanyName(@PathVariable String token, @RequestParam String name)
			throws CannotUpdateException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update company name, session does not exists. "));
		}
		CompanyServiceImpl companyServiceImpl = (CompanyServiceImpl) session.getAbsService();
		Company updatedCompany = companyServiceImpl.updateCompanyName(name);
		session.accessed();

		return ResponseEntity.ok(updatedCompany);
	}

}