package com.yan.manag.service.util;

import java.util.Iterator;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class JdbcPage<T> implements Page<T>
{

	Pageable pageable;
	int totalPages;
	int numberOfElements;
	int totalNumbers;
	List<T> content;	
	
	
	
	public JdbcPage(Pageable pageable, int totalPages, 
			int totalNumbers, List<T> content) {
		super();
		this.pageable = pageable;
		this.totalPages = totalPages;		
		this.totalNumbers = totalNumbers;
		this.content = content;
	}

	@Override
	public int getNumber() {
		return pageable.getPageNumber();
	}

	@Override
	public int getSize() {
		return pageable.getPageSize();
	}

	@Override
	public int getTotalPages() {
		return this.totalPages;
	}

	//number on current page
	@Override
	public int getNumberOfElements() {
		return this.getContent().size();
	}

	@Override
	public long getTotalElements() {
		return this.totalNumbers;
	}

	public boolean hasPrevious() {
		return pageable.getPageNumber() != 0;
	}

	public boolean isFirst() {
		return pageable.getPageNumber() == 0;
	}

	public boolean hasNext() {
		return pageable.getPageNumber() != totalPages;
	}

	public boolean isLast() {
		return pageable.getPageNumber() == totalPages;
	}

	@Override
	public Iterator<T> iterator() {
		return content.iterator();
	}

	@Override
	public List<T> getContent() {
		return content;
	}

	@Override
	public boolean hasContent() {
		return !content.isEmpty();
	}

	@Override
	public Sort getSort() {
		return this.pageable.getSort();
	}

	@Override
	public Pageable nextPageable() {
		// TODO Auto-generated method stub
		return this.pageable.next();
	}

	@Override
	public Pageable previousPageable() {
		// TODO Auto-generated method stub
		return this.pageable.previousOrFirst();
	}

	@Override
	public <S> Page<S> map(Converter<? super T, ? extends S> converter) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
