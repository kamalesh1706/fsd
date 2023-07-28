package com.kds.models;
import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Class")
public class Class {
	
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int Id;
		
		private Date date;
		private Time time;
		private String instructor;
		public int getId() {
			return Id;
		}
		public void setId(int id) {
			Id = id;
		}
		public Date getDate() {
			return date;
		}
		public void setDate(Date date) {
			this.date = date;
		}
		public Time getTime() {
			return time;
		}
		public void setTime(Time time) {
			this.time = time;
		}
		public String getInstructor() {
			return instructor;
		}
		public void setInstructor(String instructor) {
			this.instructor = instructor;
		}
		
		
}
