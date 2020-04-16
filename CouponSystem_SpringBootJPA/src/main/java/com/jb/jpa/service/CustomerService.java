package com.jb.jpa.service;

import java.util.List;

import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.model.entity.Customer;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CouponAlreadyPurchased;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;

public interface CustomerService extends AbsService {
	/**
	 * Purchase coupon by customer, after the coupon will be purchased by the
	 * specific customer, it will be insert to customer_coupon table.
	 * 
	 * @param couponId the coupon Id to purchase.
	 * @return the purchased coupon.
	 * @throws CouponAlreadyPurchased
	 * @throws CouponDoesntExistsException
	 * @throws CannotUpdateException
	 */
	Coupon purchaseCoupon(long couponId)
			throws CouponAlreadyPurchased, CouponDoesntExistsException, CannotUpdateException;

	/**
	 * Update the email of the specific customer.
	 * 
	 * @param email The new email to update.
	 * @return The updated Customer.
	 */
	Customer updateCustomerEmail(String email) throws CannotUpdateException;

	/**
	 * Update the first name and last name of the specific customer.
	 * 
	 * @param firstName The new first name to update.
	 * @param lastName  The new last name to update.
	 * @return The updated Customer
	 */
	Customer updateCustomerFirstNameLastName(String firstName, String lastName);

	/**
	 * Update the password of the specific customer.
	 * 
	 * @param customerId of the customer to update
	 * @param password   The new password to update.
	 * @return The updated Customer
	 */
	Customer updateCustomerPassword(String password);

	/**
	 * Find purchased coupon by id from the specific customer coupons.
	 * 
	 * @param id the id of the coupon.
	 * @return The coupon to find.
	 */
	Coupon findCouponById(long id) throws CouponDoesntExistsException;

	/**
	 * Find all the specific customer purchased coupons.
	 * 
	 * @return List of all customer coupons.
	 */
	List<Coupon> findAllCustomerCoupons();

	/**
	 * Find all coupons of the specific customer from data base by category.
	 * 
	 * @param category the category.
	 * @return List of all coupons with the same category.
	 */
	List<Coupon> findCouponsByCategory(int category);

	/**
	 * Find all coupons of the specific customer from data base that cost less then
	 * the price.
	 * 
	 * @param price The price.
	 * @return List of all coupons less then the price.
	 */
	List<Coupon> findCouponsLessThen(double price);

	/**
	 * Find all coupons from data base, This option allows the buyer(customer) to
	 * actually look at the coupons on the site and choose which one they would like
	 * to purchase
	 * 
	 * @return List of all coupons.
	 */
	List<Coupon> findAllCoupons();

	void setId(long clientId);

}
