"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jobs_service_1 = require("../../shared/services/jobs.service");
var utils = require("utils/utils");
var JobsComponent = /** @class */ (function () {
    function JobsComponent(jobsService) {
        this.jobsService = jobsService;
    }
    JobsComponent.prototype.ngOnInit = function () {
        this.getJobs();
    };
    JobsComponent.prototype.goToWeb = function (link) {
        utils.openUrl(link);
    };
    JobsComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobsService.getJobs().subscribe(function (response) {
            _this.jobArray = response.data;
        }, function (error) {
            _this.jobArray = [{
                    id: 1,
                    name: "NativeScript developer",
                    city: "Kragujevac",
                    link: "https://quantox.com/careers",
                    created_at: "2018-04-10 13:28:39",
                    updated_at: "2018-04-10 13:28:39"
                }];
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9icy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRixtRUFBaUU7QUFHakUsbUNBQXFDO0FBVXJDO0lBSUksdUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzVDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDaEMsVUFBQyxRQUFRO1lBQ0wsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixLQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7b0JBQ2IsRUFBRSxFQUFFLENBQUM7b0JBQ0wsSUFBSSxFQUFFLHdCQUF3QjtvQkFDOUIsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLElBQUksRUFBRSw2QkFBNkI7b0JBQ25DLFVBQVUsRUFBRSxxQkFBcUI7b0JBQ2pDLFVBQVUsRUFBRSxxQkFBcUI7aUJBQ3BDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQS9CUSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDO3lDQU1tQywwQkFBVztPQUpuQyxhQUFhLENBZ0N6QjtJQUFELG9CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEpvYnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9qb2JzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSm9iTW9kZWwgfSBmcm9tIFwiLi9qb2JzLm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSm9ic1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vam9icy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2pvYnMuY29tcG9uZW50LnNjc3NcIl0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEpvYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgam9iQXJyYXk6IEFycmF5PEpvYk1vZGVsPjtcclxuICAgIHByaXZhdGUgY291bnRlcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgam9ic1NlcnZpY2U6IEpvYnNTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRKb2JzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1dlYihsaW5rKSB7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChsaW5rKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRKb2JzKCkge1xyXG4gICAgICAgIHRoaXMuam9ic1NlcnZpY2UuZ2V0Sm9icygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpvYkFycmF5ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpvYkFycmF5ID0gW3tcclxuICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk5hdGl2ZVNjcmlwdCBkZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBcIktyYWd1amV2YWNcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vcXVhbnRveC5jb20vY2FyZWVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxOC0wNC0xMCAxMzoyODozOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAxOC0wNC0xMCAxMzoyODozOVwiXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19