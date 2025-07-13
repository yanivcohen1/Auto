package hello;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.eclipse.persistence.internal.nosql.adapters.mongo.MongoConnection;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
//import org.springframework.data.mongodb.core.query.Query;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;

import com.mongodb.DB;


@Component("SuiteRepository")
//@Transactional
public class SuiteRepositoryImpl implements SuiteRepository { //implements ProductRepositoryCustom {
	@PersistenceContext
	EntityManager entityManager = Persistence.createEntityManagerFactory("mongodb").createEntityManager();;
	EntityTransaction tx;
	String id;
    //@Autowired
    //private MongoTemplate mongoTemplate;
/*    @PersistenceContext
    EntityManager entityManager;
    //private LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean;

    public List < Suite > findBySkuOnlyAvailablesCustom(String sku) {
        Criteria criteria = Criteria.where("sku").is(sku).
        		andOperator(Criteria.where("availability").is(1));
        return mongoTemplate.find(Query.query(criteria), Suite.class);
    }
    
    public EntityManager getEntityManager() {
		return entityManager;
	}

    
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	public List<Suite> testSuite(){
    	CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Tests> select = builder.createQuery(Tests.class);
		Root<Tests> fromTests = select.from(Tests.class);
		Path<Suite> fromSuites = fromTests.get(Tests_.suites);
		Predicate equalsSuiteName = builder.equal(fromSuites.get(Suites_.suiteName), manualSuiteName);
		//Predicate equalsLastName = builder.equal(fromPerson.get(Person_.lastName), lastName);
		//select.where(builder.and(equalsFirstName, equalsLastName));
		select.where(equalsSuiteName);
		List<Suite> tests = getEntityManager().createQuery(select).getResultList();
    	Query query = entityManager.createQuery("Select o from Suite o where o.suiteName = 'suiteName1'");
        List<Suite> orders = query.getResultList();
		return orders;
    }*/

	public EntityManager getEntityManager() {
		return entityManager;
	}

	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = Persistence.createEntityManagerFactory("mongodb").createEntityManager();
	}

	@Override
	public void save(Suite suite) {
		//entityManager = Persistence.createEntityManagerFactory("mongodb").createEntityManager();
		//EntityTransaction tx = entityManager.getTransaction();
		//tx.begin();
		
		// given ...
        //DB db = ((MongoConnection)entityManager.unwrap(javax.resource.cci.Connection.class)).getDB();
        //db.dropDatabase();
		entityManager.persist(suite);
		id = suite.getId();
		//tx.commit();
	}

	@Override
	public Suite testSuite(String username) {
		//Suite suite = entityManager.find(Suite.class, id);
		//return suite;
		
		Suite orders = entityManager.createQuery("SELECT o FROM Suite o WHERE o.suiteName = 'suiteName1'", Suite.class)
		.getSingleResult();
		return orders;
	}
}