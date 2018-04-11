"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var about_routing_module_1 = require("./about-routing.module");
var about_component_1 = require("./about.component");
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                about_routing_module_1.AboutRoutingModule
            ],
            declarations: [
                about_component_1.AboutComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUU5RSwrREFBNEQ7QUFDNUQscURBQW1EO0FBY25EO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFadkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIseUNBQWtCO2FBQ3JCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBBYm91dFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hYm91dC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQWJvdXRSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQWJvdXRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRNb2R1bGUgeyB9XHJcbiJdfQ==