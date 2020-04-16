package com.jb.jpa.service.tasks;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.jb.jpa.rest.ClientSession;

@Component
@EnableScheduling
class ClientSessionCleanerTask implements Runnable {

	private static final long SLEEP_TIME = 1800000;
	public Map<String, ClientSession> tokenMap;

	@Autowired
	public ClientSessionCleanerTask(@Qualifier("tokens") Map<String, ClientSession> tokenMap) {
		this.tokenMap = tokenMap;
	}

	@Override
	@PostConstruct
	@Scheduled(fixedRate = SLEEP_TIME)
	public void run() {
		Collection<ClientSession> values = tokenMap.values();
		Iterator<ClientSession> iterator = values.iterator();

		while (iterator.hasNext()) {
			ClientSession clientSession = iterator.next();
			if (System.currentTimeMillis() - clientSession.getLastAccessedMillis() > SLEEP_TIME) {
				iterator.remove();
			}
		}
	}
}
