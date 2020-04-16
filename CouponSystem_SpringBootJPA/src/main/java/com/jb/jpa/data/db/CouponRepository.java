package com.jb.jpa.data.db;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jb.jpa.model.entity.Coupon;

@Repository
public interface CouponRepository extends JpaRepository<Coupon, Long> {
	/* Administrator & Company Related methods. */
	@Query("select c from Coupon as c where c.company.id =:companyId")
	List<Coupon> findAllByCompanyId(long companyId);

	@Query("select c from Company as comp join comp.coupons as c where comp.id=:companyId")
	List<Coupon> findCompanyCoupons(long companyId);

	@Query("select c from Coupon as c where c.company.id =:companyId and c.category =:category")
	List<Coupon> findCompanyCouponsByCategory(long companyId, int category);

	@Query("select c from Coupon as c where c.company.id =:companyId and c.price <:price")
	List<Coupon> findCompanyCouponsLessThen(long companyId, double price);

	@Query("select c from Coupon as c where c.company.id =:companyId and c.startDate <:date")
	List<Coupon> findCompanyCouponsBeforeDate(long companyId, LocalDate date);

	/* Administrator & Customer Related methods. */
	@Query("select c from Customer as cust join cust.coupons as c where cust.id=:customerId")
	List<Coupon> findCustomerCoupons(long customerId);

	@Query("select c from Customer as cust join cust.coupons as c where cust.id=:customerId and c.category=:category")
	List<Coupon> findCustomerCouponsByCategory(long customerId, int category);

	@Query("select c from Customer as cust join cust.coupons as c where cust.id=:customerId and c.price<:price")
	List<Coupon> findCustomerCouponsLessThen(long customerId, double price);

	/* Administrator Related methods. */
	@Query("select c from Coupon as c where c.endDate< CURRENT_DATE")
	List<Coupon> findExpiredCoupons();

}
