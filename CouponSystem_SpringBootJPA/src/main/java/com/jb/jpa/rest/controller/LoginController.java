package com.jb.jpa.rest.controller;

import java.util.Map;
import java.util.Map.Entry;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jb.jpa.rest.ClientSession;
import com.jb.jpa.rest.ex.InvalidLoginException;
import com.jb.jpa.service.LoginSystem;

@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials="true")
@RestController
@RequestMapping("/api")
public class LoginController {

	private Map<String, ClientSession> tokensMap;

	private LoginSystem loginSystem;
	private LoginInfo loginInfo;

	private static int LENGTH_TOKEN = 15;

	@Autowired
	public LoginController(@Qualifier("tokens") Map<String, ClientSession> tokensMap, LoginSystem loginSystem, LoginInfo loginInfo) {
		this.tokensMap = tokensMap;
		this.loginSystem = loginSystem;
		this.loginInfo = loginInfo;
	}

	@PostMapping("/login")
	public ResponseEntity<LoginInfo> login(@RequestParam String email, @RequestParam String password)
			throws InvalidLoginException {
		ClientSession clientSession = loginSystem.createClientSession(email, password);

		if (clientSession == null) {
			throw new InvalidLoginException(
					String.format("Invalid login with email or password"));
		}
		String token = generateToken();
		clientSession.accessed();
		 
		for (Entry<String, ClientSession> entry : tokensMap.entrySet()) {
			if (entry.getValue().getAbsService().getClientId() == clientSession.getAbsService().getClientId()
					&& entry.getValue().getAbsService().getRole() == clientSession.getAbsService().getRole()) {
				loginInfo.setToken(entry.getKey());
				loginInfo.setType(entry.getValue().getAbsService().getRole());
				return ResponseEntity.ok(loginInfo);
			}
		}
		tokensMap.put(token, clientSession);
		loginInfo.setToken(token);
		loginInfo.setType(clientSession.getAbsService().getRole());
		return ResponseEntity.ok(loginInfo);
	}

	@PostMapping("/logout/{token}")
	public ResponseEntity<?> logout(@PathVariable String token) throws InvalidLoginException {
		
		for (Entry<String, ClientSession> entry : tokensMap.entrySet()) {
			if (entry.getKey().equals(token)) {
				tokensMap.remove(token);
				return ResponseEntity.status(HttpStatus.OK).body("{\"msg\":\"logg\"}");

			}
		}
		return ResponseEntity.status(HttpStatus.OK).body("Cannot find any client with token " + token);
	}

	private static String generateToken() {
		return UUID.randomUUID().toString().replaceAll("-", " ").substring(0, LENGTH_TOKEN);
	}

}
