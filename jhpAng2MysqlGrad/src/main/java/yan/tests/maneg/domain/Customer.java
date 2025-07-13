package yan.tests.maneg.domain;

import org.springframework.data.annotation.Id;


public class Customer {

    @Id
    public String id;

    public String name;
    public String description;

    public Customer() {}

    public Customer(String name, String description) {
        this.name = name;
        this.description = description;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%s, name='%s', description='%s']",
                id, name, description);
    }

}

