package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

import com.mycompany.myapp.domain.enumeration.Enm;

/**
 * A Tests.
 */
@Document(collection = "tests")
public class Tests implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private String id;

    @NotNull
    @Min(value = 3)
    @Field("num")
    private Integer num;

    @NotNull
    @Field("str")
    private String str;

    @Field("enm")
    private Enm enm;

    @Field("time")
    private ZonedDateTime time;

    // jhipster-needle-entity-add-field - Jhipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getNum() {
        return num;
    }

    public Tests num(Integer num) {
        this.num = num;
        return this;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getStr() {
        return str;
    }

    public Tests str(String str) {
        this.str = str;
        return this;
    }

    public void setStr(String str) {
        this.str = str;
    }

    public Enm getEnm() {
        return enm;
    }

    public Tests enm(Enm enm) {
        this.enm = enm;
        return this;
    }

    public void setEnm(Enm enm) {
        this.enm = enm;
    }

    public ZonedDateTime getTime() {
        return time;
    }

    public Tests time(ZonedDateTime time) {
        this.time = time;
        return this;
    }

    public void setTime(ZonedDateTime time) {
        this.time = time;
    }
    // jhipster-needle-entity-add-getters-setters - Jhipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Tests tests = (Tests) o;
        if (tests.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tests.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Tests{" +
            "id=" + getId() +
            ", num='" + getNum() + "'" +
            ", str='" + getStr() + "'" +
            ", enm='" + getEnm() + "'" +
            ", time='" + getTime() + "'" +
            "}";
    }
}
