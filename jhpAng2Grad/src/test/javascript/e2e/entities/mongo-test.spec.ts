import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('MongoTest e2e test', () => {

    let navBarPage: NavBarPage;
    let mongoTestDialogPage: MongoTestDialogPage;
    let mongoTestComponentsPage: MongoTestComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load MongoTests', () => {
        navBarPage.goToEntity('mongo-test');
        mongoTestComponentsPage = new MongoTestComponentsPage();
        expect(mongoTestComponentsPage.getTitle()).toMatch(/testManagerApp.mongoTest.home.title/);

    });

    it('should load create MongoTest dialog', () => {
        mongoTestComponentsPage.clickOnCreateButton();
        mongoTestDialogPage = new MongoTestDialogPage();
        expect(mongoTestDialogPage.getModalTitle()).toMatch(/testManagerApp.mongoTest.home.createOrEditLabel/);
        mongoTestDialogPage.close();
    });

    it('should create and save MongoTests', () => {
        mongoTestComponentsPage.clickOnCreateButton();
        mongoTestDialogPage.setNameInput('name');
        expect(mongoTestDialogPage.getNameInput()).toMatch('name');
        mongoTestDialogPage.setValInput('5');
        expect(mongoTestDialogPage.getValInput()).toMatch('5');
        mongoTestDialogPage.setDateInput('2000-12-31');
        expect(mongoTestDialogPage.getDateInput()).toMatch('2000-12-31');
        mongoTestDialogPage.enumsSelectLastOption();
        mongoTestDialogPage.save();
        expect(mongoTestDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class MongoTestComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-mongo-test div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class MongoTestDialogPage {
    modalTitle = element(by.css('h4#myMongoTestLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));
    valInput = element(by.css('input#field_val'));
    dateInput = element(by.css('input#field_date'));
    enumsSelect = element(by.css('select#field_enums'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
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

    setDateInput = function (date) {
        this.dateInput.sendKeys(date);
    }

    getDateInput = function () {
        return this.dateInput.getAttribute('value');
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
