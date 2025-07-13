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
 * A Tests.
 */
@Entity
@NoSql(dataFormat=DataFormatType.MAPPED)
public class Tests implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @NotNull
    @Column(name = "test_name", nullable = false)
    private String testName;

    @NotNull
    @Column(name = "class_name", nullable = false)
    private String className;

    @Column(name = "parameter_name")
    private String parameterName;

    @Column(name = "parameter_value")
    private String parameterValue;

    //@ManyToOne
    //private Suite suite;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getParameterName() {
        return parameterName;
    }

    public void setParameterName(String parameterName) {
        this.parameterName = parameterName;
    }

    public String getParameterValue() {
        return parameterValue;
    }

    public void setParameterValue(String parameterValue) {
        this.parameterValue = parameterValue;
    }

   /* public Suite getSuite() {
        return suite;
    }

    public void setSuite(Suite suite) {
        this.suite = suite;
    }*/

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
                ", testName='" + testName + "'" +
                ", className='" + className + "'" +
                ", parameterName='" + parameterName + "'" +
                ", parameterValue='" + parameterValue + "'" +
                '}';
    }
}
