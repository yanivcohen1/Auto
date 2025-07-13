/*package hello;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.core.query.Query;
import org.springframework.transaction.PlatformTransactionManager;



public abstract class ProductRepositoryImpl implements PersonRepository { //implements ProductRepositoryCustom {
    //@Autowired
    //private MongoTemplate mongoTemplate;
    //@PersistenceContext
    EntityManager entityManager;
    //private LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean;

    public List < Suite > findBySkuOnlyAvailablesCustom(String sku) {
        Criteria criteria = Criteria.where("sku").is(sku).
        		andOperator(Criteria.where("availability").is(1));
        return mongoTemplate.find(Query.query(criteria), Suite.class);
    }
    
    List<Suite> testSuite(){
    	CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Tests> select = builder.createQuery(Tests.class);
		Root<Tests> fromTests = select.from(Tests.class);
		Path<Suite> fromSuites = fromTests.get(Tests_.suites);
		Predicate equalsSuiteName = builder.equal(fromSuites.get(Suites_.suiteName), manualSuiteName);
		//Predicate equalsLastName = builder.equal(fromPerson.get(Person_.lastName), lastName);
		//select.where(builder.and(equalsFirstName, equalsLastName));
		select.where(equalsSuiteName);
		List<Suite> tests = getEntityManager().createQuery(select).getResultList();
    	Query query = entityManager.createQuery("Select o from Person o where o.totalCost > 1000");
        List<Suite> orders = query.getResultList();
		return orders;
    }
}*/