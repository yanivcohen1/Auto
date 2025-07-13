package hello;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.eclipse.persistence.nosql.annotations.DataFormatType;
import org.eclipse.persistence.nosql.annotations.NoSql;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Suite.
 */
@Entity
@NoSql(dataFormat=DataFormatType.MAPPED)
public class Suite implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @NotNull
    @Column(name = "suite_name", nullable = false)
    private String suiteName;

    @NotNull
    @Column(name = "jenkins_url", nullable = false)
    private String jenkinsURL;

    @NotNull
    @Column(name = "xml_file_location", nullable = false)
    private String xmlFileLocation;

    //@OneToMany(mappedBy = "suite")
    @ElementCollection
    @JsonIgnore
    private Set<Tests> testss = new HashSet<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSuiteName() {
        return suiteName;
    }

    public void setSuiteName(String suiteName) {
        this.suiteName = suiteName;
    }

    public String getJenkinsURL() {
        return jenkinsURL;
    }

    public void setJenkinsURL(String jenkinsURL) {
        this.jenkinsURL = jenkinsURL;
    }

    public String getXmlFileLocation() {
        return xmlFileLocation;
    }

    public void setXmlFileLocation(String xmlFileLocation) {
        this.xmlFileLocation = xmlFileLocation;
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
                ", suiteName='" + suiteName + "'" +
                ", jenkinsURL='" + jenkinsURL + "'" +
                ", xmlFileLocation='" + xmlFileLocation + "'" +
                '}';
    }
}
