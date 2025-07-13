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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animations_1 = require("../animations");
var dialog_service_1 = require("../dialog.service");
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, router, dialogService) {
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.editName = data.crisis.name;
            _this.crisis = data.crisis;
        });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    };
    return CrisisDetailComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "routeAnimation", void 0);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "position", void 0);
CrisisDetailComponent = __decorate([
    core_1.Component({
        template: "\n  <div *ngIf=\"crisis\">\n    <h3>\"{{ editName }}\"</h3>\n    <div>\n      <label>Id: </label>{{ crisis.id }}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"save()\">Save</button>\n      <button (click)=\"cancel()\">Cancel</button>\n    </p>\n  </div>\n  ",
        styles: ['input {width: 20em}'],
        animations: [animations_1.slideInDownAnimation]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        dialog_service_1.DialogService])
], CrisisDetailComponent);
exports.CrisisDetailComponent = CrisisDetailComponent;
//# sourceMappingURL=crisis-detail.component.js.map