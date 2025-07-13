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
var compose_message_component_1 = require("./compose-message.component");
var not_found_component_1 = require("./not-found.component");
var can_deactivate_guard_service_1 = require("./can-deactivate-guard.service");
var auth_guard_service_1 = require("./auth-guard.service");
var selective_preloading_strategy_1 = require("./selective-preloading-strategy");
var appRoutes = [
    {
        path: 'compose',
        component: compose_message_component_1.ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
        data: { preload: true }
    },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes, {
                enableTracing: true,
                preloadingStrategy: selective_preloading_strategy_1.SelectivePreloadingStrategy,
            })
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            can_deactivate_guard_service_1.CanDeactivateGuard,
            selective_preloading_strategy_1.SelectivePreloadingStrategy
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map