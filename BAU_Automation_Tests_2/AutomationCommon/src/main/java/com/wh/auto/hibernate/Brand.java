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
@Table(name = "BRAND", schema = "dbo", catalog = "Automation")
public class Brand implements java.io.Serializable {

	private BigDecimal brandId;
	private String brandName;
	private String brandSymbol;
	private String brandMainUrl;
	private Set<BrandsResult> brandsResults = new HashSet<BrandsResult>(0);
	private Set<BrandLanguage> brandLanguages = new HashSet<BrandLanguage>(0);

	public Brand() {
	}

	public Brand(BigDecimal brandId) {
		this.brandId = brandId;
	}

	public Brand(BigDecimal brandId, String brandName, String brandSymbol, String brandMainUrl, Set<BrandsResult> brandsResults,
			Set<BrandLanguage> brandLanguages) {
		this.brandId = brandId;
		this.brandName = brandName;
		this.brandSymbol = brandSymbol;
		this.brandMainUrl = brandMainUrl;
		this.brandsResults = brandsResults;
		this.brandLanguages = brandLanguages;
	}

	@Id
	@Column(name = "Brand_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getBrandId() {
		return this.brandId;
	}

	public void setBrandId(BigDecimal brandId) {
		this.brandId = brandId;
	}

	@Column(name = "Brand_Name", length = 60)
	public String getBrandName() {
		return this.brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	@Column(name = "Brand_Symbol", length = 60)
	public String getBrandSymbol() {
		return this.brandSymbol;
	}

	public void setBrandSymbol(String brandSymbol) {
		this.brandSymbol = brandSymbol;
	}

	@Column(name = "Brand_Main_URL", length = 60)
	public String getBrandMainUrl() {
		return this.brandMainUrl;
	}

	public void setBrandMainUrl(String brandMainUrl) {
		this.brandMainUrl = brandMainUrl;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "brand")
	public Set<BrandsResult> getBrandsResults() {
		return this.brandsResults;
	}

	public void setBrandsResults(Set<BrandsResult> brandsResults) {
		this.brandsResults = brandsResults;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "brand")
	public Set<BrandLanguage> getBrandLanguages() {
		return this.brandLanguages;
	}

	public void setBrandLanguages(Set<BrandLanguage> brandLanguages) {
		this.brandLanguages = brandLanguages;
	}

}
