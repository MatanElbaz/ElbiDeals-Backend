package com.jb.jpa.rest;

import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.jb.jpa.service.AbsService;

@Component
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class ClientSession {

	private AbsService absService;
	private long lastAccessedMillis;

	public ClientSession() {

	}

	public ClientSession(AbsService absService) {
		this.absService = absService;
	}

	public long getLastAccessedMillis() {
		return lastAccessedMillis;
	}

	public void accessed() {
		this.lastAccessedMillis = System.currentTimeMillis();
	}

	public AbsService getAbsService() {
		return absService;
	}

	public void setAbsService(AbsService absService) {
		this.absService = absService;
	}

}
