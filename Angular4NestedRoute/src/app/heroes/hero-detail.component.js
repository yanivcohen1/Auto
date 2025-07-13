"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animations_1 = require("../animations");
var hero_service_1 = require("./hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.getHero(params.get('id'));
        })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.gotoHeroes = function () {
        var heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object)
], HeroDetailComponent.prototype, "routeAnimation", void 0);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], HeroDetailComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], HeroDetailComponent.prototype, "position", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        template: "\n  <h2>HEROES</h2>\n  <div *ngIf=\"hero\">\n    <h3>\"{{ hero.name }}\"</h3>\n    <div>\n      <label>Id: </label>{{ hero.id }}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"gotoHeroes()\">Back</button>\n    </p>\n  </div>\n  ",
        animations: [animations_1.slideInDownAnimation]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        hero_service_1.HeroService])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map