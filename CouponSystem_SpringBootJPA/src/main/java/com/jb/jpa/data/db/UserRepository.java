package com.jb.jpa.data.db;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jb.jpa.model.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	

	User findByEmailAndPassword(String email, String password);

	@Query("select u from User as u")
	List<User> getAllUsers();

}
