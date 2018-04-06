"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var dialogs = require("ui/dialogs");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.confirmDialogResult = new core_1.EventEmitter();
        moment.locale("sr");
    }
    HomeComponent.prototype.changeTab = function (index) {
        this.confirmDialogResult.emit(index);
    };
    HomeComponent.prototype.openPool = function () {
        var _this = this;
        dialogs.confirm({
            title: "Anketa",
            message: "Da li želiš da pređeš na anketu?",
            okButtonText: "Nastavi",
            cancelButtonText: "Odustani"
        }).then(function (result) {
            if (result) {
                _this.changeTab(1);
            }
        });
    };
    HomeComponent.prototype.openJobs = function () {
        var _this = this;
        dialogs.confirm({
            title: "Poslovi",
            message: "Da li želiš da pogledaš otvorene pozicije u Quantoxu?",
            okButtonText: "Nastavi",
            cancelButtonText: "Odustani"
        }).then(function (result) {
            if (result) {
                _this.changeTab(2);
            }
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            /* meetupTime & rightNow time */
            var meetupTime = moment([2018, 3, 12, 18]);
            var rightNow = moment().add(2, "hours");
            // const rightNow = moment([2018, 3, 12, 19]);
            /* Days remaining */
            var daysDifference = meetupTime.diff(rightNow, "days") > 0
                ? meetupTime.diff(rightNow, "days") + " dana "
                : "";
            /* Hours remaining */
            var hoursDifference = meetupTime.diff(rightNow, "hours") > 0
                ? meetupTime.diff(rightNow, "hours") %
                    meetupTime.diff(rightNow, "days") +
                    "h "
                : "";
            /* Minutes remaining */
            var minutesDifference = meetupTime.diff(rightNow, "minutes") > 0
                ? meetupTime.diff(rightNow, "minutes") %
                    meetupTime.diff(rightNow, "hours") +
                    "min "
                : "";
            /* Minutes remaining */
            var secondsDifference = meetupTime.diff(rightNow, "seconds") > 0
                ? meetupTime.diff(rightNow, "seconds") %
                    meetupTime.diff(rightNow, "minutes") +
                    "s "
                : "";
            _this.timeDifference =
                daysDifference +
                    hoursDifference +
                    minutesDifference +
                    secondsDifference;
        }, 1000);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HomeComponent.prototype, "confirmDialogResult", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSwrQkFBaUM7QUFFakMsb0NBQXNDO0FBUXRDO0lBSUU7UUFGVSx3QkFBbUIsR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFHL0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEtBQUs7UUFDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2QsS0FBSyxFQUFFLFFBQVE7WUFDZixPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGdCQUFnQixFQUFFLFVBQVU7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDYixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDZCxLQUFLLEVBQUUsU0FBUztZQUNoQixPQUFPLEVBQUUsdURBQXVEO1lBQ2hFLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGdCQUFnQixFQUFFLFVBQVU7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDYixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFzQ0M7UUFyQ0MsV0FBVyxDQUFDO1lBQ1YsZ0NBQWdDO1lBQ2hDLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMxQyw4Q0FBOEM7WUFDOUMsb0JBQW9CO1lBQ3BCLElBQU0sY0FBYyxHQUNsQixVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUTtnQkFDOUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNULHFCQUFxQjtZQUNyQixJQUFNLGVBQWUsR0FDbkIsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztvQkFDaEMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO29CQUNuQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVCx1QkFBdUI7WUFDdkIsSUFBTSxpQkFBaUIsR0FDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztvQkFDbEMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVCx1QkFBdUI7WUFDdkIsSUFBTSxpQkFBaUIsR0FDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztvQkFDbEMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO29CQUN0QyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVCxLQUFJLENBQUMsY0FBYztnQkFDakIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsaUJBQWlCLENBQUM7UUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXpFUztRQUFULGFBQU0sRUFBRTtrQ0FBc0IsbUJBQVk7OERBQXNDO0lBRnRFLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7O09BQ1csYUFBYSxDQTRFekI7SUFBRCxvQkFBQztDQUFBLEFBNUVELElBNEVDO0FBNUVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRpbWVEaWZmZXJlbmNlOiBhbnk7XHJcbiAgQE91dHB1dCgpIGNvbmZpcm1EaWFsb2dSZXN1bHQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbW9tZW50LmxvY2FsZShcInNyXCIpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiKGluZGV4KSB7XHJcbiAgICB0aGlzLmNvbmZpcm1EaWFsb2dSZXN1bHQuZW1pdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBvcGVuUG9vbCgpIHtcclxuICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiBcIkFua2V0YVwiLFxyXG4gICAgICBtZXNzYWdlOiBcIkRhIGxpIMW+ZWxpxaEgZGEgcHJlxJFlxaEgbmEgYW5rZXR1P1wiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiTmFzdGF2aVwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk9kdXN0YW5pXCJcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUYWIoMSk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICB9XHJcbiAgb3BlbkpvYnMoKSB7XHJcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogXCJQb3Nsb3ZpXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiRGEgbGkgxb5lbGnFoSBkYSBwb2dsZWRhxaEgb3R2b3JlbmUgcG96aWNpamUgdSBRdWFudG94dT9cIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIk5hc3RhdmlcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJPZHVzdGFuaVwiXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVGFiKDIpO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHNldEludGVydmFsKCgpOiB2b2lkID0+IHtcclxuICAgICAgLyogbWVldHVwVGltZSAmIHJpZ2h0Tm93IHRpbWUgKi9cclxuICAgICAgY29uc3QgbWVldHVwVGltZSA9IG1vbWVudChbMjAxOCwgMywgMTIsIDE4XSk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0Tm93ID0gbW9tZW50KCkuYWRkKDIsIFwiaG91cnNcIik7XHJcbiAgICAgIC8vIGNvbnN0IHJpZ2h0Tm93ID0gbW9tZW50KFsyMDE4LCAzLCAxMiwgMTldKTtcclxuICAgICAgLyogRGF5cyByZW1haW5pbmcgKi9cclxuICAgICAgY29uc3QgZGF5c0RpZmZlcmVuY2UgPVxyXG4gICAgICAgIG1lZXR1cFRpbWUuZGlmZihyaWdodE5vdywgXCJkYXlzXCIpID4gMFxyXG4gICAgICAgICAgPyBtZWV0dXBUaW1lLmRpZmYocmlnaHROb3csIFwiZGF5c1wiKSArIFwiIGRhbmEgXCJcclxuICAgICAgICAgIDogXCJcIjtcclxuICAgICAgLyogSG91cnMgcmVtYWluaW5nICovXHJcbiAgICAgIGNvbnN0IGhvdXJzRGlmZmVyZW5jZSA9XHJcbiAgICAgICAgbWVldHVwVGltZS5kaWZmKHJpZ2h0Tm93LCBcImhvdXJzXCIpID4gMFxyXG4gICAgICAgICAgPyBtZWV0dXBUaW1lLmRpZmYocmlnaHROb3csIFwiaG91cnNcIikgJVxyXG4gICAgICAgICAgICAgIG1lZXR1cFRpbWUuZGlmZihyaWdodE5vdywgXCJkYXlzXCIpICtcclxuICAgICAgICAgICAgXCJoIFwiXHJcbiAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgIC8qIE1pbnV0ZXMgcmVtYWluaW5nICovXHJcbiAgICAgIGNvbnN0IG1pbnV0ZXNEaWZmZXJlbmNlID1cclxuICAgICAgICBtZWV0dXBUaW1lLmRpZmYocmlnaHROb3csIFwibWludXRlc1wiKSA+IDBcclxuICAgICAgICAgID8gbWVldHVwVGltZS5kaWZmKHJpZ2h0Tm93LCBcIm1pbnV0ZXNcIikgJVxyXG4gICAgICAgICAgICAgIG1lZXR1cFRpbWUuZGlmZihyaWdodE5vdywgXCJob3Vyc1wiKSArXHJcbiAgICAgICAgICAgIFwibWluIFwiXHJcbiAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgIC8qIE1pbnV0ZXMgcmVtYWluaW5nICovXHJcbiAgICAgIGNvbnN0IHNlY29uZHNEaWZmZXJlbmNlID1cclxuICAgICAgICBtZWV0dXBUaW1lLmRpZmYocmlnaHROb3csIFwic2Vjb25kc1wiKSA+IDBcclxuICAgICAgICAgID8gbWVldHVwVGltZS5kaWZmKHJpZ2h0Tm93LCBcInNlY29uZHNcIikgJVxyXG4gICAgICAgICAgICAgIG1lZXR1cFRpbWUuZGlmZihyaWdodE5vdywgXCJtaW51dGVzXCIpICtcclxuICAgICAgICAgICAgXCJzIFwiXHJcbiAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgIHRoaXMudGltZURpZmZlcmVuY2UgPVxyXG4gICAgICAgIGRheXNEaWZmZXJlbmNlICtcclxuICAgICAgICBob3Vyc0RpZmZlcmVuY2UgK1xyXG4gICAgICAgIG1pbnV0ZXNEaWZmZXJlbmNlICtcclxuICAgICAgICBzZWNvbmRzRGlmZmVyZW5jZTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG4iXX0=