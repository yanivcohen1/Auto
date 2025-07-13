package com.who.manager.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

import com.who.manager.domain.enumeration.Y;

/**
 * A Test1.
 */
@Entity
@Table(name = "test1")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "test1")
public class Test1 implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "test", nullable = false)
    private String test;

    @Column(name = "value")
    private Integer value;

    @NotNull
    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Enumerated(EnumType.STRING)
    @Column(name = "enums")
    private Y enums;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTest() {
        return test;
    }

    public Test1 test(String test) {
        this.test = test;
        return this;
    }

    public void setTest(String test) {
        this.test = test;
    }

    public Integer getValue() {
        return value;
    }

    public Test1 value(Integer value) {
        this.value = value;
        return this;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public LocalDate getDate() {
        return date;
    }

    public Test1 date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Y getEnums() {
        return enums;
    }

    public Test1 enums(Y enums) {
        this.enums = enums;
        return this;
    }

    public void setEnums(Y enums) {
        this.enums = enums;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Test1 test1 = (Test1) o;
        if (test1.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, test1.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Test1{" +
            "id=" + id +
            ", test='" + test + "'" +
            ", value='" + value + "'" +
            ", date='" + date + "'" +
            ", enums='" + enums + "'" +
            '}';
    }
}
