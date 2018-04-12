"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var stats_routing_module_1 = require("./stats-routing.module");
var stats_component_1 = require("./stats.component");
var StatsModule = /** @class */ (function () {
    function StatsModule() {
        /* constructor */
    }
    StatsModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                stats_routing_module_1.StatsRoutingModule
            ],
            declarations: [
                stats_component_1.StatsComponent
            ]
        }),
        __metadata("design:paramtypes", [])
    ], StatsModule);
    return StatsModule;
}());
exports.StatsModule = StatsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLGdGQUE4RTtBQUU5RSwrREFBNEQ7QUFDNUQscURBQW1EO0FBV25EO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckIsQ0FBQztJQUhRLFdBQVc7UUFUdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIseUNBQWtCO2FBQ3JCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2FBQ2pCO1NBQ0osQ0FBQzs7T0FDVyxXQUFXLENBSXZCO0lBQUQsa0JBQUM7Q0FBQSxBQUpELElBSUM7QUFKWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IFN0YXRzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3N0YXRzLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFN0YXRzQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RhdHMuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBTdGF0c1JvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTdGF0c0NvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdHNNb2R1bGUgeyBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qIGNvbnN0cnVjdG9yICovXHJcbiAgICB9XHJcbn1cclxuIl19