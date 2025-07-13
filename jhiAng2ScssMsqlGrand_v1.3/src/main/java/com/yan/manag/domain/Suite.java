package com.yan.manag.domain;

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
    private String suiteName;

    @NotNull
    @Column(name = "jenkins_url", nullable = false)
    private String jenkinsUrl;

    @OneToMany(mappedBy = "suite")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Tests> tests = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSuiteName() {
        return suiteName;
    }

    public Suite suiteName(String suiteName) {
        this.suiteName = suiteName;
        return this;
    }

    public void setSuiteName(String suiteName) {
        this.suiteName = suiteName;
    }

    public String getJenkinsUrl() {
        return jenkinsUrl;
    }

    public Suite jenkinsUrl(String jenkinsUrl) {
        this.jenkinsUrl = jenkinsUrl;
        return this;
    }

    public void setJenkinsUrl(String jenkinsUrl) {
        this.jenkinsUrl = jenkinsUrl;
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
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Suite suite = (Suite) o;
        if (suite.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), suite.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Suite{" +
            "id=" + getId() +
            ", suiteName='" + getSuiteName() + "'" +
            ", jenkinsUrl='" + getJenkinsUrl() + "'" +
            "}";
    }
}
