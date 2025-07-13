package hello;
//package hello;
//
//import org.eclipse.persistence.internal.nosql.adapters.mongo.MongoConnection;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;
//import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
//import org.springframework.boot.autoconfigure.orm.jpa.EntityManagerFactoryBuilder;
//import org.springframework.boot.bind.RelaxedPropertyResolver;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.ApplicationContextException;
//import org.springframework.context.EnvironmentAware;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//import org.springframework.context.annotation.Profile;
//import org.springframework.core.env.Environment;
//import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.persistenceunit.DefaultPersistenceUnitManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//import org.springframework.util.StringUtils;
//
//import com.zaxxer.hikari.HikariConfig;
//import com.zaxxer.hikari.HikariDataSource;
//
//import javax.persistence.Persistence;
//import javax.sql.DataSource;
//
//import java.util.Arrays;
//
//@Configuration
//@EnableJpaRepositories("hello")
////@EnableJpaAuditing(auditorAwareRef = "springSecurityAuditorAware")
//@EnableTransactionManagement
//public class DatabaseConfiguration implements EnvironmentAware {
//
//    private final Logger log = LoggerFactory.getLogger(DatabaseConfiguration.class);
//
//    private RelaxedPropertyResolver dataSourcePropertyResolver;
//
//    //private RelaxedPropertyResolver liquiBasePropertyResolver;
//
//    private Environment env;
//
//    @Override
//    public void setEnvironment(Environment env) {
//        this.env = env;
//        this.dataSourcePropertyResolver = new RelaxedPropertyResolver(env, "spring.data.mongodb.");
//        //this.liquiBasePropertyResolver = new RelaxedPropertyResolver(env, "liquiBase.");
//    }
//
//    @Bean
//    @Primary
//    //@ConfigurationProperties(prefix="datasource.primary")
//    public DataSource primaryDataSource() {
//    	return Persistence.createEntityManagerFactory("mongodb").createEntityManager().get
//    			//((MongoConnection)em.unwrap(javax.resource.cci.Connection.class)).getDB().ge;
//        /*return DataSourceBuilder.create()
//        		.driverClassName("org.eclipse.persistence.nosql.adapters.mongo.MongoPlatform")
//        		.build();*/
//    }
//    
//    @Bean
//    public LocalContainerEntityManagerFactoryBean customerEntityManagerFactory(
//            EntityManagerFactoryBuilder builder) {
//    	return //(LocalContainerEntityManagerFactoryBean)Persistence.createEntityManagerFactory("mongodb");
//    			builder.
//    			//.dataSource(Persistence.createEntityManagerFactory("mongodb").getCriteriaBuilder())
//                //.packages(Customer.class)
//                //.persistenceUnit("customers")
//                //.build();*/
//    			//DefaultPersistenceUnitManager()
//    			//Persistence.createEntityManagerFactory("mongodb");
//        /*return builder
//                .dataSource(customerDataSource())
//                .packages(Customer.class)
//                .persistenceUnit("customers")
//                .build();*/
//        //Persistence.createEntityManagerFactory("mongodb").createEntityManager()
//    }
//    /*@Bean(destroyMethod = "shutdown")
//    //@ConditionalOnMissingClass(name = "com.who.auto.config.HerokuDatabaseConfiguration")
//    //@Profile("!" + Constants.SPRING_PROFILE_CLOUD)
//    public DataSource dataSource() {
//        log.debug("Configuring Datasource");
//        //HikariConfig config = new HikariConfig();
//        DataSourceBuilder.create().
//        driverClassName("org.eclipse.persistence.nosql.adapters.mongo.MongoPlatform").
//        build().
//        config.setDataSourceClassName("org.eclipse.persistence.nosql.adapters.mongo.MongoPlatform");
//        config.addDataSourceProperty("eclipselink.nosql.connection-spec", "org.eclipse.persistence.nosql.adapters.mongo.MongoConnectionSpec");
//        config.addDataSourceProperty("eclipselink.nosql.property.mongo.port", "27017");
//        config.addDataSourceProperty("eclipselink.nosql.property.mongo.host", "127.0.0.1");
//        config.addDataSourceProperty("eclipselink.nosql.property.mongo.db", "odm_eclipselink");
//        config.addDataSourceProperty("eclipselink.logging.level", "FINE");
//        //config.addDataSourceProperty("url", dataSourcePropertyResolver.getProperty("url"));
//        //config.addDataSourceProperty("user", dataSourcePropertyResolver.getProperty("username"));
//        //config.addDataSourceProperty("password", dataSourcePropertyResolver.getProperty("password"));
//
//        //MySQL optimizations, see https://github.com/brettwooldridge/HikariCP/wiki/MySQL-Configuration
//        return new HikariDataSource(config);
//    }*/
//}
