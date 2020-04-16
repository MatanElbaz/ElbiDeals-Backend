package com.jb.jpa.data.db;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.jb.jpa.model.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

	Company findByEmail(String email);

	@Modifying
	@Transactional
	@Query("update User as u set u.password=:password where u.id =:id ")
	void updateUserPassword(long id, String password);

	@Modifying
	@Transactional
	@Query("update User as u set u.email=:email where u.id =:id ")
	void updateUserEmail(long id, String email);
}
