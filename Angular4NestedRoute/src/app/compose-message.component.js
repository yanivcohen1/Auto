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
var animations_1 = require("./animations");
var ComposeMessageComponent = (function () {
    function ComposeMessageComponent(router) {
        this.router = router;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
        this.sending = false;
    }
    ComposeMessageComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        this.details = 'Sending Message...';
        setTimeout(function () {
            _this.sending = false;
            _this.closePopup();
        }, 1000);
    };
    ComposeMessageComponent.prototype.cancel = function () {
        this.closePopup();
    };
    ComposeMessageComponent.prototype.closePopup = function () {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    return ComposeMessageComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object)
], ComposeMessageComponent.prototype, "routeAnimation", void 0);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], ComposeMessageComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], ComposeMessageComponent.prototype, "position", void 0);
ComposeMessageComponent = __decorate([
    core_1.Component({
        templateUrl: './compose-message.component.html',
        styles: [':host { position: relative; bottom: 10%; }'],
        animations: [animations_1.slideInDownAnimation]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ComposeMessageComponent);
exports.ComposeMessageComponent = ComposeMessageComponent;
//# sourceMappingURL=compose-message.component.js.map