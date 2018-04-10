"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jobs_service_1 = require("../../shared/services/jobs.service");
var JobsComponent = /** @class */ (function () {
    function JobsComponent(jobsService) {
        this.jobsService = jobsService;
        this.jobArray = [{
                "id": 1,
                "name": "FE developer",
                "city": "Kragujevac",
                "link": "https://quantox.com",
                "created_at": "2018-04-10 13:28:39",
                "updated_at": "2018-04-10 13:28:39"
            }];
    }
    JobsComponent.prototype.ngOnInit = function () {
        this.getJobs();
    };
    JobsComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobsService.getJobs().subscribe(function (response) {
            _this.jobArray = response.data;
        });
    };
    JobsComponent.prototype.onItemTap = function (args) {
        console.log("Go to link" + args.index);
    };
    JobsComponent = __decorate([
        core_1.Component({
            selector: "Jobs",
            moduleId: module.id,
            templateUrl: "./jobs.component.html",
            styleUrls: ["./jobs.component.scss"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [jobs_service_1.JobsService])
    ], JobsComponent);
    return JobsComponent;
}());
exports.JobsComponent = JobsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9icy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRixtRUFBaUU7QUFVakU7SUFXSSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFWNUMsYUFBUSxHQUFvQixDQUFDO2dCQUN6QixJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsY0FBYztnQkFDdEIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxxQkFBcUI7Z0JBQzdCLFlBQVksRUFBRSxxQkFBcUI7Z0JBQ25DLFlBQVksRUFBRSxxQkFBcUI7YUFDdEMsQ0FBQyxDQUFDO0lBSUgsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNoQyxVQUFDLFFBQVE7WUFDTCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQTVCUSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDO3lDQWFtQywwQkFBVztPQVhuQyxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSm9iTW9kZWwgfSBmcm9tIFwiLi9qb2JzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEpvYnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9qb2JzLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSm9ic1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vam9icy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2pvYnMuY29tcG9uZW50LnNjc3NcIl0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEpvYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgam9iQXJyYXk6IEFycmF5PEpvYk1vZGVsPiA9IFt7XHJcbiAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkZFIGRldmVsb3BlclwiLFxyXG4gICAgICAgIFwiY2l0eVwiOiBcIktyYWd1amV2YWNcIixcclxuICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3F1YW50b3guY29tXCIsXHJcbiAgICAgICAgXCJjcmVhdGVkX2F0XCI6IFwiMjAxOC0wNC0xMCAxMzoyODozOVwiLFxyXG4gICAgICAgIFwidXBkYXRlZF9hdFwiOiBcIjIwMTgtMDQtMTAgMTM6Mjg6MzlcIlxyXG4gICAgfV07XHJcbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpvYnNTZXJ2aWNlOiBKb2JzU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0Sm9icygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEpvYnMoKSB7XHJcbiAgICAgICAgdGhpcy5qb2JzU2VydmljZS5nZXRKb2JzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuam9iQXJyYXkgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR28gdG8gbGlua1wiICsgYXJncy5pbmRleCk7XHJcbiAgICB9XHJcbn1cclxuIl19