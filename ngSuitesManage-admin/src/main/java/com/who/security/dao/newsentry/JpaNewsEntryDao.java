package com.who.security.dao.newsentry;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.transaction.annotation.Transactional;

import com.who.security.dao.JpaDao;
import com.who.security.entity.NewsEntry;


/**
 * JPA Implementation of a {@link NewsEntryDao}.
 * 
 * @author Philip W. Sorst <philip@sorst.net>
 */
public class JpaNewsEntryDao extends JpaDao<NewsEntry, Long> implements NewsEntryDao
{

	public JpaNewsEntryDao()
	{
		super(NewsEntry.class);
	}


	@Override
	@Transactional(readOnly = true)
	public List<NewsEntry> findAll()
	{
		final CriteriaBuilder builder = this.getEntityManager().getCriteriaBuilder();
		final CriteriaQuery<NewsEntry> criteriaQuery = builder.createQuery(NewsEntry.class);

		Root<NewsEntry> root = criteriaQuery.from(NewsEntry.class);
		criteriaQuery.orderBy(builder.desc(root.get("date")));

		TypedQuery<NewsEntry> typedQuery = this.getEntityManager().createQuery(criteriaQuery);
		return typedQuery.getResultList();
	}

}
