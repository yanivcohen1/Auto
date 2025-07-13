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
 * A Suite.
 */
@Entity
@Table(name = "SUITE")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName="suite")
public class Suite implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    private Set<Tests> testss = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSuite_name() {
        return suite_name;
    }

    public void setSuite_name(String suite_name) {
        this.suite_name = suite_name;
    }

    public String getXml_file_location() {
        return xml_file_location;
    }

    public void setXml_file_location(String xml_file_location) {
        this.xml_file_location = xml_file_location;
    }

    public String getJenkins_url() {
        return jenkins_url;
    }

    public void setJenkins_url(String jenkins_url) {
        this.jenkins_url = jenkins_url;
    }

    public Set<Tests> getTestss() {
        return testss;
    }

    public void setTestss(Set<Tests> testss) {
        this.testss = testss;
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

        if ( ! Objects.equals(id, suite.id)) return false;

        return true;
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
