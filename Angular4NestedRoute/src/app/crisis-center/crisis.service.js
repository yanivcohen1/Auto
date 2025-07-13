"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Crisis = (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
}());
exports.Crisis = Crisis;
var CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];
var crisesPromise = Promise.resolve(CRISES);
var core_1 = require("@angular/core");
var CrisisService = CrisisService_1 = (function () {
    function CrisisService() {
    }
    CrisisService.prototype.getCrises = function () { return crisesPromise; };
    CrisisService.prototype.getCrisis = function (id) {
        return crisesPromise
            .then(function (crises) { return crises.find(function (crisis) { return crisis.id === +id; }); });
    };
    CrisisService.prototype.addCrisis = function (name) {
        name = name.trim();
        if (name) {
            var crisis_1 = new Crisis(CrisisService_1.nextCrisisId++, name);
            crisesPromise.then(function (crises) { return crises.push(crisis_1); });
        }
    };
    return CrisisService;
}());
CrisisService.nextCrisisId = 100;
CrisisService = CrisisService_1 = __decorate([
    core_1.Injectable()
], CrisisService);
exports.CrisisService = CrisisService;
var CrisisService_1;
//# sourceMappingURL=crisis.service.js.map