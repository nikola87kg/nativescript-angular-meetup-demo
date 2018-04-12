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
            },
            {
                source: "res://slides_logo",
                text: "Pogledaj prezentaciju",
                link: "https://docs.google.com/presentation/d/1R8KsqgY9v-LyslmVn-BhwYs-SBuHkqAC-KhQYpIbQok/edit#slide=id.g3813a982bc_0_49"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1DQUFxQztBQVFyQztJQU5BO1FBT0UsY0FBUyxHQUFHO1lBQ1Y7Z0JBQ0UsTUFBTSxFQUFFLDBCQUEwQjtnQkFDbEMsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsSUFBSSxFQUFFLCtCQUErQjthQUN0QztZQUNEO2dCQUNFLE1BQU0sRUFBRSxvQkFBb0I7Z0JBQzVCLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7WUFDRDtnQkFDRSxNQUFNLEVBQUcsbUJBQW1CO2dCQUM1QixJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixJQUFJLEVBQUUsZ0VBQWdFO2FBQ3ZFO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLDBCQUEwQjtnQkFDbEMsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLHFEQUFxRDthQUM1RDtZQUNEO2dCQUNFLE1BQU0sRUFBRSwyQkFBMkI7Z0JBQ25DLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLElBQUksRUFBRSwyQ0FBMkM7YUFDbEQ7WUFDRDtnQkFDRSxNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQixJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QixJQUFJLEVBQUcsb0hBQW9IO2FBQzVIO1NBQ0YsQ0FBQztJQUtKLENBQUM7SUFIQyw2QkFBSSxHQUFKLFVBQUssSUFBSTtRQUNQLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQXBDVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csY0FBYyxDQXFDMUI7SUFBRCxxQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJBYm91dFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hYm91dC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiYWJvdXQuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcclxuICBhYm91dExpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgIHNvdXJjZTogXCJyZXM6Ly9uYXRpdmVfc2NyaXB0X2xvZ29cIixcclxuICAgICAgdGV4dDogXCJOYXRpdmVTY3JpcHQgdjMuNC4zXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc291cmNlOiBcInJlczovL2FuZ3VsYXJfbG9nb1wiLFxyXG4gICAgICB0ZXh0OiBcIkFuZ3VsYXIgdjUuMi4wXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9hbmd1bGFyLmlvL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzb3VyY2U6ICBcInJlczovL2dpdGh1Yl9sb2dvXCIsXHJcbiAgICAgIHRleHQ6IFwiUHJldXptaSBrw7NkIG5hIEdpdEh1YnVcIixcclxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbmlrb2xhODdrZy9uYXRpdmVzY3JpcHQtYW5ndWxhci1tZWV0dXAtZGVtb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzb3VyY2U6IFwicmVzOi8vbGlua2VkaW5fYmx1ZV9sb2dvXCIsXHJcbiAgICAgIHRleHQ6IFwiUXVhbnRveCBuYSBMaW5rZWRJbi11XCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvcXVhbnRveHRlY2hub2xvZ3kvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNvdXJjZTogXCJyZXM6Ly9saW5rZWRpbl9ibGFja19sb2dvXCIsXHJcbiAgICAgIHRleHQ6IFwiUG9zdGF2aXRlIHBpdGFuamVcIixcclxuICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmlrb2xhamVyZW1pY1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzb3VyY2U6IFwicmVzOi8vc2xpZGVzX2xvZ29cIixcclxuICAgICAgdGV4dDogXCJQb2dsZWRhaiBwcmV6ZW50YWNpanVcIixcclxuICAgICAgbGluazogIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vcHJlc2VudGF0aW9uL2QvMVI4S3NxZ1k5di1MeXNsbVZuLUJod1lzLVNCdUhrcUFDLUtoUVlwSWJRb2svZWRpdCNzbGlkZT1pZC5nMzgxM2E5ODJiY18wXzQ5XCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBnb1RvKGxpbmspIHtcclxuICAgIHV0aWxzLm9wZW5VcmwobGluayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==