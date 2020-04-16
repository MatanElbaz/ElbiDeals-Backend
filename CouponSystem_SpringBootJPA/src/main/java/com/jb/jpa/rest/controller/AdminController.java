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

import com.jb.jpa.model.entity.Admin;
import com.jb.jpa.model.entity.Company;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.model.entity.Customer;
import com.jb.jpa.rest.ClientSession;
import com.jb.jpa.rest.ex.AdminDoesntExistsException;
import com.jb.jpa.rest.ex.CannotCreateException;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CompanyDoesntExistsException;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;
import com.jb.jpa.rest.ex.CustomerAlreadyExists;
import com.jb.jpa.rest.ex.CustomerDoesntExistsException;
import com.jb.jpa.rest.ex.InvalidLoginException;
import com.jb.jpa.service.AdminServiceImpl;

@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials="true")
@RestController
@RequestMapping("/api")
public class AdminController {

	private Map<String, ClientSession> tokenMap;

	@Autowired
	public AdminController(@Qualifier("tokens") Map<String, ClientSession> tokenMap) {
		this.tokenMap = tokenMap;

	}

	private ClientSession getSession(String token) {
		return tokenMap.get(token);
	}
	
	@GetMapping("/admin/get/{token}")
	public ResponseEntity<Admin> getAdmin(@PathVariable String token) throws InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot get customer, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Admin admin = adminServiceImpl.getAdmin();
		session.accessed();
		return ResponseEntity.ok(admin);
	}
	
	@PutMapping("/admin/update/admin/{token}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable String token,@RequestBody Admin admin) throws InvalidLoginException, CannotUpdateException
			 {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update admin email, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Admin updateAdmin = adminServiceImpl.updateAdmin(admin);
		session.accessed();

		return ResponseEntity.ok(updateAdmin);
	}

	@PutMapping("/admin/update/email/{token}")
	public ResponseEntity<Admin> updateAdminEmail(@PathVariable String token, @RequestParam String email)
			throws AdminDoesntExistsException, InvalidLoginException, CannotUpdateException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update admin email, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Admin updateAdmin = adminServiceImpl.updateEmail(email);
		session.accessed();

		return ResponseEntity.ok(updateAdmin);
	}

	@PutMapping("/admin/update/password/{token}")
	public ResponseEntity<Admin> updateAdminPassword(@PathVariable String token, @RequestParam String password)
			throws CannotUpdateException, AdminDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update admin password, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Admin updateAdmin = adminServiceImpl.updatePassword(password);
		session.accessed();

		return ResponseEntity.ok(updateAdmin);
	}

	@GetMapping("/admin/findbyemail/{email}/{token}")
	public ResponseEntity<Admin> findAdminByEmail(@PathVariable String email, @PathVariable String token)
			throws InvalidLoginException, AdminDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find admin, session does not exists. "));
		}
		session.accessed();
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Admin adminByEmail = adminServiceImpl.findByEmail(email);
		if (adminByEmail != null) {
			return ResponseEntity.ok(adminByEmail);
		}
		throw new AdminDoesntExistsException(String.format("Cannot find admin with email: %s ", email));

	}

	@GetMapping("/admin/findbyid/{id}/{token}")
	public ResponseEntity<Admin> findAdminById(@PathVariable long id, @PathVariable String token)
			throws InvalidLoginException, AdminDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find admin, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Admin adminById = adminServiceImpl.findById(id);
		session.accessed();

		return ResponseEntity.ok(adminById);
	}

	@GetMapping("/admin/companybyid/{id}/{token}")
	public ResponseEntity<Company> findCompanyById(@PathVariable long id, @PathVariable String token)
			throws InvalidLoginException, CompanyDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find company, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Company findCompanyById = adminServiceImpl.findCompanyById(id);
		session.accessed();

		return ResponseEntity.ok(findCompanyById);
	}

	@GetMapping("/admin/customerbyid/{id}/{token}")
	public ResponseEntity<Customer> findCustomerById(@PathVariable long id, @PathVariable String token)
			throws InvalidLoginException, CustomerDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find customer, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Customer findCustomerById = adminServiceImpl.findCustomerById(id);
		session.accessed();

		return ResponseEntity.ok(findCustomerById);
	}
	
	@GetMapping("/admin/couponbyid/{id}/{token}")
	public ResponseEntity<Coupon> findCouponById(@PathVariable long id, @PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find coupon, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon findCouponById = adminServiceImpl.findCouponById(id);
		session.accessed();

		return ResponseEntity.ok(findCouponById);
	}

	@GetMapping("/admin/companybyemail/{email}/{token}")
	public ResponseEntity<Company> findCompanyByEmail(@PathVariable String email, @PathVariable String token)
			throws InvalidLoginException, CompanyDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find company, session does not exists. "));
		}
		session.accessed();
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Company findCompanyByEmail = adminServiceImpl.findCompanyByEmail(email);
		if (findCompanyByEmail != null) {
			return ResponseEntity.ok(findCompanyByEmail);
		}
		throw new CompanyDoesntExistsException(String.format("Cannot find company with email: %s ", email));

	}

	@GetMapping("/admin/customerbyemail/{email}/{token}")
	public ResponseEntity<Customer> findCustomerByEmail(@PathVariable String email, @PathVariable String token)
			throws InvalidLoginException, CustomerDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find customer, session does not exists. "));
		}
		session.accessed();
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Customer findCustomerByEmail = adminServiceImpl.findCustomerByEmail(email);
		if (findCustomerByEmail != null) {
			return ResponseEntity.ok(findCustomerByEmail);
		}
		throw new CustomerDoesntExistsException(String.format("Cannot find customer with email: %s ", email));
	}

	@GetMapping("/admin/allcompanies/{token}")
	public ResponseEntity<List<Company>> findAllCompanies(@PathVariable String token)
			throws InvalidLoginException, CompanyDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find companies, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		List<Company> allCompanies = adminServiceImpl.findAllCompanies();
		session.accessed();

		if (allCompanies.isEmpty()) {
			throw new CompanyDoesntExistsException(String.format("There is no companies in the system"));
		}
		return ResponseEntity.ok(allCompanies);
	}

	@GetMapping("/admin/allcustomers/{token}")
	public ResponseEntity<List<Customer>> findAllCustomers(@PathVariable String token)
			throws InvalidLoginException, CustomerDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find customers, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		List<Customer> allCustomers = adminServiceImpl.findAllCustomers();
		session.accessed();

		if (allCustomers.isEmpty()) {
			throw new CustomerDoesntExistsException(String.format("There is no customers in the system"));
		}
		return ResponseEntity.ok(allCustomers);
	}

	@GetMapping("/admin/allcoupons/{token}")
	public ResponseEntity<List<Coupon>> findAllCoupons(@PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);
		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find coupons, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		List<Coupon> allCoupons = adminServiceImpl.findAllCoupons();
		session.accessed();

		if (allCoupons.isEmpty()) {
			throw new CouponDoesntExistsException(String.format("There is no coupons in the system"));
		}
		return ResponseEntity.ok(allCoupons);
	}

	@GetMapping("/admin/expiredcoupons/{token}")
	public ResponseEntity<List<Coupon>> findExpiredCoupons(@PathVariable String token)
			throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot find expired coupons, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		List<Coupon> allCoupons = adminServiceImpl.findExpiredCoupons();
		session.accessed();

		if (allCoupons.isEmpty()) {
			throw new CouponDoesntExistsException(String.format("There is no expired coupons in the system"));
		}
		return ResponseEntity.ok(allCoupons);
	}

	@DeleteMapping("/admin/deletecompany/{id}/{token}")
	public ResponseEntity<HttpStatus> deleteCompanyById(@PathVariable long id, @PathVariable String token)
			throws InvalidLoginException, CompanyDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot remove company, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		adminServiceImpl.deleteCompanyById(id);
		session.accessed();

		return ResponseEntity.ok(HttpStatus.OK);
	}

	@DeleteMapping("/admin/deletecustomer/{id}/{token}")
	public ResponseEntity<HttpStatus> deleteCustomerById(@PathVariable long id, @PathVariable String token)
			throws InvalidLoginException, CustomerDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot remove customer, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		adminServiceImpl.deleteCustomerById(id);
		session.accessed();

		return ResponseEntity.ok(HttpStatus.OK);
	}

	@DeleteMapping("/admin/deletecoupon/{id}/{token}")
	public String deleteCouponById(@PathVariable long id, @PathVariable String token) throws CouponDoesntExistsException
			 {
		
		ClientSession session = getSession(token);

		if (session == null) {
			return "Cannot remove coupon, session does not exists. ";
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		adminServiceImpl.deleteCouponById(id);
		session.accessed();

		return "Coupon deleted";
	}

	@PutMapping("/admin/createcompany/{token}")
	public ResponseEntity<Company> createCompany(@RequestBody Company company, @PathVariable String token)
			throws InvalidLoginException, CannotCreateException, CompanyDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot create company, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Company createdCompany = adminServiceImpl.createCompany(company);
		session.accessed();

		return ResponseEntity.ok(createdCompany);
	}
	
	@PutMapping("/admin/update/company/{companyId}/{token}")
	public ResponseEntity<Company> updateCompany(@PathVariable long companyId, @PathVariable String token,
			@RequestBody Company company) throws InvalidLoginException, CompanyDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update company, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Company updatedCompany = adminServiceImpl.updateCompany(companyId, company);
		session.accessed();

		return ResponseEntity.ok(updatedCompany);
	}

	@PutMapping("/admin/update/companyemail/{companyId}/{token}")
	public ResponseEntity<Company> updateCompanyEmail(@PathVariable long companyId, @PathVariable String token,
			@RequestParam String email)
			throws InvalidLoginException, CompanyDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update company email, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Company updateCompany = adminServiceImpl.updateCompanyEmail(companyId, email);
		session.accessed();

		return ResponseEntity.ok(updateCompany);
	}

	@PutMapping("/admin/update/companypassword/{companyId}/{token}")
	public ResponseEntity<Company> updateCompanyPassword(@PathVariable long companyId, @PathVariable String token,
			@RequestParam String password)
			throws InvalidLoginException, CompanyDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update company password, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Company updateCompany = adminServiceImpl.updateCompanyPassword(companyId, password);
		session.accessed();

		return ResponseEntity.ok(updateCompany);
	}

	@PutMapping("/admin/update/companyname/{companyId}/{token}")
	public ResponseEntity<Company> updateCompanyName(@PathVariable long companyId, @PathVariable String token,
			@RequestParam String name)
			throws InvalidLoginException, CompanyDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update company name, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Company updateCompany = adminServiceImpl.updateCompanyName(companyId, name);
		session.accessed();

		return ResponseEntity.ok(updateCompany);
	}

	@PutMapping("/admin/createcustomer/{token}")
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer, @PathVariable String token)
			throws InvalidLoginException, CustomerAlreadyExists, CustomerDoesntExistsException, CannotUpdateException,
			CannotCreateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot create customer, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Customer createdCustomer = adminServiceImpl.createCustomer(customer);
		session.accessed();

		return ResponseEntity.ok(createdCustomer);
	}
	
	@PutMapping("/admin/update/customer/{customerId}/{token}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable long customerId, @PathVariable String token,
			@RequestBody Customer customer) throws InvalidLoginException, CustomerDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update customer, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Customer updatedCustomer = adminServiceImpl.updateCustomer(customerId, customer);
		session.accessed();

		return ResponseEntity.ok(updatedCustomer);
	}

	@PutMapping("/admin/update/customeremail/{customerId}/{token}")
	public ResponseEntity<Customer> updateCustomerEmail(@PathVariable long customerId, @PathVariable String token,
			@RequestParam String email)
			throws InvalidLoginException, CustomerDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update customer email, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Customer updateCustomer = adminServiceImpl.updateCustomerEmail(customerId, email);
		session.accessed();

		return ResponseEntity.ok(updateCustomer);
	}

	@PutMapping("/admin/update/customername/{customerId}/{token}")
	public ResponseEntity<Customer> updateCustomerFirstLastName(@PathVariable long customerId,
			@PathVariable String token, @RequestParam String firstName, @RequestParam String lastName)
			throws InvalidLoginException, CustomerDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(
					String.format("Cannot update customer first name and last name, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Customer updateCustomer = adminServiceImpl.updateCustomerFirstNameLastName(customerId, firstName, lastName);
		session.accessed();

		return ResponseEntity.ok(updateCustomer);
	}

	@PutMapping("/admin/update/customerpassword/{customerId}/{token}")
	public ResponseEntity<Customer> updateCustomerPassword(@PathVariable long customerId, @PathVariable String token,
			@RequestParam String password) throws InvalidLoginException, CustomerDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(
					String.format("Cannot update customer password, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Customer updateCustomer = adminServiceImpl.updateCustomerPassword(customerId, password);
		session.accessed();

		return ResponseEntity.ok(updateCustomer);
	}

	@PutMapping("/admin/createcoupon/{companyId}/{token}")
	public ResponseEntity<Coupon> createCoupon(@RequestBody Coupon coupon, @PathVariable long companyId,
			@PathVariable String token) throws InvalidLoginException, CouponDoesntExistsException,
			CannotCreateException, CompanyDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot create coupon, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon createCoupon = adminServiceImpl.createCoupon(coupon, companyId);
		session.accessed();

		return ResponseEntity.ok(createCoupon);
	}

	@PutMapping("/admin/update/couponamount/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponAmount(@PathVariable long couponId, @PathVariable String token,
			@RequestParam int amount) throws InvalidLoginException, CouponDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon amount, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon updatedCoupon = adminServiceImpl.updateCouponAmount(couponId, amount);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}
	@PutMapping("/admin/update/coupon/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCoupon(@PathVariable long couponId, @PathVariable String token,
			@RequestBody Coupon coupon) throws InvalidLoginException, CouponDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon updatedCoupon = adminServiceImpl.updateCoupon(couponId, coupon);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/admin/update/couponcategory/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponCategory(@PathVariable long couponId, @PathVariable String token,
			@RequestParam int category) throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon category, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon updatedCoupon = adminServiceImpl.updateCouponCategory(couponId, category);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/admin/update/coupondescription/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponDescription(@PathVariable long couponId, @PathVariable String token,
			@RequestParam String description) throws CouponDoesntExistsException, InvalidLoginException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(
					String.format("Cannot update coupon desription, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon updatedCoupon = adminServiceImpl.updateCouponDescription(couponId, description);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/admin/update/couponimage/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponImage(@PathVariable long couponId, @PathVariable String token,
			@RequestParam String imageURL) throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon image URL, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon updatedCoupon = adminServiceImpl.updateCouponImage(couponId, imageURL);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/admin/update/couponprice/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponPrice(@PathVariable long couponId, @PathVariable String token,
			@RequestParam double price)
			throws InvalidLoginException, CouponDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon price, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon updatedCoupon = adminServiceImpl.updateCouponPrice(couponId, price);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/admin/update/coupontitle/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponTitle(@PathVariable long couponId, @PathVariable String token,
			@RequestParam String title) throws InvalidLoginException, CouponDoesntExistsException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon title, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon updatedCoupon = adminServiceImpl.updateCouponTitle(couponId, title);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

	@PutMapping("/admin/update/coupondate/{couponId}/{token}")
	public ResponseEntity<Coupon> updateCouponEndDate(@PathVariable long couponId, @PathVariable String token,
			@DateTimeFormat(iso = ISO.DATE) @RequestParam LocalDate endDate)
			throws InvalidLoginException, CouponDoesntExistsException, CannotUpdateException {
		ClientSession session = getSession(token);

		if (session == null) {
			throw new InvalidLoginException(String.format("Cannot update coupon end date, session does not exists. "));
		}
		AdminServiceImpl adminServiceImpl = (AdminServiceImpl) session.getAbsService();
		Coupon updatedCoupon = adminServiceImpl.updateCouponEndDate(couponId, endDate);
		session.accessed();

		return ResponseEntity.ok(updatedCoupon);
	}

}
