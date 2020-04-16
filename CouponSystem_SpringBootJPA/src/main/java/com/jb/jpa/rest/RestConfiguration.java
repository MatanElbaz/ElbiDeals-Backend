package com.jb.jpa.rest;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RestConfiguration {
	
	@Bean(name = "tokens")
	public Map<String, ClientSession> tokenMap() {
		return new HashMap<>();
	}
}
