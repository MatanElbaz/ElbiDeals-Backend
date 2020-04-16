package com.jb.jpa.data.db;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.jb.jpa.model.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	
	
	
	

	Admin findByEmail(String email);

	@Modifying
	@Transactional
	@Query("update User as u set u.password=:password where u.id =:id ")
	void updatePassword(long id, String password);

	@Modifying
	@Transactional
	@Query("update User as u set u.email=:email where u.id =:id ")
	void updateEmail(long id, String email);
}
