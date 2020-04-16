package com.jb.jpa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.jb.jpa.data.db.UserRepository;
import com.jb.jpa.model.Client;
import com.jb.jpa.model.entity.Company;
import com.jb.jpa.model.entity.Customer;
import com.jb.jpa.model.entity.User;
import com.jb.jpa.rest.ClientSession;
import com.jb.jpa.rest.ex.InvalidLoginException;

@Service
public class LoginSystem {
	private ApplicationContext context;
	private UserRepository userRepository;

	@Autowired
	public LoginSystem(ApplicationContext context, UserRepository userRepository) {
		this.context = context;
		this.userRepository = userRepository;
	}

	/**
	 * Create a client session with email and password of user from the system data
	 * base.
	 * 
	 * @param email    the email of the user.
	 * @param password the password of the user.
	 * @return ClientSession.
	 * @throws InvalidLoginException
	 */
	public ClientSession createClientSession(String email, String password) throws InvalidLoginException {
		User user = userRepository.findByEmailAndPassword(email, password);
		Client client;
		try {
			client = user.getClient();
		} catch (Exception e) {
			throw new InvalidLoginException(
					String.format("Invalid login with email or password"));
		}
		if (client instanceof Customer) {
			return getClientSession(CustomerServiceImpl.class, client.getId());
		} else if (client instanceof Company) {
			return getClientSession(CompanyServiceImpl.class, client.getId());
		} else {
			return getClientSession(AdminServiceImpl.class, client.getId());
		}
	}

	/**
	 * By insert the required class type and client Id , you will get a client
	 * session with permissions and access to user-appropriate functions.
	 * 
	 * @param requiredType The Service class.
	 * @param clientId     the client Id.
	 * @return Client session.
	 */
	private <T> ClientSession getClientSession(Class<T> requiredType, long clientId) {
		AbsService service = (AbsService) context.getBean(requiredType);
		ClientSession clientSession = context.getBean(ClientSession.class);
		service.setId(clientId);
		clientSession.setAbsService(service);
		clientSession.accessed();
		return clientSession;
	}

}
