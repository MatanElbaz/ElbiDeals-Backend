package com.jb.jpa.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.jb.jpa.data.db.CompanyRepository;
import com.jb.jpa.data.db.CouponRepository;
import com.jb.jpa.data.db.CustomerRepository;
import com.jb.jpa.data.db.UserRepository;
import com.jb.jpa.model.entity.Company;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.model.entity.Customer;
import com.jb.jpa.model.entity.User;
import com.jb.jpa.rest.ex.CannotCreateException;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;

@Service
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class CompanyServiceImpl implements CompanyService {

	private long companyId;

	private CompanyRepository companyRepository;
	private CouponRepository couponRepository;
	private CustomerRepository customerRepository;
	private UserRepository userRepository;

	@Autowired
	public CompanyServiceImpl(CompanyRepository companyRepository, CouponRepository couponRepository,
			UserRepository userRepository,CustomerRepository customerRepository) {
		this.companyRepository = companyRepository;
		this.couponRepository = couponRepository;
		this.userRepository = userRepository;
		this.customerRepository = customerRepository;
	}

	@Override
	public void setId(long clientId) {
		this.companyId = clientId;
	}

	@Override
	public long getClientId() {
		return this.companyId;
	}

	@Override
	public long getRole() {
		return 2;
	}

	@Override
	public Coupon addCoupon(Coupon coupon)
			throws CouponDoesntExistsException, CannotUpdateException, CannotCreateException {
		if (coupon != null) {
			Company companyDB = companyRepository.findById(companyId).get();
			coupon.setCompany(companyDB);
			coupon.setCompanyName(companyDB.getName());

			for (Coupon coup : companyDB.getCoupons()) {
				if (coup.getTitle().equals(coupon.getTitle())) {
					throw new CannotCreateException(String
							.format("Cannot create coupon with title: %s , coupon already exists.", coupon.getTitle()));
				}
			}
			coupon.setId(0);
			return couponRepository.save(coupon);
		}
		throw new CouponDoesntExistsException("Cannot add an empty coupon, please enter coupon details.");

	}

	@Override
	public void removeCouponById(long id) throws CannotUpdateException, CouponDoesntExistsException {
		Optional<Coupon> optCoupon = couponRepository.findById(id);
		if (optCoupon.isPresent()) {
			Coupon coupon = optCoupon.get();
			if (coupon.getCompany().getId() == companyId) {
				for (Customer customer : customerRepository.findAll()) {
					for (int i = 0; i < customer.getCoupons().size(); i++) {
						if (customer.getCoupons().get(i).getId() == id) {
							customer.getCoupons().remove(i);
							customerRepository.save(customer);
						}
					}
				}
				couponRepository.deleteById(id);
			} else {
				throw new CannotUpdateException(
						"Invalid request. Delete coupon of a different company is not allowed. please make sure you enter the correct id.");
			}

		} else {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d , does not exists.", id));
		}
	}

	@Override
	public Coupon findCouponById(long id) throws CouponDoesntExistsException {
		List<Coupon> companyCoupons = couponRepository.findCompanyCoupons(companyId);
		for (Coupon coupon : companyCoupons) {
			if (coupon.getId() == id) {
				return coupon;
			}
		}
		throw new CouponDoesntExistsException(String.format("Coupon with id: %d does not exists in you coupons.", id));
	}

	@Override
	public List<Coupon> findAllCoupons() {

		return couponRepository.findAllByCompanyId(companyId);
	}

	@Override
	public List<Coupon> findCouponsByCategory(int category) {
		return couponRepository.findCompanyCouponsByCategory(companyId, category);
	}

	@Override
	public List<Coupon> findCouponsLessThen(double price) {
		return couponRepository.findCompanyCouponsLessThen(companyId, price);
	}

	@Override
	public List<Coupon> findCouponsBeforeDate(LocalDate date) {
		return couponRepository.findCompanyCouponsBeforeDate(companyId, date);
	}

	@Override
	public Company updateCompanyEmail(String email) throws CannotUpdateException {
		Company company = companyRepository.findById(companyId).get();
		User user = company.getUser();
		for (User us : userRepository.findAll()) {
			if (email.equals(us.getEmail())) {
				if (companyRepository.findByEmail(email).getId() == companyId) {
					continue;
				}
				throw new CannotUpdateException(String.format("Cannot update,email : %s already exists.", email));
			}
		}
		companyRepository.updateUserEmail(user.getId(), email);
		company.setEmail(email);
		return companyRepository.save(company);
	}

	@Override
	public Company updateCompanyPassword(String password) {
		Company company = companyRepository.findById(companyId).get();
		User user = company.getUser();
		companyRepository.updateUserPassword(user.getId(), password);
		company.setPassword(password);
		return companyRepository.save(company);
	}

	@Override
	public Company updateCompanyName(String name) {
		Company company = companyRepository.findById(companyId).get();
		company.setName(name);
		for (Coupon coupon : company.getCoupons()) {
			coupon.setCompanyName(name);
		}
		return companyRepository.save(company);
	}

	@Override
	public Coupon updateCouponAmount(long couponId, int amount)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		}
		Coupon coupon = couponById.get();
		if (coupon.getCompany().getId() == companyId) {
			if (amount >= 0) {
				coupon.setAmount(amount);
			} else {
				throw new CannotUpdateException(String.format(
						"Illegal amount : %d , the amount of the coupon must be equal or higher then 0.", amount));
			}
			return couponRepository.save(coupon);
		} else {
			throw new CannotUpdateException(String
					.format("Cannot update coupon with id : %d, you can only update your own coupons.", couponId));
		}
	}

	@Override
	public Coupon updateCouponEndDate(long couponId, LocalDate endDate)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			Coupon coupon = couponById.get();
			if (endDate.isAfter(LocalDate.now()) && coupon.getCompany().getId() == companyId) {
				coupon.setEndDate(endDate);
				return couponRepository.save(coupon);
			} else if (coupon.getCompany().getId() != companyId) {
				throw new CannotUpdateException(String
						.format("Cannot update coupon with id : %d, you can only update your own coupons.", couponId));
			}

			LocalDate localDate = LocalDate.now();
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern(" dd/LLLL/yyyy ");
			throw new CannotUpdateException(
					String.format("Cannot update coupon with id: %d , the end date must be after %s.", couponId,
							localDate.format(formatter)));
		}
	}

	@Override
	public Coupon updateCouponCategory(long couponId, int category)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		}
		Coupon coupon = couponById.get();
		if (coupon.getCompany().getId() == companyId) {
			coupon.setCategory(category);
			return couponRepository.save(coupon);
		} else {
			throw new CannotUpdateException(String
					.format("Cannot update coupon with id : %d, you can only update your own coupons.", couponId));
		}
	}

	@Override
	public Coupon updateCouponDescription(long couponId, String description)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		}
		Coupon coupon = couponById.get();
		if (coupon.getCompany().getId() == companyId) {
			coupon.setDescription(description);
			return couponRepository.save(coupon);
		} else {
			throw new CannotUpdateException(String
					.format("Cannot update coupon with id : %d, you can only update your own coupons.", couponId));
		}
	}

	@Override
	public Coupon updateCouponImage(long couponId, String imageURL)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		}
		Coupon coupon = couponById.get();
		if (coupon.getCompany().getId() == companyId) {
			coupon.setImageURL(imageURL);
			return couponRepository.save(coupon);
		} else {
			throw new CannotUpdateException(String
					.format("Cannot update coupon with id : %d, you can only update your own coupons.", couponId));
		}
	}

	@Override
	public Coupon updateCouponPrice(long couponId, double price)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		}
		Coupon coupon = couponById.get();
		if (coupon.getCompany().getId() == companyId) {
			if (price == 0) {
				throw new CannotUpdateException(
						String.format("Illegal price , the price of the coupon must be higher then 0."));
			} else {
				coupon.setPrice(price);
			}
			return couponRepository.save(coupon);
		} else {
			throw new CannotUpdateException(String
					.format("Cannot update coupon with id : %d, you can only update your own coupons.", couponId));
		}
	}

	@Override
	public Coupon updateCouponTitle(long couponId, String title)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		}
		Coupon coupon = couponById.get();
		Company company = coupon.getCompany();
		if (coupon.getCompany().getId() == companyId) {
			for (Coupon coup : company.getCoupons()) {
				if (coup.getTitle().equals(title)) {
					throw new CannotUpdateException(
							String.format("Cannot update coupon with title: %s , title already exists.", title));
				}
			}
			coupon.setTitle(title);
			return couponRepository.save(coupon);
		} else {
			throw new CannotUpdateException(String
					.format("Cannot update coupon with id : %d, you can only update your own coupons.", couponId));
		}

	}

	public Coupon updateCoupon(long couponId, Coupon coupon) throws CouponDoesntExistsException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			coupon.setCompanyName(couponById.get().getCompanyName());
			coupon.setCompany(couponById.get().getCompany());
			coupon.setId(couponId);
			return couponRepository.save(coupon);
		}
	}

	public Company updateCompany(Company company) throws CannotUpdateException {

		updateCompanyEmail(company.getEmail());
		updateCompanyName(company.getName());
		return updateCompanyPassword(company.getPassword());

	}

	public Company getCompany() {
		return companyRepository.findById(companyId).get();

	}

}
