package com.who.manager.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

import com.who.manager.domain.enumeration.Enums;

/**
 * A MongoTest.
 */

@Document(collection = "mongo_test")
public class MongoTest implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("name")
    private String name;

    @NotNull
    @Field("val")
    private Integer val;

    @NotNull
    @Field("date")
    private LocalDate date;

    @Field("enums")
    private Enums enums;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public MongoTest name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getVal() {
        return val;
    }

    public MongoTest val(Integer val) {
        this.val = val;
        return this;
    }

    public void setVal(Integer val) {
        this.val = val;
    }

    public LocalDate getDate() {
        return date;
    }

    public MongoTest date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Enums getEnums() {
        return enums;
    }

    public MongoTest enums(Enums enums) {
        this.enums = enums;
        return this;
    }

    public void setEnums(Enums enums) {
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
        MongoTest mongoTest = (MongoTest) o;
        if (mongoTest.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, mongoTest.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "MongoTest{" +
            "id=" + id +
            ", name='" + name + "'" +
            ", val='" + val + "'" +
            ", date='" + date + "'" +
            ", enums='" + enums + "'" +
            '}';
    }
}
