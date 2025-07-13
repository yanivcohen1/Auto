'use strict'; // necessary for es6 output in node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-env jasmine */
//import { describe, beforeAll, it, expect } from 'jasmine';
const protractor_1 = require("protractor");
const numDashboardTabs = 5;
const numCrises = 4;
const numHeroes = 6;
const EC = protractor_1.ExpectedConditions;
describe('Router', () => {
    beforeAll(() => protractor_1.browser.get('http://localhost:3000'));
    function getPageStruct() {
        const hrefEles = protractor_1.element.all(protractor_1.by.css('my-app a'));
        const crisisDetail = protractor_1.element.all(protractor_1.by.css('my-app > ng-component > ng-component > ng-component > div')).first();
        const heroDetail = protractor_1.element(protractor_1.by.css('my-app > ng-component > div'));
        return {
            hrefs: hrefEles,
            activeHref: protractor_1.element(protractor_1.by.css('my-app a.active')),
            crisisHref: hrefEles.get(0),
            crisisList: protractor_1.element.all(protractor_1.by.css('my-app > ng-component > ng-component li')),
            crisisDetail: crisisDetail,
            crisisDetailTitle: crisisDetail.element(protractor_1.by.xpath('*[1]')),
            heroesHref: hrefEles.get(1),
            heroesList: protractor_1.element.all(protractor_1.by.css('my-app > ng-component li')),
            heroDetail: heroDetail,
            heroDetailTitle: heroDetail.element(protractor_1.by.xpath('*[1]')),
            adminHref: hrefEles.get(2),
            adminPreloadList: protractor_1.element.all(protractor_1.by.css('my-app > ng-component > ng-component > ul > li')),
            loginHref: hrefEles.get(3),
            loginButton: protractor_1.element.all(protractor_1.by.css('my-app > ng-component > p > button')),
            contactHref: hrefEles.get(4),
            contactCancelButton: protractor_1.element.all(protractor_1.by.buttonText('Cancel')),
            outletComponents: protractor_1.element.all(protractor_1.by.css('my-app > ng-component'))
        };
    }
    it('has expected dashboard tabs', () => {
        debugger;
        const page = getPageStruct();
        expect(page.hrefs.count()).toEqual(numDashboardTabs, 'dashboard tab count');
        expect(page.crisisHref.getText()).toEqual('Crisis Center');
        expect(page.heroesHref.getText()).toEqual('Heroes1');
        expect(page.adminHref.getText()).toEqual('Admin');
        expect(page.loginHref.getText()).toEqual('Login');
        expect(page.contactHref.getText()).toEqual('Contact');
    });
    it('has heroes selected as opening tab', () => {
        const page = getPageStruct();
        expect(page.activeHref.getText()).toEqual('Heroes');
    });
    it('has crises center items', () => __awaiter(this, void 0, void 0, function* () {
        const page = getPageStruct();
        yield page.crisisHref.click();
        expect(page.activeHref.getText()).toEqual('Crisis Center');
        expect(page.crisisList.count()).toBe(numCrises, 'crisis list count');
    }));
    it('has hero items', () => __awaiter(this, void 0, void 0, function* () {
        const page = getPageStruct();
        yield page.heroesHref.click();
        expect(page.activeHref.getText()).toEqual('Heroes');
        expect(page.heroesList.count()).toBe(numHeroes, 'hero list count');
    }));
    it('toggles views', () => __awaiter(this, void 0, void 0, function* () {
        const page = getPageStruct();
        yield page.crisisHref.click();
        expect(page.activeHref.getText()).toEqual('Crisis Center');
        expect(page.crisisList.count()).toBe(numCrises, 'crisis list count');
        yield page.heroesHref.click();
        expect(page.activeHref.getText()).toEqual('Heroes');
        expect(page.heroesList.count()).toBe(numHeroes, 'hero list count');
    }));
    it('saves changed crisis details', () => __awaiter(this, void 0, void 0, function* () {
        const page = getPageStruct();
        yield page.crisisHref.click();
        yield crisisCenterEdit(2, true);
    }));
    it('can cancel changed crisis details', () => __awaiter(this, void 0, void 0, function* () {
        const page = getPageStruct();
        yield page.crisisHref.click();
        yield crisisCenterEdit(3, false);
    }));
    it('saves changed hero details', () => __awaiter(this, void 0, void 0, function* () {
        const page = getPageStruct();
        yield page.heroesHref.click();
        const heroEle = page.heroesList.get(4);
        let text = yield heroEle.getText();
        expect(text.length).toBeGreaterThan(0, 'hero item text length');
        // remove leading id from text
        const heroText = text.substr(text.indexOf(' ')).trim();
        yield heroEle.click();
        expect(page.heroesList.count()).toBe(0, 'hero list count');
        expect(page.heroDetail.isPresent()).toBe(true, 'hero detail');
        expect(page.heroDetailTitle.getText()).toContain(heroText);
        let inputEle = page.heroDetail.element(protractor_1.by.css('input'));
        yield inputEle.sendKeys('-foo');
        expect(page.heroDetailTitle.getText()).toContain(heroText + '-foo');
        let buttonEle = page.heroDetail.element(protractor_1.by.css('button'));
        yield buttonEle.click();
        expect(heroEle.getText()).toContain(heroText + '-foo');
    }));
    it('sees preloaded modules', () => __awaiter(this, void 0, void 0, function* () {
        const page = getPageStruct();
        yield page.loginHref.click();
        yield page.loginButton.click();
        const list = page.adminPreloadList;
        expect(list.count()).toBe(1, 'preloaded module');
        expect(yield list.first().getText()).toBe('crisis-center', 'first preloaded module');
    }));
    it('sees the secondary route', () => __awaiter(this, void 0, void 0, function* () {
        const page = getPageStruct();
        yield page.heroesHref.click();
        yield page.contactHref.click();
        expect(page.outletComponents.count()).toBe(2, 'route count');
    }));
    function crisisCenterEdit(index, save) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = getPageStruct();
            yield page.crisisHref.click();
            let crisisEle = page.crisisList.get(index);
            let text = yield crisisEle.getText();
            expect(text.length).toBeGreaterThan(0, 'crisis item text length');
            // remove leading id from text
            const crisisText = text.substr(text.indexOf(' ')).trim();
            yield crisisEle.click();
            expect(page.crisisDetail.isPresent()).toBe(true, 'crisis detail present');
            expect(page.crisisDetailTitle.getText()).toContain(crisisText);
            let inputEle = page.crisisDetail.element(protractor_1.by.css('input'));
            yield inputEle.sendKeys('-foo');
            let buttonEle = page.crisisDetail.element(protractor_1.by.buttonText(save ? 'Save' : 'Cancel'));
            yield buttonEle.click();
            crisisEle = page.crisisList.get(index);
            if (save) {
                expect(crisisEle.getText()).toContain(crisisText + '-foo');
            }
            else {
                yield protractor_1.browser.wait(EC.alertIsPresent(), 4000);
                yield protractor_1.browser.switchTo().alert().accept();
                expect(crisisEle.getText()).toContain(crisisText);
            }
        });
    }
});
//# sourceMappingURL=e2e-spec.js.map