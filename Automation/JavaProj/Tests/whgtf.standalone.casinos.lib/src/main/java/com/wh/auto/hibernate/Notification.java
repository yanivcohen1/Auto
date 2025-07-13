package com.wh.auto.hibernate;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "NOTIFICATION", schema = "dbo", catalog = "Automation")
public class Notification implements java.io.Serializable {

	private BigDecimal notificationId;
	private User user;
	private Boolean notificationSendSms;
	private Boolean notificationSendMail;
	private Long groupNumber;
	private Set<BrandLanguage> brandLanguages = new HashSet<BrandLanguage>(0);

	public Notification() {
	}

	public Notification(BigDecimal notificationId, User user) {
		this.notificationId = notificationId;
		this.user = user;
	}

	public Notification(BigDecimal notificationId, User user, Boolean notificationSendSms, Boolean notificationSendMail, Long groupNumber,
			Set<BrandLanguage> brandLanguages) {
		this.notificationId = notificationId;
		this.user = user;
		this.notificationSendSms = notificationSendSms;
		this.notificationSendMail = notificationSendMail;
		this.groupNumber = groupNumber;
		this.brandLanguages = brandLanguages;
	}

	@Id
	@Column(name = "Notification_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getNotificationId() {
		return this.notificationId;
	}

	public void setNotificationId(BigDecimal notificationId) {
		this.notificationId = notificationId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "User_ID", nullable = false)
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Column(name = "Notification_Send_SMS")
	public Boolean getNotificationSendSms() {
		return this.notificationSendSms;
	}

	public void setNotificationSendSms(Boolean notificationSendSms) {
		this.notificationSendSms = notificationSendSms;
	}

	@Column(name = "Notification_Send_Mail")
	public Boolean getNotificationSendMail() {
		return this.notificationSendMail;
	}

	public void setNotificationSendMail(Boolean notificationSendMail) {
		this.notificationSendMail = notificationSendMail;
	}

	@Column(name = "Group_Number", precision = 18, scale = 0)
	public Long getGroupNumber() {
		return this.groupNumber;
	}

	public void setGroupNumber(Long groupNumber) {
		this.groupNumber = groupNumber;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "notification")
	public Set<BrandLanguage> getBrandLanguages() {
		return this.brandLanguages;
	}

	public void setBrandLanguages(Set<BrandLanguage> brandLanguages) {
		this.brandLanguages = brandLanguages;
	}

}
