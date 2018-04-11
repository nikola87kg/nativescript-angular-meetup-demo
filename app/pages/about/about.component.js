"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.aboutList = [
            {
                source: "res://native_script_logo",
                text: "NativeScript v3.4.3",
                link: "https://www.nativescript.org/"
            },
            {
                source: "res://angular_logo",
                text: "Angular v5.2.0",
                link: "https://angular.io/"
            },
            {
                source: "res://github_logo",
                text: "Preuzmi kód na GitHubu",
                link: "https://github.com/nikola87kg/nativescript-angular-meetup-demo"
            },
            {
                source: "res://linkedin_blue_logo",
                text: "Quantox na LinkedIn-u",
                link: "https://www.linkedin.com/company/quantoxtechnology/"
            },
            {
                source: "res://linkedin_black_logo",
                text: "Postavite pitanje",
                link: "https://www.linkedin.com/in/nikolajeremic"
            }
        ];
    }
    AboutComponent.prototype.goTo = function (link) {
        utils.openUrl(link);
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "About",
            moduleId: module.id,
            templateUrl: "./about.component.html",
            styleUrls: ["about.component.scss"]
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1DQUFxQztBQVFyQztJQU5BO1FBT0UsY0FBUyxHQUFHO1lBQ1Y7Z0JBQ0UsTUFBTSxFQUFFLDBCQUEwQjtnQkFDbEMsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsSUFBSSxFQUFFLCtCQUErQjthQUN0QztZQUNEO2dCQUNFLE1BQU0sRUFBRSxvQkFBb0I7Z0JBQzVCLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7WUFDRDtnQkFDRSxNQUFNLEVBQUcsbUJBQW1CO2dCQUM1QixJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixJQUFJLEVBQUUsZ0VBQWdFO2FBQ3ZFO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLDBCQUEwQjtnQkFDbEMsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLHFEQUFxRDthQUM1RDtZQUNEO2dCQUNFLE1BQU0sRUFBRSwyQkFBMkI7Z0JBQ25DLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLElBQUksRUFBRSwyQ0FBMkM7YUFDbEQ7U0FDRixDQUFDO0lBS0osQ0FBQztJQUhDLDZCQUFJLEdBQUosVUFBSyxJQUFJO1FBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBL0JVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyxjQUFjLENBZ0MxQjtJQUFELHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJBYm91dFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Fib3V0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiYWJvdXQuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuICBhYm91dExpc3QgPSBbXG4gICAge1xuICAgICAgc291cmNlOiBcInJlczovL25hdGl2ZV9zY3JpcHRfbG9nb1wiLFxuICAgICAgdGV4dDogXCJOYXRpdmVTY3JpcHQgdjMuNC4zXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHNvdXJjZTogXCJyZXM6Ly9hbmd1bGFyX2xvZ29cIixcbiAgICAgIHRleHQ6IFwiQW5ndWxhciB2NS4yLjBcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9hbmd1bGFyLmlvL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBzb3VyY2U6ICBcInJlczovL2dpdGh1Yl9sb2dvXCIsXG4gICAgICB0ZXh0OiBcIlByZXV6bWkga8OzZCBuYSBHaXRIdWJ1XCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uaWtvbGE4N2tnL25hdGl2ZXNjcmlwdC1hbmd1bGFyLW1lZXR1cC1kZW1vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHNvdXJjZTogXCJyZXM6Ly9saW5rZWRpbl9ibHVlX2xvZ29cIixcbiAgICAgIHRleHQ6IFwiUXVhbnRveCBuYSBMaW5rZWRJbi11XCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3F1YW50b3h0ZWNobm9sb2d5L1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBzb3VyY2U6IFwicmVzOi8vbGlua2VkaW5fYmxhY2tfbG9nb1wiLFxuICAgICAgdGV4dDogXCJQb3N0YXZpdGUgcGl0YW5qZVwiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmlrb2xhamVyZW1pY1wiXG4gICAgfVxuICBdO1xuXG4gIGdvVG8obGluaykge1xuICAgIHV0aWxzLm9wZW5VcmwobGluayk7XG4gIH1cbn1cbiJdfQ==