package Test1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
//@ContextConfiguration(locations = {"Config/context.xml"})
public class Main {

    public static void main(String[] args) {
    	
    	ApplicationContext ctx = new ClassPathXmlApplicationContext("/context.xml");

		// Thread.sleep(20000);
    	Inject scheduler = ctx.getBean(Inject.class);
    	//test1 T1 = new test1();
    	//Inject Ij1 = T1.AWInject1();
    	System.out.println("Name:"+ scheduler.getName());
        //XmlBeanFactory beanFactory = new XmlBeanFactory(new ClassPathResource("context.xml"));
        //Inject demo = (Inject) beanFactory.getBean("mybean");
        //System.out.println(demo);
    }
}


class Inject {

    private String name;
    private int age;
    private String company;
    private String email;
    private String address;

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getName(){
    	return this.name;
    }

    @Override
    public String toString() {
        return String.format("Name: %s\n" +
                "Age: %d\n" +
                "Address: %s\n" +
                "Company: %s\n" +
                "E-mail: %s",
                this.name, this.age, this.address, this.company, this.email);
    }
}

class test1{
	@Autowired
	Inject AWInject;
	public Inject AWInject1(){
		return AWInject;
		
	}
}