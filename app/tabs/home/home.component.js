"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var app = require("tns-core-modules/application");
var dialogs = require("ui/dialogs");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.isPortrait = true;
        this.confirmDialogResult = new core_1.EventEmitter();
        this.onOrientationChanged = function (evt) {
            if (evt.newValue === "portrait") {
                return (_this.isPortrait = true);
            }
            return (_this.isPortrait = false);
        };
        moment.locale("sr");
        app.on("orientationChanged", this.onOrientationChanged);
    }
    HomeComponent.prototype.changeTab = function (index) {
        this.confirmDialogResult.emit(index);
    };
    HomeComponent.prototype.goToForm = function () {
        var _this = this;
        dialogs
            .confirm({
            title: "Anketa",
            message: "Da li želiš da pređeš na anketu?",
            okButtonText: "Nastavi",
            cancelButtonText: "Odustani"
        })
            .then(function (result) {
            if (result) {
                _this.changeTab(1);
            }
        });
    };
    HomeComponent.prototype.meetupCounter = function () {
        var meetupTime = moment([2018, 3, 12, 17, 3, 0]);
        var rightNow = moment();
        /* Total remaining units */
        var daysTotal = meetupTime.diff(rightNow, "days");
        var hoursTotal = meetupTime.diff(rightNow, "hours");
        var minutesTotal = meetupTime.diff(rightNow, "minutes");
        var secondsTotal = meetupTime.diff(rightNow, "seconds");
        /* Relative remaining units */
        var hoursLeft = daysTotal > 0 ? hoursTotal % (daysTotal * 24) : hoursTotal;
        var minutesLeft = hoursTotal > 0 ? minutesTotal % (hoursTotal * 60) : minutesTotal;
        var secondsLeft = minutesTotal > 0 ? secondsTotal % (minutesTotal * 60) : secondsTotal;
        /* Counter */
        this.timeDifference = secondsTotal > 0
            ? daysTotal + " dana " + hoursLeft + "h " + minutesLeft + "min " + secondsLeft + "s"
            : "Dobrodošli na KG Meetup";
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.meetupCounter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSwrQkFBaUM7QUFDakMsa0RBQW9EO0FBQ3BELG9DQUFzQztBQVF0QztJQU1FO1FBQUEsaUJBR0M7UUFQRCxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLHdCQUFtQixHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQU92RSx5QkFBb0IsR0FBRyxVQUFDLEdBQUc7WUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxNQUFNLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQTtRQVZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBVUQsaUNBQVMsR0FBVCxVQUFVLEtBQUs7UUFDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxPQUFPO2FBQ0osT0FBTyxDQUFDO1lBQ1AsS0FBSyxFQUFFLFFBQVE7WUFDZixPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGdCQUFnQixFQUFFLFVBQVU7U0FDN0IsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDRSxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDMUIsMkJBQTJCO1FBQzNCLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzFELDhCQUE4QjtRQUM5QixJQUFNLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUM3RSxJQUFNLFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNyRixJQUFNLFdBQVcsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUN6RixhQUFhO1FBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLEdBQUcsQ0FBQztZQUNsQyxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxNQUFNLEdBQUcsV0FBVyxHQUFHLEdBQUc7WUFDckYsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxXQUFXLENBQUM7WUFDVixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXhERDtRQURDLGFBQU0sRUFBRTtrQ0FDWSxtQkFBWTs4REFBc0M7SUFKNUQsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzs7T0FDVyxhQUFhLENBNkR6QjtJQUFELG9CQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRpbWVEaWZmZXJlbmNlOiBhbnk7XHJcbiAgaXNQb3J0cmFpdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQE91dHB1dCgpXHJcbiAgY29uZmlybURpYWxvZ1Jlc3VsdDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBtb21lbnQubG9jYWxlKFwic3JcIik7XHJcbiAgICBhcHAub24oXCJvcmllbnRhdGlvbkNoYW5nZWRcIiwgdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlZCk7XHJcbiAgfVxyXG5cclxuICBvbk9yaWVudGF0aW9uQ2hhbmdlZCA9IChldnQpID0+IHtcclxuICAgIGlmIChldnQubmV3VmFsdWUgPT09IFwicG9ydHJhaXRcIikge1xyXG4gICAgICByZXR1cm4gKHRoaXMuaXNQb3J0cmFpdCA9IHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodGhpcy5pc1BvcnRyYWl0ID0gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiKGluZGV4KSB7XHJcbiAgICB0aGlzLmNvbmZpcm1EaWFsb2dSZXN1bHQuZW1pdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBnb1RvRm9ybSgpIHtcclxuICAgIGRpYWxvZ3NcclxuICAgICAgLmNvbmZpcm0oe1xyXG4gICAgICAgIHRpdGxlOiBcIkFua2V0YVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiRGEgbGkgxb5lbGnFoSBkYSBwcmXEkWXFoSBuYSBhbmtldHU/XCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk5hc3RhdmlcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk9kdXN0YW5pXCJcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlVGFiKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBtZWV0dXBDb3VudGVyKCkge1xyXG4gICAgY29uc3QgbWVldHVwVGltZSA9IG1vbWVudChbMjAxOCwgMywgMTIsIDE3LCAzLCAwXSk7XHJcbiAgICBjb25zdCByaWdodE5vdyA9IG1vbWVudCgpO1xyXG4gICAgLyogVG90YWwgcmVtYWluaW5nIHVuaXRzICovXHJcbiAgICBjb25zdCBkYXlzVG90YWwgPSBtZWV0dXBUaW1lLmRpZmYocmlnaHROb3csIFwiZGF5c1wiKTtcclxuICAgIGNvbnN0IGhvdXJzVG90YWwgPSBtZWV0dXBUaW1lLmRpZmYocmlnaHROb3csIFwiaG91cnNcIik7XHJcbiAgICBjb25zdCBtaW51dGVzVG90YWwgPSBtZWV0dXBUaW1lLmRpZmYocmlnaHROb3csIFwibWludXRlc1wiKTtcclxuICAgIGNvbnN0IHNlY29uZHNUb3RhbCA9IG1lZXR1cFRpbWUuZGlmZihyaWdodE5vdywgXCJzZWNvbmRzXCIpO1xyXG4gICAgLyogUmVsYXRpdmUgcmVtYWluaW5nIHVuaXRzICovXHJcbiAgICBjb25zdCBob3Vyc0xlZnQgPSBkYXlzVG90YWwgPiAwID8gaG91cnNUb3RhbCAlIChkYXlzVG90YWwgKiAyNCkgOiBob3Vyc1RvdGFsO1xyXG4gICAgY29uc3QgbWludXRlc0xlZnQgPSBob3Vyc1RvdGFsID4gMCA/IG1pbnV0ZXNUb3RhbCAlIChob3Vyc1RvdGFsICogNjApIDogbWludXRlc1RvdGFsO1xyXG4gICAgY29uc3Qgc2Vjb25kc0xlZnQgPSBtaW51dGVzVG90YWwgPiAwID8gc2Vjb25kc1RvdGFsICUgKG1pbnV0ZXNUb3RhbCAqIDYwKSA6IHNlY29uZHNUb3RhbDtcclxuICAgIC8qIENvdW50ZXIgKi9cclxuICAgIHRoaXMudGltZURpZmZlcmVuY2UgPSBzZWNvbmRzVG90YWwgPiAwXHJcbiAgICAgICAgPyBkYXlzVG90YWwgKyBcIiBkYW5hIFwiICsgIGhvdXJzTGVmdCArIFwiaCBcIiArIG1pbnV0ZXNMZWZ0ICsgXCJtaW4gXCIgKyBzZWNvbmRzTGVmdCArIFwic1wiXHJcbiAgICAgICAgOiBcIkRvYnJvZG/FoWxpIG5hIEtHIE1lZXR1cFwiO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKTogdm9pZCA9PiB7XHJcbiAgICAgIHRoaXMubWVldHVwQ291bnRlcigpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==