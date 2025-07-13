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
@Table(name = "CURRENCY", schema = "dbo", catalog = "Automation")
public class Currency implements java.io.Serializable {

	private BigDecimal currencyId;
	private String currencySymbol;
	private String currencyCode;
	private Set<Language> languages = new HashSet<Language>(0);
	private Set<BrandLanguage> brandLanguages = new HashSet<BrandLanguage>(0);

	public Currency() {
	}

	public Currency(BigDecimal currencyId) {
		this.currencyId = currencyId;
	}

	public Currency(BigDecimal currencyId, String currencySymbol, String currencyCode, Set<Language> languages, Set<BrandLanguage> brandLanguages) {
		this.currencyId = currencyId;
		this.currencySymbol = currencySymbol;
		this.currencyCode = currencyCode;
		this.languages = languages;
		this.brandLanguages = brandLanguages;
	}

	@Id
	@Column(name = "Currency_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getCurrencyId() {
		return this.currencyId;
	}

	public void setCurrencyId(BigDecimal currencyId) {
		this.currencyId = currencyId;
	}

	@Column(name = "Currency_Symbol", length = 60)
	public String getCurrencySymbol() {
		return this.currencySymbol;
	}

	public void setCurrencySymbol(String currencySymbol) {
		this.currencySymbol = currencySymbol;
	}

	@Column(name = "Currency_Code", length = 60)
	public String getCurrencyCode() {
		return this.currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "currency")
	public Set<Language> getLanguages() {
		return this.languages;
	}

	public void setLanguages(Set<Language> languages) {
		this.languages = languages;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "currency")
	public Set<BrandLanguage> getBrandLanguages() {
		return this.brandLanguages;
	}

	public void setBrandLanguages(Set<BrandLanguage> brandLanguages) {
		this.brandLanguages = brandLanguages;
	}

}
