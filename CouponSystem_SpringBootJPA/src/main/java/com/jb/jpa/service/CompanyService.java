package com.jb.jpa.service;

import java.time.LocalDate;
import java.util.List;

import com.jb.jpa.model.entity.Company;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.rest.ex.CannotCreateException;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;

public interface CompanyService extends AbsService {

	/**
	 * Create a new coupon to the specific company, the coupon will be insert to the
	 * data base and will be able to purchased.
	 * 
	 * @param coupon to add.
	 * @return The Coupon.
	 * @throws CannotUpdateException
	 * @throws CouponDoesntExistsException
	 * @throws CannotCreateException
	 */
	Coupon addCoupon(Coupon coupon) throws CannotUpdateException, CouponDoesntExistsException, CannotCreateException;

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
	Coupon updateCouponCategory(long couponId, int category) throws CouponDoesntExistsException, CannotUpdateException;

	/**
	 * Update the description of the coupon.
	 * 
	 * @param couponId    of the coupon to update.
	 * @param description The new description to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponDescription(long couponId, String description)
			throws CouponDoesntExistsException, CannotUpdateException;

	/**
	 * Update the image URL of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param imageURL The new image URL to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponImage(long couponId, String imageURL) throws CouponDoesntExistsException, CannotUpdateException;

	/**
	 * Update the price of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param price    The new price to update.
	 * @return The updated Coupon.
	 * @throws CouponDoesntExistsException
	 * @throws CannotUpdateException
	 */
	Coupon updateCouponPrice(long couponId, double price) throws CouponDoesntExistsException, CannotUpdateException;

	/**
	 * Update the title of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param title    The new title to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponTitle(long couponId, String title) throws CouponDoesntExistsException, CannotUpdateException;

	void removeCouponById(long id) throws CannotUpdateException, CouponDoesntExistsException;

	/**
	 * Find coupon by id.
	 * 
	 * @param id the id of the coupon.
	 * @return The coupon to find.
	 */
	Coupon findCouponById(long id) throws CouponDoesntExistsException;

	/**
	 * Find all coupons of the specific company from data base.
	 * 
	 * @return List of all coupons .
	 */
	List<Coupon> findAllCoupons();

	/**
	 * Find all coupons of the specific company from data base by category.
	 * 
	 * @param category the category.
	 * @return List of all coupons with the same category.
	 */
	List<Coupon> findCouponsByCategory(int category);

	/**
	 * Find all coupons of the specific company from data base that less then the
	 * price.
	 * 
	 * @param price the price.
	 * @return List of all coupons less then the price.
	 */
	List<Coupon> findCouponsLessThen(double price);

	/**
	 * Find all coupons of the specific company from data base that before date.
	 * 
	 * @param date the date.
	 * @return List of all coupons that created before this date.
	 */
	List<Coupon> findCouponsBeforeDate(LocalDate date);

	/**
	 * Update the email of the company.
	 * 
	 * @param email The new email to update.
	 * @return The updated Company.
	 */
	Company updateCompanyEmail(String email) throws CannotUpdateException;

	/**
	 * Update the password of the company.
	 * 
	 * @param password The new password to update.
	 * @return The updated Company.
	 */
	Company updateCompanyPassword(String password);

	/**
	 * Update the name of the company.
	 * 
	 * @param name The new name to update.
	 * @return The updated Company.
	 */
	Company updateCompanyName(String name);

	/**
	 * Update the end date of the coupon.
	 * 
	 * @param couponId of the coupon to update.
	 * @param endDate  The new end date to update.
	 * @return The updated Coupon.
	 */
	Coupon updateCouponEndDate(long couponId, LocalDate endDate)
			throws CouponDoesntExistsException, CannotUpdateException;

	void setId(long clientId);
}
