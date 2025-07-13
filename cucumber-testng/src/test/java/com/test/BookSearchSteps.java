package com.test;

import org.testng.Assert;
//import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.hascode.tutorial.cucumber.book.Book;
import com.hascode.tutorial.cucumber.book.Library;
import com.hascode.tutorial.cucumber.salary.Employee;
import com.hascode.tutorial.cucumber.salary.SalaryManager;
import com.legalmonkeys.test.AbstractCucumberTest;
import com.legalmonkeys.test.annotation.Feature;
import com.legalmonkeys.test.annotation.Scenario;

import cucumber.api.Format;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;

@Feature("search_book")
public class BookSearchSteps extends AbstractCucumberTest {

    @Test
    @Scenario("Search books by publication year")
    public void Search_books_by_publication_year() {
        run();
    }
    	Library library = new Library();
    	List<Book> result = new ArrayList<>();

    	@Given(".+book with the title '(.+)', written by '(.+)', published in (.+)")
    	public void addNewBook(final String title, final String author, @Format("dd MMMMM yyyy") final Date published) {
    		Book book = new Book(title, author, published);
    		library.addBook(book);
    	}

    	@When("^the customer searches for books published between (\\d+) and (\\d+)$")
    	public void setSearchParameters(@Format("yyyy") final Date from, @Format("yyyy") final Date to) {
    		result = library.findBooks(from, to);
    	}

    	@Then("(\\d+) books should have been found$")
    	public void verifyAmountOfBooksFound(final int booksFound) {
    		Assert.assertEquals(result.size(), booksFound);
    	}

    	@Then("Book (\\d+) should have the title '(.+)'$")
    	public void verifyBookAtPosition(final int position, final String title) {
    		Assert.assertEquals(result.get(position - 1).getTitle() + " a", title);
    	}

}