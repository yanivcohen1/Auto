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
@Table(name = "BRAND_LANGUAGE", schema = "dbo", catalog = "Automation")
public class BrandLanguage implements java.io.Serializable {

	private BigDecimal brandLanguageId;
	private Currency currency;
	private Brand brand;
	private Language language;
	private Notification notification;
	private String brandLanguageUrlTemplate;
	private Integer brandLanguagePriority;
	private BigDecimal groupNumber;
	private Set<Tool> tools = new HashSet<Tool>(0);

	public BrandLanguage() {
	}

	public BrandLanguage(BigDecimal brandLanguageId, Currency currency, Brand brand, Language language) {
		this.brandLanguageId = brandLanguageId;
		this.currency = currency;
		this.brand = brand;
		this.language = language;
	}

	public BrandLanguage(BigDecimal brandLanguageId, Currency currency, Brand brand, Language language, Notification notification,
			String brandLanguageUrlTemplate, Integer brandLanguagePriority, BigDecimal groupNumber, Set<Tool> tools) {
		this.brandLanguageId = brandLanguageId;
		this.currency = currency;
		this.brand = brand;
		this.language = language;
		this.notification = notification;
		this.brandLanguageUrlTemplate = brandLanguageUrlTemplate;
		this.brandLanguagePriority = brandLanguagePriority;
		this.groupNumber = groupNumber;
		this.tools = tools;
	}

	@Id
	@Column(name = "Brand_Language_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getBrandLanguageId() {
		return this.brandLanguageId;
	}

	public void setBrandLanguageId(BigDecimal brandLanguageId) {
		this.brandLanguageId = brandLanguageId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Currency_ID", nullable = false)
	public Currency getCurrency() {
		return this.currency;
	}

	public void setCurrency(Currency currency) {
		this.currency = currency;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Brand_ID", nullable = false)
	public Brand getBrand() {
		return this.brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Language_ID", nullable = false)
	public Language getLanguage() {
		return this.language;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Notification_ID")
	public Notification getNotification() {
		return this.notification;
	}

	public void setNotification(Notification notification) {
		this.notification = notification;
	}

	@Column(name = "Brand_Language_URL_Template", length = 60)
	public String getBrandLanguageUrlTemplate() {
		return this.brandLanguageUrlTemplate;
	}

	public void setBrandLanguageUrlTemplate(String brandLanguageUrlTemplate) {
		this.brandLanguageUrlTemplate = brandLanguageUrlTemplate;
	}

	@Column(name = "Brand_Language_Priority")
	public Integer getBrandLanguagePriority() {
		return this.brandLanguagePriority;
	}

	public void setBrandLanguagePriority(Integer brandLanguagePriority) {
		this.brandLanguagePriority = brandLanguagePriority;
	}

	@Column(name = "Group_Number", precision = 20, scale = 0)
	public BigDecimal getGroupNumber() {
		return this.groupNumber;
	}

	public void setGroupNumber(BigDecimal groupNumber) {
		this.groupNumber = groupNumber;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "brandLanguage")
	public Set<Tool> getTools() {
		return this.tools;
	}

	public void setTools(Set<Tool> tools) {
		this.tools = tools;
	}

}
