package com.wh.auto.hibernate;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "USER", schema = "dbo", catalog = "Automation")
public class User implements java.io.Serializable {

	private BigDecimal userId;
	private String userFirstName;
	private String userLastName;
	private String userEmailAddress;
	private String userMobileAddress;
	private Set<Notification> notifications = new HashSet<Notification>(0);

	public User() {
	}

	public User(BigDecimal userId) {
		this.userId = userId;
	}

	public User(BigDecimal userId, String userFirstName, String userLastName, String userEmailAddress, String userMobileAddress,
			Set<Notification> notifications) {
		this.userId = userId;
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userEmailAddress = userEmailAddress;
		this.userMobileAddress = userMobileAddress;
		this.notifications = notifications;
	}

	@Id
	@Column(name = "User_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getUserId() {
		return this.userId;
	}

	public void setUserId(BigDecimal userId) {
		this.userId = userId;
	}

	@Column(name = "User_First_Name", length = 60)
	public String getUserFirstName() {
		return this.userFirstName;
	}

	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}

	@Column(name = "User_Last_Name", length = 60)
	public String getUserLastName() {
		return this.userLastName;
	}

	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}

	@Column(name = "User_Email_Address", length = 60)
	public String getUserEmailAddress() {
		return this.userEmailAddress;
	}

	public void setUserEmailAddress(String userEmailAddress) {
		this.userEmailAddress = userEmailAddress;
	}

	@Column(name = "User_Mobile_Address", length = 60)
	public String getUserMobileAddress() {
		return this.userMobileAddress;
	}

	public void setUserMobileAddress(String userMobileAddress) {
		this.userMobileAddress = userMobileAddress;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	public Set<Notification> getNotifications() {
		return this.notifications;
	}

	public void setNotifications(Set<Notification> notifications) {
		this.notifications = notifications;
	}

}
