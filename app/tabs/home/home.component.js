"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.meetupStartTime = new Date("2018-04-12T17:00:00Z");
        this.thisMoment = new Date();
    }
    HomeComponent.prototype.calculateTime = function () {
        var _this = this;
        setInterval(function () {
            return _this.thisMoment - _this.meetupStartTime;
        }, 1000);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVFsRDtJQVdJO1FBVEEsb0JBQWUsR0FBUSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hELGVBQVUsR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDO0lBUzdCLENBQUM7SUFSRCxxQ0FBYSxHQUFiO1FBQUEsaUJBSUM7UUFIRyxXQUFXLENBQUM7WUFDUixNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFBO1FBQzdDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBTUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFmUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG1lZXR1cFN0YXJ0VGltZTphbnkgID0gbmV3IERhdGUoXCIyMDE4LTA0LTEyVDE3OjAwOjAwWlwiKTtcclxuICAgIHRoaXNNb21lbnQ6YW55ICA9IG5ldyBEYXRlKCk7XHJcbiAgICBjYWxjdWxhdGVUaW1lKCkgIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoaXNNb21lbnQgLSB0aGlzLm1lZXR1cFN0YXJ0VGltZVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIl19