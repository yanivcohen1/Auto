import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Suite e2e test', () => {

    let navBarPage: NavBarPage;
    let suiteDialogPage: SuiteDialogPage;
    let suiteComponentsPage: SuiteComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Suites', () => {
        navBarPage.goToEntity('suite');
        suiteComponentsPage = new SuiteComponentsPage();
        expect(suiteComponentsPage.getTitle()).toMatch(/Suites/);

    });

    it('should load create Suite dialog', () => {
        suiteComponentsPage.clickOnCreateButton();
        suiteDialogPage = new SuiteDialogPage();
        expect(suiteDialogPage.getModalTitle()).toMatch(/Create or edit a Suite/);
        suiteDialogPage.close();
    });

    it('should create and save Suites', () => {
        suiteComponentsPage.clickOnCreateButton();
        suiteDialogPage.setSuiteNameInput('suiteName');
        expect(suiteDialogPage.getSuiteNameInput()).toMatch('suiteName');
        suiteDialogPage.setJenkinsUrlInput('jenkinsUrl');
        expect(suiteDialogPage.getJenkinsUrlInput()).toMatch('jenkinsUrl');
        suiteDialogPage.save();
        expect(suiteDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class SuiteComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-suite div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class SuiteDialogPage {
    modalTitle = element(by.css('h4#mySuiteLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    suiteNameInput = element(by.css('input#field_suiteName'));
    jenkinsUrlInput = element(by.css('input#field_jenkinsUrl'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setSuiteNameInput = function (suiteName) {
        this.suiteNameInput.sendKeys(suiteName);
    }

    getSuiteNameInput = function () {
        return this.suiteNameInput.getAttribute('value');
    }

    setJenkinsUrlInput = function (jenkinsUrl) {
        this.jenkinsUrlInput.sendKeys(jenkinsUrl);
    }

    getJenkinsUrlInput = function () {
        return this.jenkinsUrlInput.getAttribute('value');
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
