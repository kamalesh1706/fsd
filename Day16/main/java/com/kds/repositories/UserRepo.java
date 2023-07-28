package com.kds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kds.models.User;
public interface UserRepo extends JpaRepository<User,Integer>{
//	@Query('select * from user where email=:email',nativeQuery=true)
     User findByEmail(String email);
//	public User findByEmail(String email)
}
