package com.who.manager.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Tests.
 */
@Entity
@Table(name = "tests")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "tests")
public class Tests implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "test_name", nullable = false)
    private String test_name;

    @Column(name = "class_name")
    private String class_name;

    @Column(name = "method_name")
    private String method_name;

    @Column(name = "parameter_name")
    private String parameter_name;

    @Column(name = "parameter_value")
    private String parameter_value;

    @ManyToOne(optional = false)
    @NotNull
    private Suite suite;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTest_name() {
        return test_name;
    }

    public Tests test_name(String test_name) {
        this.test_name = test_name;
        return this;
    }

    public void setTest_name(String test_name) {
        this.test_name = test_name;
    }

    public String getClass_name() {
        return class_name;
    }

    public Tests class_name(String class_name) {
        this.class_name = class_name;
        return this;
    }

    public void setClass_name(String class_name) {
        this.class_name = class_name;
    }

    public String getMethod_name() {
        return method_name;
    }

    public Tests method_name(String method_name) {
        this.method_name = method_name;
        return this;
    }

    public void setMethod_name(String method_name) {
        this.method_name = method_name;
    }

    public String getParameter_name() {
        return parameter_name;
    }

    public Tests parameter_name(String parameter_name) {
        this.parameter_name = parameter_name;
        return this;
    }

    public void setParameter_name(String parameter_name) {
        this.parameter_name = parameter_name;
    }

    public String getParameter_value() {
        return parameter_value;
    }

    public Tests parameter_value(String parameter_value) {
        this.parameter_value = parameter_value;
        return this;
    }

    public void setParameter_value(String parameter_value) {
        this.parameter_value = parameter_value;
    }

    public Suite getSuite() {
        return suite;
    }

    public Tests suite(Suite suite) {
        this.suite = suite;
        return this;
    }

    public void setSuite(Suite suite) {
        this.suite = suite;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Tests tests = (Tests) o;
        if (tests.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, tests.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Tests{" +
            "id=" + id +
            ", test_name='" + test_name + "'" +
            ", class_name='" + class_name + "'" +
            ", method_name='" + method_name + "'" +
            ", parameter_name='" + parameter_name + "'" +
            ", parameter_value='" + parameter_value + "'" +
            '}';
    }
}
