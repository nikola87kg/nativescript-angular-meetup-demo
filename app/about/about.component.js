"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.aboutList = [
            {
                source: "~/images/native_script_logo.png",
                link: "https://www.nativescript.org/"
            },
            {
                source: "~/images/angular_logo.png",
                link: "https://angular.io/"
            },
            {
                source: "&#xf09b;",
                link: "https://github.com/nikola87kg/nativescript-angular-meetup-demo"
            },
            {
                source: "&#xf0e1;",
                link: "https://www.linkedin.com/company/quantoxtechnology/"
            },
            {
                source: "&#xf08c;",
                link: "https://www.linkedin.com/in/nikolajeremic"
            }
        ];
        /************************************************************
         * Use the constructor to inject app services that you need in this component.
         *************************************************************/
    }
    AboutComponent.prototype.ngOnInit = function () {
        /************************************************************
         * Use the "ngOnInit" handler to initialize data for this component.
         *************************************************************/
    };
    AboutComponent.prototype.goTo = function (link) {
        utils.openUrl(link);
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "About",
            moduleId: module.id,
            templateUrl: "./about.component.html",
            styleUrls: ["about.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1DQUFxQztBQVFyQztJQXdCRTtRQXZCQSxjQUFTLEdBQUc7WUFDVjtnQkFDRSxNQUFNLEVBQUUsaUNBQWlDO2dCQUN6QyxJQUFJLEVBQUUsK0JBQStCO2FBQ3RDO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLDJCQUEyQjtnQkFDbkMsSUFBSSxFQUFFLHFCQUFxQjthQUM1QjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixJQUFJLEVBQUUsZ0VBQWdFO2FBQ3ZFO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLElBQUksRUFBRSxxREFBcUQ7YUFDNUQ7WUFDRDtnQkFDRSxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsSUFBSSxFQUFFLDJDQUEyQzthQUNsRDtTQUNGLENBQUM7UUFHQTs7dUVBRStEO0lBQ2pFLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0U7O3VFQUUrRDtJQUNqRSxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLElBQUk7UUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUF0Q1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzs7T0FDVyxjQUFjLENBdUMxQjtJQUFELHFCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkFib3V0XCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJhYm91dC5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFib3V0TGlzdCA9IFtcbiAgICB7XG4gICAgICBzb3VyY2U6IFwifi9pbWFnZXMvbmF0aXZlX3NjcmlwdF9sb2dvLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBzb3VyY2U6IFwifi9pbWFnZXMvYW5ndWxhcl9sb2dvLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL2FuZ3VsYXIuaW8vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHNvdXJjZTogXCImI3hmMDliO1wiLFxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbmlrb2xhODdrZy9uYXRpdmVzY3JpcHQtYW5ndWxhci1tZWV0dXAtZGVtb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBzb3VyY2U6IFwiJiN4ZjBlMTtcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvcXVhbnRveHRlY2hub2xvZ3kvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHNvdXJjZTogXCImI3hmMDhjO1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmlrb2xhamVyZW1pY1wiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB5b3UgbmVlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIH1cblxuICBnb1RvKGxpbmspIHtcbiAgICB1dGlscy5vcGVuVXJsKGxpbmspO1xuICB9XG59XG4iXX0=