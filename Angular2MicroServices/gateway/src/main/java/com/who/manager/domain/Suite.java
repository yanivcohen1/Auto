package com.who.manager.domain;

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
 * A Suite.
 */
@Entity
@Table(name = "suite")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "suite")
public class Suite implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "suite_name", nullable = false)
    private String suite_name;

    @NotNull
    @Column(name = "xml_file_location", nullable = false)
    private String xml_file_location;

    @NotNull
    @Column(name = "jenkins_url", nullable = false)
    private String jenkins_url;

    @OneToMany(mappedBy = "suite")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Tests> tests = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSuite_name() {
        return suite_name;
    }

    public Suite suite_name(String suite_name) {
        this.suite_name = suite_name;
        return this;
    }

    public void setSuite_name(String suite_name) {
        this.suite_name = suite_name;
    }

    public String getXml_file_location() {
        return xml_file_location;
    }

    public Suite xml_file_location(String xml_file_location) {
        this.xml_file_location = xml_file_location;
        return this;
    }

    public void setXml_file_location(String xml_file_location) {
        this.xml_file_location = xml_file_location;
    }

    public String getJenkins_url() {
        return jenkins_url;
    }

    public Suite jenkins_url(String jenkins_url) {
        this.jenkins_url = jenkins_url;
        return this;
    }

    public void setJenkins_url(String jenkins_url) {
        this.jenkins_url = jenkins_url;
    }

    public Set<Tests> getTests() {
        return tests;
    }

    public Suite tests(Set<Tests> tests) {
        this.tests = tests;
        return this;
    }

    public Suite addTests(Tests tests) {
        this.tests.add(tests);
        tests.setSuite(this);
        return this;
    }

    public Suite removeTests(Tests tests) {
        this.tests.remove(tests);
        tests.setSuite(null);
        return this;
    }

    public void setTests(Set<Tests> tests) {
        this.tests = tests;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Suite suite = (Suite) o;
        if (suite.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, suite.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Suite{" +
            "id=" + id +
            ", suite_name='" + suite_name + "'" +
            ", xml_file_location='" + xml_file_location + "'" +
            ", jenkins_url='" + jenkins_url + "'" +
            '}';
    }
}
