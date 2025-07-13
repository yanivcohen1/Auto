package com.who.auto.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Tests.
 */
@Entity
@Table(name = "TESTS")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName="tests")
public class Tests implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "test_name", nullable = false)
    private String test_name;

    @NotNull
    @Column(name = "class_name", nullable = false)
    private String class_name;

    @Column(name = "method_name")
    private String method_name;

    @Column(name = "parameter_name")
    private String parameter_name;

    @Column(name = "parameter_value")
    private String parameter_value;

    @ManyToOne
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

    public void setTest_name(String test_name) {
        this.test_name = test_name;
    }

    public String getClass_name() {
        return class_name;
    }

    public void setClass_name(String class_name) {
        this.class_name = class_name;
    }

    public String getmethod_name() {
        return method_name;
    }

    public void setmethod_name(String method_name) {
        this.method_name = method_name;
    }

    public String getParameter_name() {
        return parameter_name;
    }

    public void setParameter_name(String parameter_name) {
        this.parameter_name = parameter_name;
    }

    public String getParameter_value() {
        return parameter_value;
    }

    public void setParameter_value(String parameter_value) {
        this.parameter_value = parameter_value;
    }

    public Suite getSuite() {
        return suite;
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

        if ( ! Objects.equals(id, tests.id)) return false;

        return true;
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
