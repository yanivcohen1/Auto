"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var crisis_center_home_component_1 = require("./crisis-center-home.component");
var crisis_list_component_1 = require("./crisis-list.component");
var crisis_center_component_1 = require("./crisis-center.component");
var crisis_detail_component_1 = require("./crisis-detail.component");
var can_deactivate_guard_service_1 = require("../can-deactivate-guard.service");
var crisis_detail_resolver_service_1 = require("./crisis-detail-resolver.service");
var crisisCenterRoutes = [
    {
        path: '',
        component: crisis_center_component_1.CrisisCenterComponent,
        children: [
            {
                path: '',
                component: crisis_list_component_1.CrisisListComponent,
                children: [
                    {
                        path: ':id',
                        component: crisis_detail_component_1.CrisisDetailComponent,
                        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
                        resolve: {
                            crisis: crisis_detail_resolver_service_1.CrisisDetailResolver
                        }
                    },
                    {
                        path: '',
                        component: crisis_center_home_component_1.CrisisCenterHomeComponent
                    }
                ]
            }
        ]
    }
];
var CrisisCenterRoutingModule = (function () {
    function CrisisCenterRoutingModule() {
    }
    return CrisisCenterRoutingModule;
}());
CrisisCenterRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(crisisCenterRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            crisis_detail_resolver_service_1.CrisisDetailResolver
        ]
    })
], CrisisCenterRoutingModule);
exports.CrisisCenterRoutingModule = CrisisCenterRoutingModule;
//# sourceMappingURL=crisis-center-routing.module.js.map