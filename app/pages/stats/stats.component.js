"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var survey_service_1 = require("../../shared/services/survey.service");
var StatsComponent = /** @class */ (function () {
    function StatsComponent(surveyService) {
        this.surveyService = surveyService;
        this.frameworkStats = [{}];
        this.positionStats = [{}];
        this.yearStats = [{}];
        this.knowledgeStats = [{}];
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyService.getSurveys("position").subscribe(function (stats) {
            console.dir(stats);
            _this.positionStats = stats;
        }, function (error) {
            console.dir("error is:", error);
            console.log("error is:", error);
        });
        this.surveyService.getSurveys("framework").subscribe(function (stats) {
            _this.frameworkStats = stats;
        });
        this.surveyService.getSurveys("years").subscribe(function (stats) {
            _this.yearStats = stats;
        });
        this.surveyService.getSurveys("experience").subscribe(function (stats) {
            _this.knowledgeStats = stats;
        });
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: "Stats",
            moduleId: module.id,
            templateUrl: "./stats.component.html",
            styleUrls: ["stats.component.scss"]
        }),
        __metadata("design:paramtypes", [survey_service_1.SurveyService])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLHVFQUFxRTtBQVFyRTtJQU9FLHdCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUxoRCxtQkFBYyxHQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsa0JBQWEsR0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLGNBQVMsR0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLG1CQUFjLEdBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVpQixDQUFDO0lBRXBELGlDQUFRLEdBQVI7UUFBQSxpQkEwQkM7UUF6QkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDbEQsVUFBQyxLQUFLO1lBQ0osS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQzlDLFVBQUMsS0FBSztZQUNKLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUNuRCxVQUFDLEtBQUs7WUFDSixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFuQ1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FRbUMsOEJBQWE7T0FQckMsY0FBYyxDQW9DMUI7SUFBRCxxQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IFN1cnZleVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N1cnZleS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJTdGF0c1wiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9zdGF0cy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wic3RhdHMuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXRzQ29tcG9uZW50IHtcclxuXHJcbiAgZnJhbWV3b3JrU3RhdHM6IEFycmF5PGFueT4gPSBbe31dO1xyXG4gIHBvc2l0aW9uU3RhdHM6IEFycmF5PGFueT4gPSBbe31dO1xyXG4gIHllYXJTdGF0czogQXJyYXk8YW55PiA9IFt7fV07XHJcbiAga25vd2xlZGdlU3RhdHM6IEFycmF5PGFueT4gPSBbe31dO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN1cnZleVNlcnZpY2U6IFN1cnZleVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdXJ2ZXlTZXJ2aWNlLmdldFN1cnZleXMoXCJwb3NpdGlvblwiKS5zdWJzY3JpYmUoXHJcbiAgICAgIChzdGF0cykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKHN0YXRzKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhdHMgPSBzdGF0cztcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5kaXIoXCJlcnJvciBpczpcIiwgZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaXM6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3VydmV5U2VydmljZS5nZXRTdXJ2ZXlzKFwiZnJhbWV3b3JrXCIpLnN1YnNjcmliZShcclxuICAgICAgKHN0YXRzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mcmFtZXdvcmtTdGF0cyA9IHN0YXRzO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5zdXJ2ZXlTZXJ2aWNlLmdldFN1cnZleXMoXCJ5ZWFyc1wiKS5zdWJzY3JpYmUoXHJcbiAgICAgIChzdGF0cykgPT4ge1xyXG4gICAgICAgIHRoaXMueWVhclN0YXRzID0gc3RhdHM7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnN1cnZleVNlcnZpY2UuZ2V0U3VydmV5cyhcImV4cGVyaWVuY2VcIikuc3Vic2NyaWJlKFxyXG4gICAgICAoc3RhdHMpID0+IHtcclxuICAgICAgICB0aGlzLmtub3dsZWRnZVN0YXRzID0gc3RhdHM7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==