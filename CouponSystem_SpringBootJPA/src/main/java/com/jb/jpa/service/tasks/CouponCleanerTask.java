package com.jb.jpa.service.tasks;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.jb.jpa.data.db.CouponRepository;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;
import com.jb.jpa.service.AdminServiceImpl;

@Component
@EnableScheduling
class CouponCleanerTask implements Runnable {

	private static final long SLEEP_TIME = 24 * 60 * 60 * 1000;
	@Autowired
	private CouponRepository couponRepository;
	@Autowired
	private AdminServiceImpl adminImpl;

	@Override
	@PostConstruct
	@Scheduled(fixedRate = SLEEP_TIME)
	@Transactional
	public void run() {
		List<Coupon> allExCoupons = couponRepository.findExpiredCoupons();
		for (Coupon coupon : allExCoupons) {
			try {
				adminImpl.deleteCouponById(coupon.getId());
			} catch (CouponDoesntExistsException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}

