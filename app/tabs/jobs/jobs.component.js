"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jobs_service_1 = require("../../shared/services/jobs.service");
var utils = require("utils/utils");
var JobsComponent = /** @class */ (function () {
    function JobsComponent(jobsService) {
        this.jobsService = jobsService;
        this.jobArray = [{
                id: 0,
                name: "NativeScript developer",
                city: "Kragujevac",
                link: "https://quantox.com/careers",
                created_at: "2018-04-10 13:28:39",
                updated_at: "2018-04-10 13:28:39"
            }];
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
            _this.jobArray = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9icy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRixtRUFBaUU7QUFHakUsbUNBQXFDO0FBVXJDO0lBV0ksdUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVjVDLGFBQVEsR0FBb0IsQ0FBQztnQkFDekIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSw2QkFBNkI7Z0JBQ25DLFVBQVUsRUFBRSxxQkFBcUI7Z0JBQ2pDLFVBQVUsRUFBRSxxQkFBcUI7YUFDcEMsQ0FBQyxDQUFDO0lBSUgsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ2hDLFVBQUMsUUFBUTtZQUNMLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBL0JRLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7eUNBYW1DLDBCQUFXO09BWG5DLGFBQWEsQ0FnQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSm9ic1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2pvYnMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBKb2JNb2RlbCB9IGZyb20gXCIuL2pvYnMubW9kZWxcIjtcclxuXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJKb2JzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9qb2JzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vam9icy5jb21wb25lbnQuc2Nzc1wiXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSm9ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBqb2JBcnJheTogQXJyYXk8Sm9iTW9kZWw+ID0gW3tcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBuYW1lOiBcIk5hdGl2ZVNjcmlwdCBkZXZlbG9wZXJcIixcclxuICAgICAgICBjaXR5OiBcIktyYWd1amV2YWNcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vcXVhbnRveC5jb20vY2FyZWVyc1wiLFxyXG4gICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxOC0wNC0xMCAxMzoyODozOVwiLFxyXG4gICAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAxOC0wNC0xMCAxMzoyODozOVwiXHJcbiAgICB9XTtcclxuICAgIHByaXZhdGUgY291bnRlcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgam9ic1NlcnZpY2U6IEpvYnNTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRKb2JzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1dlYihsaW5rKSB7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChsaW5rKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRKb2JzKCkge1xyXG4gICAgICAgIHRoaXMuam9ic1NlcnZpY2UuZ2V0Sm9icygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpvYkFycmF5ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpvYkFycmF5ID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==