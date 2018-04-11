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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1DQUFxQztBQVFyQztJQU5BO1FBT0UsY0FBUyxHQUFHO1lBQ1Y7Z0JBQ0UsTUFBTSxFQUFFLGlDQUFpQztnQkFDekMsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsSUFBSSxFQUFFLCtCQUErQjthQUN0QztZQUNEO2dCQUNFLE1BQU0sRUFBRSwyQkFBMkI7Z0JBQ25DLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7WUFDRDtnQkFDRSxNQUFNLEVBQUcsMkJBQTJCO2dCQUNwQyxJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixJQUFJLEVBQUUsZ0VBQWdFO2FBQ3ZFO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLDJCQUEyQjtnQkFDbkMsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLHFEQUFxRDthQUM1RDtZQUNEO2dCQUNFLE1BQU0sRUFBRSwyQkFBMkI7Z0JBQ25DLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLElBQUksRUFBRSwyQ0FBMkM7YUFDbEQ7U0FDRixDQUFDO0lBS0osQ0FBQztJQUhDLDZCQUFJLEdBQUosVUFBSyxJQUFJO1FBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBL0JVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyxjQUFjLENBZ0MxQjtJQUFELHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkFib3V0XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2Fib3V0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJhYm91dC5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xyXG4gIGFib3V0TGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgc291cmNlOiBcIn4vaW1hZ2VzL25hdGl2ZV9zY3JpcHRfbG9nby5wbmdcIixcclxuICAgICAgdGV4dDogXCJOYXRpdmVTY3JpcHQgdjMuNC4zXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc291cmNlOiBcIn4vaW1hZ2VzL2FuZ3VsYXJfbG9nby5wbmdcIixcclxuICAgICAgdGV4dDogXCJBbmd1bGFyIHY1LjIuMFwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vYW5ndWxhci5pby9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc291cmNlOiAgXCJ+L2ltYWdlcy9hbmd1bGFyX2xvZ28ucG5nXCIsXHJcbiAgICAgIHRleHQ6IFwiUHJldXptaSBrw7NkIG5hIEdpdEh1YnVcIixcclxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbmlrb2xhODdrZy9uYXRpdmVzY3JpcHQtYW5ndWxhci1tZWV0dXAtZGVtb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzb3VyY2U6IFwifi9pbWFnZXMvYW5ndWxhcl9sb2dvLnBuZ1wiLFxyXG4gICAgICB0ZXh0OiBcIlF1YW50b3ggbmEgTGlua2VkSW4tdVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3F1YW50b3h0ZWNobm9sb2d5L1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzb3VyY2U6IFwifi9pbWFnZXMvYW5ndWxhcl9sb2dvLnBuZ1wiLFxyXG4gICAgICB0ZXh0OiBcIkF1dG9yIG5hIExpbmtlZEluLXVcIixcclxuICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmlrb2xhamVyZW1pY1wiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgZ29UbyhsaW5rKSB7XHJcbiAgICB1dGlscy5vcGVuVXJsKGxpbmspO1xyXG4gIH1cclxufVxyXG4iXX0=