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
@Table(name = "LANGUAGE", schema = "dbo", catalog = "Automation")
public class Language implements java.io.Serializable {

	private BigDecimal languageId;
	private Currency currency;
	private String languageSymbol;
	private String languageName;
	private String languageBrowserAcceptLangauge;
	private Set<BrandLanguage> brandLanguages = new HashSet<BrandLanguage>(0);

	public Language() {
	}

	public Language(BigDecimal languageId, Currency currency) {
		this.languageId = languageId;
		this.currency = currency;
	}

	public Language(BigDecimal languageId, Currency currency, String languageSymbol, String languageName, String languageBrowserAcceptLangauge,
			Set<BrandLanguage> brandLanguages) {
		this.languageId = languageId;
		this.currency = currency;
		this.languageSymbol = languageSymbol;
		this.languageName = languageName;
		this.languageBrowserAcceptLangauge = languageBrowserAcceptLangauge;
		this.brandLanguages = brandLanguages;
	}

	@Id
	@Column(name = "Language_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getLanguageId() {
		return this.languageId;
	}

	public void setLanguageId(BigDecimal languageId) {
		this.languageId = languageId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Currency_ID", nullable = false)
	public Currency getCurrency() {
		return this.currency;
	}

	public void setCurrency(Currency currency) {
		this.currency = currency;
	}

	@Column(name = "Language_Symbol", length = 60)
	public String getLanguageSymbol() {
		return this.languageSymbol;
	}

	public void setLanguageSymbol(String languageSymbol) {
		this.languageSymbol = languageSymbol;
	}

	@Column(name = "Language_Name", length = 60)
	public String getLanguageName() {
		return this.languageName;
	}

	public void setLanguageName(String languageName) {
		this.languageName = languageName;
	}

	@Column(name = "Language_Browser_Accept_Langauge", length = 60)
	public String getLanguageBrowserAcceptLangauge() {
		return this.languageBrowserAcceptLangauge;
	}

	public void setLanguageBrowserAcceptLangauge(String languageBrowserAcceptLangauge) {
		this.languageBrowserAcceptLangauge = languageBrowserAcceptLangauge;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "language")
	public Set<BrandLanguage> getBrandLanguages() {
		return this.brandLanguages;
	}

	public void setBrandLanguages(Set<BrandLanguage> brandLanguages) {
		this.brandLanguages = brandLanguages;
	}

}
