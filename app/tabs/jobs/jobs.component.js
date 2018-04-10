"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jobs_service_1 = require("../../shared/services/jobs.service");
var JobsComponent = /** @class */ (function () {
    function JobsComponent(jobsService) {
        this.jobsService = jobsService;
        this.jobArray = [{
                id: 1,
                name: "FE developer",
                city: "Kragujevac",
                link: "https://quantox.com",
                created_at: "2018-04-10 13:28:39",
                updated_at: "2018-04-10 13:28:39"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9icy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUlsRixtRUFBaUU7QUFVakU7SUFXSSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFWNUMsYUFBUSxHQUFvQixDQUFDO2dCQUN6QixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLFVBQVUsRUFBRSxxQkFBcUI7Z0JBQ2pDLFVBQVUsRUFBRSxxQkFBcUI7YUFDcEMsQ0FBQyxDQUFDO0lBSUgsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNoQyxVQUFDLFFBQVE7WUFDTCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQTVCUSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDO3lDQWFtQywwQkFBVztPQVhuQyxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEpvYk1vZGVsIH0gZnJvbSBcIi4vam9icy5tb2RlbFwiO1xyXG5cclxuaW1wb3J0IHsgSm9ic1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2pvYnMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJKb2JzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9qb2JzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vam9icy5jb21wb25lbnQuc2Nzc1wiXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSm9ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBqb2JBcnJheTogQXJyYXk8Sm9iTW9kZWw+ID0gW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIkZFIGRldmVsb3BlclwiLFxyXG4gICAgICAgIGNpdHk6IFwiS3JhZ3VqZXZhY1wiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9xdWFudG94LmNvbVwiLFxyXG4gICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxOC0wNC0xMCAxMzoyODozOVwiLFxyXG4gICAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAxOC0wNC0xMCAxMzoyODozOVwiXHJcbiAgICB9XTtcclxuICAgIHByaXZhdGUgY291bnRlcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgam9ic1NlcnZpY2U6IEpvYnNTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRKb2JzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Sm9icygpIHtcclxuICAgICAgICB0aGlzLmpvYnNTZXJ2aWNlLmdldEpvYnMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2JBcnJheSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHbyB0byBsaW5rXCIgKyBhcmdzLmluZGV4KTtcclxuICAgIH1cclxufVxyXG4iXX0=