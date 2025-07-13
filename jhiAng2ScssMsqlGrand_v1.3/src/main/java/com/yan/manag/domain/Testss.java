package com.yan.manag.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import com.yan.manag.domain.enumeration.Enums;

/**
 * A Testss.
 */
//@Entity
//@Table(name = "testss")
//@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "testss")
public class Testss implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "val", nullable = false)
    private Integer val;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "enums", nullable = false)
    private Enums enums;

    @NotNull
    @Column(name = "dates", nullable = false)
    private LocalDate dates;

    private List<Step> step;
    
    @DBRef
    private List<Senario> senario;
    
    public List<Senario> getSenario() {
		return senario;
	}

	public void setSenario(List<Senario> senario) {
		this.senario = senario;
	}

	public List<Step> getStep() {
		return step;
	}

	public void setStep(List<Step> step) {
		this.step = step;
	}

	// jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Testss name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getVal() {
        return val;
    }

    public Testss val(Integer val) {
        this.val = val;
        return this;
    }

    public void setVal(Integer val) {
        this.val = val;
    }

    public Enums getEnums() {
        return enums;
    }

    public Testss enums(Enums enums) {
        this.enums = enums;
        return this;
    }

    public void setEnums(Enums enums) {
        this.enums = enums;
    }

    public LocalDate getDates() {
        return dates;
    }

    public Testss dates(LocalDate dates) {
        this.dates = dates;
        return this;
    }

    public void setDates(LocalDate dates) {
        this.dates = dates;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Testss testss = (Testss) o;
        if (testss.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), testss.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Testss{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", val='" + getVal() + "'" +
            ", enums='" + getEnums() + "'" +
            ", dates='" + getDates() + "'" +
            "}";
    }
}
