package com.jb.jpa.service;

import java.time.LocalDate;
import java.util.List;

import com.jb.jpa.model.entity.Admin;
import com.jb.jpa.model.entity.Company;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.model.entity.Customer;
import com.jb.jpa.rest.ex.AdminDoesntExistsException;
import com.jb.jpa.rest.ex.CannotCreateException;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CompanyDoesntExistsException;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;
import com.jb.jpa.rest.ex.CustomerAlreadyExists;
import com.jb.jpa.rest.ex.CustomerDoesntExistsException;

public interface AdminService extends AbsService {

	/**
	 * Update the email of the Admin.
	 * 
	 * @param email The email of the admin.
	 * @return The Admin to update.
	 */
	Admin updateEmail(String email) throws CannotUpdateException;

	/**
	 * Find the admin by id.
	 * 
	 * @return The Admin to find.
	 */
	Admin findById(long id) throws AdminDoesntExistsException;

	/**
	 * Update the password of the Admin.
	 * 
	 * @param password The password of the admin.
	 * @return The Admin to update.
	 */
	Admin updatePassword(String password);

	/**
	 * Find the admin by email.
	 * 
	 * @param email the email of the Admin.
	 * @return The Admin to find.
	 */
	Admin findByEmail(String email) throws AdminDoesntExistsException;

	/**
	 * Find company by id.
	 * 
	 * @param id the id of the company.
	 * @return The company to find.
	 */
	Company findCompanyById(long id) throws CompanyDoesntExistsException;

	/**
	 * Find customer by id.
	 * 
	 * @param id the id of the customer.
	 * @return The customer to find.
	 */
	Customer findCustomerById(long id) throws CustomerDoesntExistsException;

	/**
	 * Find coupon by id.
	 * 
	 * @param id the id of the coupon.
	 * @return The coupon to find.
	 */
	Coupon findCouponById(long id) throws CouponDoesntExistsException;

	/**
	 * Find company by email.
	 * 
	 * @param email the email of the company.
	 * @return The company to find.
	 */
	Company findCompanyByEmail(String email) throws CompanyDoesntExistsException;

	/**
	 * Find customer by email.
	 * 
	 * @param email the email of the customer.
	 * @return The customer to find.
	 */
	Customer findCustomerByEmail(String email) throws CustomerDoesntExistsException;

	/**
	 * Find all companies from data base.
	 * 
	 * @return List of all companies .
	 */
	List<Company> findAllCompanies();

	/**
	 * Find all customers from data base.
	 * 
	 * @return List of all customers .
	 */
	List<Customer> findAllCustomers();

	/**
	 * Find all coupons from data base.
	 * 
	 * @return List of all coupons .
	 */
	List<Coupon> findAllCoupons();

	/**
	 * Find all expired coupons that doesn't remove yet by the couponCleanerTask.
	 * 
	 * @return List of expired coupons.
	 */
	List<Coupon> findExpiredCoupons();

	void deleteCompanyById(long id) throws CompanyDoesntExistsException;

	void deleteCustomerById(long id) throws CustomerDoesntExistsException;

	void deleteCouponById(long id) throws CouponDoesntExistsException;

	void setId(long clientId);

	/**
	 * Create a new company to the data base.
	 * 
	 * @param company to create.
	 * @return The created Company
	 */
	Company createCompany(Company company) throws CannotCreateException, CompanyDoesntExistsException;

	/**
	 * Update the email of the company.
	 * 
	 * @param companyId of the company to update
	 * @param email     The new email to update.
	 * @return The updated Company.
	 */
	Company updateCompanyEmail(long companyId, String email) throws CompanyDoesntExistsException, CannotUpdateException;

	/**
	 * Update the password of the company.
	 * 
	 * @param companyId of the company to update
	 * @param password  The new password to update.
	 * @return The updated Company.
	 */
	Company updateCompanyPassword(long companyId, String password) throws CompanyDoesntExistsException;

	/**
	 * Update the name of the company.
	 * 
	 * @param companyId of the company to update
	 * @param name      The new name to update.
	 * @return The updated Company.
	 */
	Company updateCompanyName(long companyId, String name) throws CompanyDoesntExistsException;

	/**
	 * Create a new customer to the data base.
	 * 
	 * @param customer to create.
	 * @return The created Customer
	 */
	Customer createCustomer(Customer customer)
			throws CustomerAlreadyExists, CustomerDoesntExistsException, CannotUpdateException, CannotCreateException;

	/**
	 * Update the email of the customer.
	 * 
	 * @param customerId of the customer to update
	 * @param email      The new email to update.
	 * @return The updated Customer
	 */
	Customer updateCustomerEmail(long customerId, String email)
			throws CustomerDoesntExistsException, CannotUpdateException;

	/**
	 * Update the first name and last name of the customer.
	 * 
	 * @param customerId of the customer to update
	 * @param firstName  The new first name to update.
	 * @param lastName   The new last name to update.
	 * @return The updated Customer
	 */
	Customer updateCustomerFirstNameLastName(long customerId, String firstName, String lastName)
			throws CustomerDoesntExistsException;

	/**
	 * Update the password of the customer.
	 * 
	 * @param customerId of the customer to update
	 * @param password   The new password to update.
	 * @return The updated Customer
	 */
	Customer updateCustomerPassword(long customerId, String password) throws CustomerDoesntExistsException;

	/**
	 * Create a new coupon to company by id, the coupon will be insert to the data
	 * base with the given company id.
	 * 
	 * @param coupon    to create.
	 * @param companyId the company id that will be insert to the coupon.
	 * @return The created Coupon
	 */
	Coupon createCoupon(Coupon coupon, Long companyId) throws CannotUpdateException, CouponDoesntExistsException,
			CannotCreateException, CompanyDoesntExistsException;

	/**
	 * Update the amount of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param amount   The new amount to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponAmount(long couponId, int amount) throws CouponDoesntExistsException, CannotUpdateException;

	/**
	 * Update the category of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param category The new category to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponCategory(long couponId, int category) throws CouponDoesntExistsException;

	/**
	 * Update the description of the coupon.
	 * 
	 * @param couponId    of the coupon to update.
	 * @param description The new description to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponDescription(long couponId, String description) throws CouponDoesntExistsException;

	/**
	 * Update the image URL of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param imageURL The new image URL to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponImage(long couponId, String imageURL) throws CouponDoesntExistsException;

	/**
	 * Update the price of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param price    The new price to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponPrice(long couponId, double price) throws CouponDoesntExistsException, CannotUpdateException;

	/**
	 * Update the title of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param title    The new title to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponTitle(long couponId, String title) throws CouponDoesntExistsException;

	/**
	 * Update the end date of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param endDate  The new end date to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponEndDate(long couponId, LocalDate endDate)
			throws CouponDoesntExistsException, CannotUpdateException;

	Coupon updateCoupon(long couponId, Coupon coupon) throws CouponDoesntExistsException;

	Company updateCompany(long companyId, Company company) throws CompanyDoesntExistsException, CannotUpdateException;

	Customer updateCustomer(long customerId, Customer customer)
			throws CustomerDoesntExistsException, CannotUpdateException;

}
