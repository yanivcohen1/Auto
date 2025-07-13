import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Tests e2e test', () => {

    let navBarPage: NavBarPage;
    let testsDialogPage: TestsDialogPage;
    let testsComponentsPage: TestsComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Tests', () => {
        navBarPage.goToEntity('tests');
        testsComponentsPage = new TestsComponentsPage();
        expect(testsComponentsPage.getTitle()).toMatch(/Tests/);

    });

    it('should load create Tests dialog', () => {
        testsComponentsPage.clickOnCreateButton();
        testsDialogPage = new TestsDialogPage();
        expect(testsDialogPage.getModalTitle()).toMatch(/Create or edit a Tests/);
        testsDialogPage.close();
    });

   /* it('should create and save Tests', () => {
        testsComponentsPage.clickOnCreateButton();
        testsDialogPage.setTestNameInput('testName');
        expect(testsDialogPage.getTestNameInput()).toMatch('testName');
        testsDialogPage.suiteSelectLastOption();
        testsDialogPage.save();
        expect(testsDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); */

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class TestsComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-tests div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class TestsDialogPage {
    modalTitle = element(by.css('h4#myTestsLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    testNameInput = element(by.css('input#field_testName'));
    suiteSelect = element(by.css('select#field_suite'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setTestNameInput = function (testName) {
        this.testNameInput.sendKeys(testName);
    }

    getTestNameInput = function () {
        return this.testNameInput.getAttribute('value');
    }

    suiteSelectLastOption = function () {
        this.suiteSelect.all(by.tagName('option')).last().click();
    }

    suiteSelectOption = function (option) {
        this.suiteSelect.sendKeys(option);
    }

    getSuiteSelect = function () {
        return this.suiteSelect;
    }

    getSuiteSelectedOption = function () {
        return this.suiteSelect.element(by.css('option:checked')).getText();
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
