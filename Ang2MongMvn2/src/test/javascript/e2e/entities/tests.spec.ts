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
        expect(testsComponentsPage.getTitle()).toMatch(/ang2MongMvnApp.tests.home.title/);

    });

    it('should load create Tests dialog', () => {
        testsComponentsPage.clickOnCreateButton();
        testsDialogPage = new TestsDialogPage();
        expect(testsDialogPage.getModalTitle()).toMatch(/ang2MongMvnApp.tests.home.createOrEditLabel/);
        testsDialogPage.close();
    });

    it('should create and save Tests', () => {
        testsComponentsPage.clickOnCreateButton();
        testsDialogPage.setNumInput('5');
        expect(testsDialogPage.getNumInput()).toMatch('5');
        testsDialogPage.setStrInput('str');
        expect(testsDialogPage.getStrInput()).toMatch('str');
        testsDialogPage.enmSelectLastOption();
        testsDialogPage.setTimeInput(12310020012301);
        expect(testsDialogPage.getTimeInput()).toMatch('2001-12-31T02:30');
        testsDialogPage.save();
        expect(testsDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

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
        return this.title.getAttribute('jhiTranslate');
    }
}

export class TestsDialogPage {
    modalTitle = element(by.css('h4#myTestsLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    numInput = element(by.css('input#field_num'));
    strInput = element(by.css('input#field_str'));
    enmSelect = element(by.css('select#field_enm'));
    timeInput = element(by.css('input#field_time'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setNumInput = function (num) {
        this.numInput.sendKeys(num);
    }

    getNumInput = function () {
        return this.numInput.getAttribute('value');
    }

    setStrInput = function (str) {
        this.strInput.sendKeys(str);
    }

    getStrInput = function () {
        return this.strInput.getAttribute('value');
    }

    setEnmSelect = function (enm) {
        this.enmSelect.sendKeys(enm);
    }

    getEnmSelect = function () {
        return this.enmSelect.element(by.css('option:checked')).getText();
    }

    enmSelectLastOption = function () {
        this.enmSelect.all(by.tagName('option')).last().click();
    }
    setTimeInput = function (time) {
        this.timeInput.sendKeys(time);
    }

    getTimeInput = function () {
        return this.timeInput.getAttribute('value');
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
