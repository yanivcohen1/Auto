package com.who.test.server.db;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("dbManager") 
@Repository
@Transactional
public class DatabaseManager {

    @PersistenceContext
    @Qualifier("legacyEmf")
    private EntityManager legacyEm;

    @PersistenceContext
    @Qualifier("ls360Emf")
    private EntityManager ls360Em;

    @SuppressWarnings("unchecked")
    @Transactional(readOnly=true)
    public List<Object> getResultList(String query, Class mappingClass) throws Exception {

        //Query emQuery = legacyEm.createNativeQuery(query, mappingClass);

        //return  emQuery.getResultList();
        return null;

    } //end of findTraineeFromLegacy()
}