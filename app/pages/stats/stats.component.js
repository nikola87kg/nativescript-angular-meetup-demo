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
            _this.positionStats = stats._body;
        }, function (error) {
            console.log("error:", error);
        });
        this.surveyService.getSurveys("framework").subscribe(function (stats) {
            _this.frameworkStats = stats._body;
        }, function (error) {
            console.log("error:", error);
        });
        this.surveyService.getSurveys("years").subscribe(function (stats) {
            _this.yearStats = stats._body;
        }, function (error) {
            console.log("error:", error);
        });
        this.surveyService.getSurveys("experience").subscribe(function (stats) {
            _this.knowledgeStats = stats._body;
        }, function (error) {
            console.log("error:", error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLHVFQUFxRTtBQVFyRTtJQU9FLHdCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUxoRCxtQkFBYyxHQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsa0JBQWEsR0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLGNBQVMsR0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLG1CQUFjLEdBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUdsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQWlDQztRQWhDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUMsS0FBSztZQUNKLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQ2xELFVBQUMsS0FBSztZQUNKLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQzlDLFVBQUMsS0FBSztZQUNKLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQ25ELFVBQUMsS0FBSztZQUNKLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBM0NVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7eUNBUW1DLDhCQUFhO09BUHJDLGNBQWMsQ0E0QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBTdXJ2ZXlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zdXJ2ZXkuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiU3RhdHNcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vc3RhdHMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInN0YXRzLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0c0NvbXBvbmVudCB7XHJcblxyXG4gIGZyYW1ld29ya1N0YXRzOiBBcnJheTxhbnk+ID0gW3t9XTtcclxuICBwb3NpdGlvblN0YXRzOiBBcnJheTxhbnk+ID0gW3t9XTtcclxuICB5ZWFyU3RhdHM6IEFycmF5PGFueT4gPSBbe31dO1xyXG4gIGtub3dsZWRnZVN0YXRzOiBBcnJheTxhbnk+ID0gW3t9XTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdXJ2ZXlTZXJ2aWNlOiBTdXJ2ZXlTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3VydmV5U2VydmljZS5nZXRTdXJ2ZXlzKFwicG9zaXRpb25cIikuc3Vic2NyaWJlKFxyXG4gICAgICAoc3RhdHMpID0+IHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhdHMgPSBzdGF0cy5fYm9keTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5zdXJ2ZXlTZXJ2aWNlLmdldFN1cnZleXMoXCJmcmFtZXdvcmtcIikuc3Vic2NyaWJlKFxyXG4gICAgICAoc3RhdHMpID0+IHtcclxuICAgICAgICB0aGlzLmZyYW1ld29ya1N0YXRzID0gc3RhdHMuX2JvZHk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3VydmV5U2VydmljZS5nZXRTdXJ2ZXlzKFwieWVhcnNcIikuc3Vic2NyaWJlKFxyXG4gICAgICAoc3RhdHMpID0+IHtcclxuICAgICAgICB0aGlzLnllYXJTdGF0cyA9IHN0YXRzLl9ib2R5O1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnN1cnZleVNlcnZpY2UuZ2V0U3VydmV5cyhcImV4cGVyaWVuY2VcIikuc3Vic2NyaWJlKFxyXG4gICAgICAoc3RhdHMpID0+IHtcclxuICAgICAgICB0aGlzLmtub3dsZWRnZVN0YXRzID0gc3RhdHMuX2JvZHk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19