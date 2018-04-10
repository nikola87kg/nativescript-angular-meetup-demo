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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1DQUFxQztBQVFyQztJQXdCRTtRQXZCQSxjQUFTLEdBQUc7WUFDVjtnQkFDRSxNQUFNLEVBQUUsaUNBQWlDO2dCQUN6QyxJQUFJLEVBQUUsK0JBQStCO2FBQ3RDO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLDJCQUEyQjtnQkFDbkMsSUFBSSxFQUFFLHFCQUFxQjthQUM1QjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixJQUFJLEVBQUUsZ0VBQWdFO2FBQ3ZFO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLElBQUksRUFBRSxxREFBcUQ7YUFDNUQ7WUFDRDtnQkFDRSxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsSUFBSSxFQUFFLDJDQUEyQzthQUNsRDtTQUNGLENBQUM7UUFHQTs7dUVBRStEO0lBQ2pFLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0U7O3VFQUUrRDtJQUNqRSxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLElBQUk7UUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUF0Q1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzs7T0FDVyxjQUFjLENBdUMxQjtJQUFELHFCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiQWJvdXRcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImFib3V0LmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYWJvdXRMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICBzb3VyY2U6IFwifi9pbWFnZXMvbmF0aXZlX3NjcmlwdF9sb2dvLnBuZ1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNvdXJjZTogXCJ+L2ltYWdlcy9hbmd1bGFyX2xvZ28ucG5nXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9hbmd1bGFyLmlvL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzb3VyY2U6IFwiJiN4ZjA5YjtcIixcclxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbmlrb2xhODdrZy9uYXRpdmVzY3JpcHQtYW5ndWxhci1tZWV0dXAtZGVtb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzb3VyY2U6IFwiJiN4ZjBlMTtcIixcclxuICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9xdWFudG94dGVjaG5vbG9neS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc291cmNlOiBcIiYjeGYwOGM7XCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25pa29sYWplcmVtaWNcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICogVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3QgYXBwIHNlcnZpY2VzIHRoYXQgeW91IG5lZWQgaW4gdGhpcyBjb21wb25lbnQuXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoaXMgY29tcG9uZW50LlxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgfVxyXG5cclxuICBnb1RvKGxpbmspIHtcclxuICAgIHV0aWxzLm9wZW5VcmwobGluayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==