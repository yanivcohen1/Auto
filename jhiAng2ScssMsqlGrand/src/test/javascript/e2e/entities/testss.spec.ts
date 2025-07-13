import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Testss e2e test', () => {

    let navBarPage: NavBarPage;
    let testssDialogPage: TestssDialogPage;
    let testssComponentsPage: TestssComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Testsses', () => {
        navBarPage.goToEntity('testss');
        testssComponentsPage = new TestssComponentsPage();
        expect(testssComponentsPage.getTitle()).toMatch(/Testsses/);

    });

    it('should load create Testss dialog', () => {
        testssComponentsPage.clickOnCreateButton();
        testssDialogPage = new TestssDialogPage();
        expect(testssDialogPage.getModalTitle()).toMatch(/Create or edit a Testss/);
        testssDialogPage.close();
    });

    it('should create and save Testsses', () => {
        testssComponentsPage.clickOnCreateButton();
        testssDialogPage.setNameInput('name');
        expect(testssDialogPage.getNameInput()).toMatch('name');
        testssDialogPage.setValInput('5');
        expect(testssDialogPage.getValInput()).toMatch('5');
        testssDialogPage.enumsSelectLastOption();
        testssDialogPage.setDatesInput('2000-12-31');
        expect(testssDialogPage.getDatesInput()).toMatch('2000-12-31');
        testssDialogPage.save();
        expect(testssDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class TestssComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-testss div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class TestssDialogPage {
    modalTitle = element(by.css('h4#myTestssLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));
    valInput = element(by.css('input#field_val'));
    enumsSelect = element(by.css('select#field_enums'));
    datesInput = element(by.css('input#field_dates'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setNameInput = function (name) {
        this.nameInput.sendKeys(name);
    }

    getNameInput = function () {
        return this.nameInput.getAttribute('value');
    }

    setValInput = function (val) {
        this.valInput.sendKeys(val);
    }

    getValInput = function () {
        return this.valInput.getAttribute('value');
    }

    setEnumsSelect = function (enums) {
        this.enumsSelect.sendKeys(enums);
    }

    getEnumsSelect = function () {
        return this.enumsSelect.element(by.css('option:checked')).getText();
    }

    enumsSelectLastOption = function () {
        this.enumsSelect.all(by.tagName('option')).last().click();
    }
    setDatesInput = function (dates) {
        this.datesInput.sendKeys(dates);
    }

    getDatesInput = function () {
        return this.datesInput.getAttribute('value');
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
