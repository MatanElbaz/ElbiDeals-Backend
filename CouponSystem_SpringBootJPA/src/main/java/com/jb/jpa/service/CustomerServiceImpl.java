package com.jb.jpa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.jb.jpa.data.db.CouponRepository;
import com.jb.jpa.data.db.CustomerRepository;
import com.jb.jpa.data.db.UserRepository;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.model.entity.Customer;
import com.jb.jpa.model.entity.User;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CouponAlreadyPurchased;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;

@Service
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class CustomerServiceImpl implements CustomerService {

	private long customerId;
	private static int OUT_OF_STOCK;

	private CustomerRepository customerRepository;
	private CouponRepository couponRepository;
	private UserRepository userRepository;

	@Autowired
	public CustomerServiceImpl(CustomerRepository customerRepository, CouponRepository couponRepository,
			UserRepository userRepository) {
		this.customerRepository = customerRepository;
		this.couponRepository = couponRepository;
		this.userRepository = userRepository;
	}

	@Override
	public void setId(long clientId) {
		this.customerId = clientId;
	}

	@Override
	public long getClientId() {
		return this.customerId;
	}

	@Override
	public long getRole() {
		return 1;
	}

	@Override
	public Coupon purchaseCoupon(long couponId)
			throws CouponAlreadyPurchased, CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> optCoupon = couponRepository.findById(couponId);
		Optional<Customer> optCustomer = customerRepository.findById(customerId);
		Customer customer = optCustomer.get();

		if (!optCoupon.isPresent()) {
			throw new CouponDoesntExistsException(String.format("No such coupon with id: %d", couponId));
		} else {
			Coupon coupon = optCoupon.get();
			for (Coupon coup : customer.getCoupons()) {
				if (coup.getId() == couponId) {
					throw new CouponAlreadyPurchased(String.format("Coupon "+coupon.getTitle()+" Already purchased."));
				}
			}
			if (coupon.getAmount() > OUT_OF_STOCK) {
				customer.addCoupon(coupon);
				coupon.setAmount(coupon.getAmount() - 1);
				customerRepository.save(customer);
				return couponRepository.save(coupon);
			} else {
				throw new CannotUpdateException(String.format("Sorry, coupon with id: %d is out of stock!", couponId));
			}
		}
	}

	@Override
	public List<Coupon> findAllCustomerCoupons() {
		return couponRepository.findCustomerCoupons(customerId);
	}

	@Override
	public List<Coupon> findCouponsByCategory(int category) {
		return couponRepository.findCustomerCouponsByCategory(customerId, category);
	}

	@Override
	public List<Coupon> findCouponsLessThen(double price) {
		return couponRepository.findCustomerCouponsLessThen(customerId, price);
	}

	@Override
	public Coupon findCouponById(long id) throws CouponDoesntExistsException {
		List<Coupon> customerCoupons = couponRepository.findCustomerCoupons(customerId);
		for (Coupon coupon : customerCoupons) {
			if (coupon.getId() == id) {
				return coupon;
			}
		}
		throw new CouponDoesntExistsException(String.format("Coupon with id: %d does not exists in you coupons.", id));
	}

	@Override
	public Customer updateCustomerEmail(String email) throws CannotUpdateException {
		Customer customer = customerRepository.findById(customerId).get();
		User user = customer.getUser();
		for (User us : userRepository.findAll()) {
			if (email.equals(us.getEmail())) {
				if (customerRepository.findByEmail(email).getId() == customerId) {
					continue;
				}
				throw new CannotUpdateException(String.format("Cannot update,email : %s already exists.", email));
			}
		}
		customerRepository.updateUserEmail(user.getId(), email);
		customer.setEmail(email);
		return customerRepository.save(customer);
	}

	@Override
	public Customer updateCustomerFirstNameLastName(String firstName, String lastName) {
		Customer customer = customerRepository.findById(customerId).get();

		customer.setFirstName(firstName);
		customer.setLastName(lastName);
		return customerRepository.save(customer);
	}

	@Override
	public Customer updateCustomerPassword(String password) {
		Customer customer = customerRepository.findById(customerId).get();
		User user = customer.getUser();

		customerRepository.updateUserPassword(user.getId(), password);
		customer.setPassword(password);
		return customerRepository.save(customer);
	}

	@Override
	public List<Coupon> findAllCoupons() {
		return couponRepository.findAll();
	}

	public Customer getCustomer() {
		return customerRepository.findById(customerId).get();
	}

	public Customer updateCustomer(Customer customer) throws CannotUpdateException {
		updateCustomerEmail(customer.getEmail());
		updateCustomerFirstNameLastName(customer.getFirstName(), customer.getLastName());
		return updateCustomerPassword(customer.getPassword());
	}

}
