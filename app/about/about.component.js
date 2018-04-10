"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.aboutList = [
            {
                source: "~/images/native_script_logo.png",
                text: "NativeScript v3.4.3",
                link: "https://www.nativescript.org/"
            },
            {
                source: "~/images/angular_logo.png",
                text: "Angular v5.2.0",
                link: "https://angular.io/"
            },
            {
                source: "~/images/angular_logo.png",
                text: "Preuzmi kód na GitHubu",
                link: "https://github.com/nikola87kg/nativescript-angular-meetup-demo"
            },
            {
                source: "~/images/angular_logo.png",
                text: "Quantox na LinkedIn-u",
                link: "https://www.linkedin.com/company/quantoxtechnology/"
            },
            {
                source: "~/images/angular_logo.png",
                text: "Autor na LinkedIn-u",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1DQUFxQztBQVFyQztJQU5BO1FBT0UsY0FBUyxHQUFHO1lBQ1Y7Z0JBQ0UsTUFBTSxFQUFFLGlDQUFpQztnQkFDekMsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsSUFBSSxFQUFFLCtCQUErQjthQUN0QztZQUNEO2dCQUNFLE1BQU0sRUFBRSwyQkFBMkI7Z0JBQ25DLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7WUFDRDtnQkFDRSxNQUFNLEVBQUcsMkJBQTJCO2dCQUNwQyxJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixJQUFJLEVBQUUsZ0VBQWdFO2FBQ3ZFO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLDJCQUEyQjtnQkFDbkMsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLHFEQUFxRDthQUM1RDtZQUNEO2dCQUNFLE1BQU0sRUFBRSwyQkFBMkI7Z0JBQ25DLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLElBQUksRUFBRSwyQ0FBMkM7YUFDbEQ7U0FDRixDQUFDO0lBS0osQ0FBQztJQUhDLDZCQUFJLEdBQUosVUFBSyxJQUFJO1FBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBL0JVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyxjQUFjLENBZ0MxQjtJQUFELHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJBYm91dFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Fib3V0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiYWJvdXQuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuICBhYm91dExpc3QgPSBbXG4gICAge1xuICAgICAgc291cmNlOiBcIn4vaW1hZ2VzL25hdGl2ZV9zY3JpcHRfbG9nby5wbmdcIixcbiAgICAgIHRleHQ6IFwiTmF0aXZlU2NyaXB0IHYzLjQuM1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBzb3VyY2U6IFwifi9pbWFnZXMvYW5ndWxhcl9sb2dvLnBuZ1wiLFxuICAgICAgdGV4dDogXCJBbmd1bGFyIHY1LjIuMFwiLFxuICAgICAgbGluazogXCJodHRwczovL2FuZ3VsYXIuaW8vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHNvdXJjZTogIFwifi9pbWFnZXMvYW5ndWxhcl9sb2dvLnBuZ1wiLFxuICAgICAgdGV4dDogXCJQcmV1em1pIGvDs2QgbmEgR2l0SHVidVwiLFxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbmlrb2xhODdrZy9uYXRpdmVzY3JpcHQtYW5ndWxhci1tZWV0dXAtZGVtb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBzb3VyY2U6IFwifi9pbWFnZXMvYW5ndWxhcl9sb2dvLnBuZ1wiLFxuICAgICAgdGV4dDogXCJRdWFudG94IG5hIExpbmtlZEluLXVcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvcXVhbnRveHRlY2hub2xvZ3kvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHNvdXJjZTogXCJ+L2ltYWdlcy9hbmd1bGFyX2xvZ28ucG5nXCIsXG4gICAgICB0ZXh0OiBcIkF1dG9yIG5hIExpbmtlZEluLXVcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25pa29sYWplcmVtaWNcIlxuICAgIH1cbiAgXTtcblxuICBnb1RvKGxpbmspIHtcbiAgICB1dGlscy5vcGVuVXJsKGxpbmspO1xuICB9XG59XG4iXX0=