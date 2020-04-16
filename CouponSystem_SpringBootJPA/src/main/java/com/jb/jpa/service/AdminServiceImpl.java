package com.jb.jpa.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.jb.jpa.data.db.AdminRepository;
import com.jb.jpa.data.db.CompanyRepository;
import com.jb.jpa.data.db.CouponRepository;
import com.jb.jpa.data.db.CustomerRepository;
import com.jb.jpa.data.db.UserRepository;
import com.jb.jpa.model.entity.Admin;
import com.jb.jpa.model.entity.Company;
import com.jb.jpa.model.entity.Coupon;
import com.jb.jpa.model.entity.Customer;
import com.jb.jpa.model.entity.User;
import com.jb.jpa.rest.ex.AdminDoesntExistsException;
import com.jb.jpa.rest.ex.CannotCreateException;
import com.jb.jpa.rest.ex.CannotUpdateException;
import com.jb.jpa.rest.ex.CompanyDoesntExistsException;
import com.jb.jpa.rest.ex.CouponDoesntExistsException;
import com.jb.jpa.rest.ex.CustomerAlreadyExists;
import com.jb.jpa.rest.ex.CustomerDoesntExistsException;

@Service
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class AdminServiceImpl implements AdminService {

	private AdminRepository adminRepository;
	private CompanyRepository companyRepository;
	private CustomerRepository customerRepository;
	private CouponRepository couponRepository;
	private UserRepository userRepository;

	private long adminId;

	@Autowired
	public AdminServiceImpl(AdminRepository adminRepository, CompanyRepository companyRepository,
			CustomerRepository customerRepository, CouponRepository couponRepository, UserRepository userRepository) {
		this.adminRepository = adminRepository;
		this.companyRepository = companyRepository;
		this.customerRepository = customerRepository;
		this.couponRepository = couponRepository;
		this.userRepository = userRepository;
	}

	@PostConstruct
	public void createByDef() {
		Optional<User> optUser = userRepository.findById((long) 1);
		if (!optUser.isPresent()) {
			User user = new User();
			user.setId(1);
			Admin admin = new Admin();
			admin.setEmail("admin");
			admin.setPassword("123456");
			admin.setId(1);
			admin.setUser(user);
			adminRepository.save(admin);
			user.setEmail("admin");
			user.setPassword("123456");
			user.setClient(admin);
			userRepository.save(user);
		}
	}

	@Override
	public void setId(long clientId) {
		this.adminId = clientId;
	}

	@Override
	public long getClientId() {
		return this.adminId;
	}

	@Override
	public long getRole() {
		return -1;
	}

	@Override
	public Admin findByEmail(String email) throws AdminDoesntExistsException {
		Admin adminByEmail = adminRepository.findByEmail(email);
		if (adminByEmail == null) {
			throw new AdminDoesntExistsException(String.format("Admin with email: %s does not exists.", email));
		}
		return adminByEmail;
	}

	@Override
	public Admin findById(long id) throws AdminDoesntExistsException {
		Optional<Admin> adminByPassword = adminRepository.findById(id);
		if (!adminByPassword.isPresent()) {
			throw new AdminDoesntExistsException(String.format("Admin with id :%d does not exists.", id));
		}
		return adminByPassword.get();
	}

	@Override
	public Company findCompanyById(long id) throws CompanyDoesntExistsException {
		Optional<Company> company = companyRepository.findById(id);
		if (!company.isPresent()) {
			throw new CompanyDoesntExistsException(String.format("Company with id %d does not exists.", id));
		}
		return company.get();
	}

	@Override
	public Customer findCustomerById(long id) throws CustomerDoesntExistsException {
		Optional<Customer> customer = customerRepository.findById(id);
		if (!customer.isPresent()) {
			throw new CustomerDoesntExistsException(String.format("Customer with id %d does not exists.", id));
		}
		return customer.get();
	}

	@Override
	public Coupon findCouponById(long id) throws CouponDoesntExistsException {
		Optional<Coupon> coupon = couponRepository.findById(id);
		if (!coupon.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", id));
		}
		return coupon.get();
	}

	@Override
	public List<Company> findAllCompanies() {
		return companyRepository.findAll();
	}

	@Override
	public List<Customer> findAllCustomers() {
		return customerRepository.findAll();
	}

	@Override
	public List<Coupon> findAllCoupons() {
		return couponRepository.findAll();
	}

	@Override
	public void deleteCompanyById(long id) throws CompanyDoesntExistsException {
		boolean companyFound = false;
		for (Company company : companyRepository.findAll()) {
			if (company.getId() == id) {
				companyFound = true;
				for (User user : userRepository.findAll()) {
					if (user.getClient() instanceof Company) {
						if (user.getClient().getId() == id) {
							userRepository.deleteById(user.getId());
							companyRepository.deleteById(id);
						}
					}
				}
			}
		}
		if (!companyFound) {
			throw new CompanyDoesntExistsException(String.format("Company with id %d does not exists.", id));
		}
	}

	@Override
	public void deleteCustomerById(long id) throws CustomerDoesntExistsException {
		boolean customerFound = false;
		for (Customer customer : customerRepository.findAll()) {
			if (customer.getId() == id) {
				customerFound = true;
				for (User user : userRepository.findAll()) {
					if (user.getClient() instanceof Customer) {
						if (user.getClient().getId() == id) {
							userRepository.deleteById(user.getId());
							customerRepository.deleteById(id);
						}
					}
				}
			}
		}
		if (!customerFound) {
			throw new CustomerDoesntExistsException("Customer with id " + id + " does not exists.");
		}
	}

	@Override
	public void deleteCouponById(long id) throws CouponDoesntExistsException {
		boolean couponDeleted = false;
		for (Coupon coupon : couponRepository.findAll()) {
			if (coupon.getId() == id) {
				for (Customer customer : customerRepository.findAll()) {
					for (int i = 0; i < customer.getCoupons().size(); i++) {
						if (customer.getCoupons().get(i).getId() == id) {
							customer.getCoupons().remove(i);
							customerRepository.save(customer);
						}
					}
				}
				couponRepository.deleteById(id);
				couponDeleted = true;
			}
		}
		if (!couponDeleted) {
			throw new CouponDoesntExistsException("Coupon with id :2 does not exists.");
		}
	}

	@Override
	public Company createCompany(Company company) throws CannotCreateException, CompanyDoesntExistsException {
		if (company != null) {
			for (User us : userRepository.findAll()) {
				System.out.println(us.getEmail());
				System.out.println(company.getEmail());
				if (company.getEmail().equals(us.getEmail())) {
					throw new CannotCreateException(
							String.format("Cannot add Comapny , email : %s already exists.", company.getEmail()));
				}
			}
			User user = User.empty();
			user.setClient(company);
			user.setEmail(company.getEmail());
			user.setPassword(company.getPassword());
			user.setId(0);

			company.setUser(user);
			company.setId(0);

			return companyRepository.save(company);
		}
		throw new CompanyDoesntExistsException("Cannot create an empty company, please enter company details.");
	}

	@Override
	public Customer createCustomer(Customer customer)
			throws CustomerAlreadyExists, CustomerDoesntExistsException, CannotUpdateException, CannotCreateException {
		if (customer != null) {
			List<User> findAllusers = userRepository.findAll();
			for (User us : findAllusers) {
				if (customer.getEmail().equals(us.getEmail())) {
					throw new CannotCreateException(
							String.format("Cannot create user, email : %s already exists.", customer.getEmail()));
				}
			}
			User user = User.empty();
			user.setClient(customer);
			user.setEmail(customer.getEmail());
			user.setPassword(customer.getPassword());
			user.setId(0);

			customer.setUser(user);
			customer.setId(0);
			return customerRepository.save(customer);
		}
		throw new CustomerDoesntExistsException("Cannot create an empty customer, please enter customer details.");
	}

	@Override
	public Coupon createCoupon(Coupon coupon, Long companyId)
			throws CouponDoesntExistsException, CannotCreateException, CompanyDoesntExistsException {
		if (coupon != null || companyId == 0) {
			System.out.println(coupon.getTitle());
			for (Coupon coup : couponRepository.findAll()) {
				if (coupon.getId() == coup.getId()) {
					throw new CannotCreateException(String.format("Coupon with id:%d already exists.", coupon.getId()));
				} else if (coupon.getTitle().equals(coup.getTitle())) {
					throw new CannotCreateException(String
							.format("Cannot create coupon with title: %s , coupon already exists.", coupon.getTitle()));
				}
			}
			Optional<Company> ById = companyRepository.findById(companyId);
			if (!ById.isPresent()) {

				throw new CompanyDoesntExistsException(
						String.format("Cannot create Coupon, there is no company with id : %d", companyId));
			}
			Company company = ById.get();
			coupon.setCompanyName(company.getName());
			coupon.setId(0);
			coupon.setCompany(company);
			return couponRepository.save(coupon);
		}
		throw new CouponDoesntExistsException(
				"Cannot create an empty coupon, please enter coupon details and company id !");
	}

	@Override
	public Company findCompanyByEmail(String email) throws CompanyDoesntExistsException {
		Company company = companyRepository.findByEmail(email);
		if (company == Company.empty()) {
			throw new CompanyDoesntExistsException(String.format("Company with email :%s does not exists.", email));
		}
		return company;
	}

	@Override
	public Customer findCustomerByEmail(String email) throws CustomerDoesntExistsException {
		Customer customer = customerRepository.findByEmail(email);
		if (customer == Customer.empty()) {
			throw new CustomerDoesntExistsException(String.format("Customer with email :%s does not exists.", email));
		}
		return customer;
	}

	@Override
	public List<Coupon> findExpiredCoupons() {
		return couponRepository.findExpiredCoupons();
	}

	@Override
	public Admin updateEmail(String email) throws CannotUpdateException {
		Admin adminById = adminRepository.findById(adminId).get();
		User user = adminById.getUser();
		for (User us : userRepository.findAll()) {
			if (email == us.getEmail()) {
				if (adminRepository.findByEmail(email).getId() == adminId) {
					continue;
				}
				throw new CannotUpdateException(String.format("Cannot update,email : %s already exists.", email));
			}
		}

		adminRepository.updateEmail(user.getId(), email);

		adminById.setEmail(email);
		return adminRepository.save(adminById);
	}

	@Override
	public Admin updatePassword(String password) {
		Admin adminById = adminRepository.findById(adminId).get();
		User user = adminById.getUser();

		adminRepository.updatePassword(user.getId(), password);

		adminById.setPassword(password);
		return adminRepository.save(adminById);
	}

	@Override
	public Company updateCompany(long companyId, Company company)
			throws CompanyDoesntExistsException, CannotUpdateException {
		updateCompanyEmail(companyId, company.getEmail());
		updateCompanyName(companyId, company.getName());
		Company updatedCom = updateCompanyPassword(companyId, company.getPassword());

		return updatedCom;
	}

	@Override
	public Customer updateCustomer(long customerId, Customer customer)
			throws CustomerDoesntExistsException, CannotUpdateException {
		updateCustomerFirstNameLastName(customerId, customer.getFirstName(), customer.getLastName());
		updateCustomerEmail(customerId, customer.getEmail());
		return updateCustomerPassword(customerId, customer.getPassword());
	}

	@Override
	public Company updateCompanyEmail(long companyId, String email)
			throws CompanyDoesntExistsException, CannotUpdateException {
		Optional<Company> companyById = companyRepository.findById(companyId);
		if (!companyById.isPresent()) {
			throw new CompanyDoesntExistsException(String.format("Company does not exists.", companyId));
		} else {
			for (User us : userRepository.findAll()) {
				if (email.equals(us.getEmail())) {
					if (companyRepository.findByEmail(email).getId() == companyId) {
						continue;
					}
					throw new CannotUpdateException(String.format("Cannot update,email : %s already exists.", email));
				}
			}
			Company company = companyById.get();
			User user = company.getUser();
			companyRepository.updateUserEmail(user.getId(), email);

			company.setEmail(email);
			return companyRepository.save(company);
		}
	}

	@Override
	public Company updateCompanyPassword(long companyId, String password) throws CompanyDoesntExistsException {
		Optional<Company> companyById = companyRepository.findById(companyId);
		if (!companyById.isPresent()) {
			throw new CompanyDoesntExistsException(String.format("Company with id %d does not exists.", companyId));
		} else {
			Company company = companyById.get();
			User user = company.getUser();
			companyRepository.updateUserPassword(user.getId(), password);

			company.setPassword(password);
			return companyRepository.save(company);
		}
	}

	@Override
	public Company updateCompanyName(long companyId, String name) throws CompanyDoesntExistsException {
		Optional<Company> companyById = companyRepository.findById(companyId);
		if (!companyById.isPresent()) {
			throw new CompanyDoesntExistsException(String.format("Company with id %d does not exists.", companyId));
		} else {
			Company company = companyById.get();
			company.setName(name);
			for (Coupon coupon : company.getCoupons()) {
				coupon.setCompanyName(name);
			}
			return companyRepository.save(company);
		}
	}

	@Override
	public Customer updateCustomerEmail(long customerId, String email)
			throws CustomerDoesntExistsException, CannotUpdateException {
		Optional<Customer> customerById = customerRepository.findById(customerId);
		if (!customerById.isPresent()) {
			throw new CustomerDoesntExistsException(String.format("Customer with id %d does not exists.", customerId));
		} else {
			for (User us : userRepository.findAll()) {
				if (email.equals(us.getEmail())) {
					if (customerRepository.findByEmail(email).getId() == customerId) {
						continue;
					}
					throw new CannotUpdateException(String.format("Cannot update,email : %s already exists.", email));
				}
			}
			Customer customer = customerById.get();
			User user = customer.getUser();
			customerRepository.updateUserEmail(user.getId(), email);

			customer.setEmail(email);
			return customerRepository.save(customer);
		}
	}

	@Override
	public Customer updateCustomerFirstNameLastName(long customerId, String firstName, String lastName)
			throws CustomerDoesntExistsException {
		Optional<Customer> customerById = customerRepository.findById(customerId);
		if (!customerById.isPresent()) {
			throw new CustomerDoesntExistsException(String.format("Customer with id %d does not exists.", customerId));
		} else {
			Customer customer = customerById.get();
			customer.setFirstName(firstName);
			customer.setLastName(lastName);
			return customerRepository.save(customer);
		}
	}

	@Override
	public Customer updateCustomerPassword(long customerId, String password) throws CustomerDoesntExistsException {
		Optional<Customer> customerById = customerRepository.findById(customerId);
		if (!customerById.isPresent()) {
			throw new CustomerDoesntExistsException(String.format("Customer with id %d does not exists.", customerId));
		} else {
			Customer customer = customerById.get();
			User user = customer.getUser();
			customerRepository.updateUserPassword(user.getId(), password);

			customer.setPassword(password);
			return customerRepository.save(customer);
		}
	}

	@Override
	public Coupon updateCouponAmount(long couponId, int amount)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			Coupon coupon = couponById.get();
			if (amount >= 0) {
				coupon.setAmount(amount);
			} else {
				throw new CannotUpdateException(String.format(
						"Illegal amount : %d , the amount of the coupon must be equal or higher then 0.", amount));
			}
			return couponRepository.save(coupon);
		}
	}

	@Override
	public Coupon updateCouponCategory(long couponId, int category) throws CouponDoesntExistsException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			Coupon coupon = couponById.get();
			coupon.setCategory(category);
			return couponRepository.save(coupon);
		}
	}

	@Override
	public Coupon updateCoupon(long couponId, Coupon coupon) throws CouponDoesntExistsException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			coupon.setId(couponId);
			coupon.setCompany(couponById.get().getCompany());
			return couponRepository.save(coupon);
		}
	}

	@Override
	public Coupon updateCouponDescription(long couponId, String description) throws CouponDoesntExistsException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			Coupon coupon = couponById.get();
			coupon.setDescription(description);
			return couponRepository.save(coupon);
		}
	}

	@Override
	public Coupon updateCouponImage(long couponId, String imageURL) throws CouponDoesntExistsException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			Coupon coupon = couponById.get();
			coupon.setImageURL(imageURL);
			return couponRepository.save(coupon);
		}
	}

	@Override
	public Coupon updateCouponPrice(long couponId, double price)
			throws CouponDoesntExistsException, CannotUpdateException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			Coupon coupon = couponById.get();
			if (price > 0) {
				coupon.setPrice(price);
			} else {
				throw new CannotUpdateException(
						String.format("Illegal price : %d , the price of the coupon must be higher then 0 , ", price));
			}
			return couponRepository.save(coupon);
		}
	}

	@Override
	public Coupon updateCouponTitle(long couponId, String title) throws CouponDoesntExistsException {
		Optional<Coupon> couponById = couponRepository.findById(couponId);
		if (!couponById.isPresent()) {
			throw new CouponDoesntExistsException(String.format("Coupon with id %d does not exists.", couponId));
		} else {
			Coupon coupon = couponById.get();
			coupon.setTitle(title);
			return couponRepository.save(coupon);
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
			if (endDate.isAfter(LocalDate.now())) {
				coupon.setEndDate(endDate);
				return couponRepository.save(coupon);
			}
			LocalDate localDate = LocalDate.now();
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern(" dd/LLLL/yyyy ");
			throw new CannotUpdateException(
					String.format("Cannot update coupon with id: %d , the end date must be after %s.", couponId,
							localDate.format(formatter)));
		}
	}

	public Admin updateAdmin(Admin admin) throws CannotUpdateException {
		updateEmail(admin.getEmail());
		return updatePassword(admin.getPassword());
	}

	public Admin getAdmin() {
		return adminRepository.findById(adminId).get();
	}

}
