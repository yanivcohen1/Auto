package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A AA.
 */
@Entity
@Table(name = "aa")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "aa")
public class AA implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "aa_name", nullable = false)
    private String aaName;

    @NotNull
    @Column(name = "value", nullable = false)
    private Integer value;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAaName() {
        return aaName;
    }

    public AA aaName(String aaName) {
        this.aaName = aaName;
        return this;
    }

    public void setAaName(String aaName) {
        this.aaName = aaName;
    }

    public Integer getValue() {
        return value;
    }

    public AA value(Integer value) {
        this.value = value;
        return this;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        AA aA = (AA) o;
        if (aA.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, aA.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "AA{" +
            "id=" + id +
            ", aaName='" + aaName + "'" +
            ", value='" + value + "'" +
            '}';
    }
}
