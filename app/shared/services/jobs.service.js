"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
var JobsService = /** @class */ (function () {
    function JobsService(http) {
        this.http = http;
        this.apiURL = "http://realtime-apps.quantox.tech/api/";
    }
    JobsService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    JobsService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    JobsService.prototype.getJobs = function () {
        return this.http.get(this.apiURL + "jobs/", { headers: this.getCommonHeaders() })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    JobsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], JobsService);
    return JobsService;
}());
exports.JobsService = JobsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9icy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiam9icy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLDhDQUE2QztBQUc3QztJQUlFLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUY5QixXQUFNLEdBQVcsd0NBQXdDLENBQUM7SUFFekIsQ0FBQztJQUVsQyxzQ0FBZ0IsR0FBaEI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7YUFDaEYsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNsQyxLQUFLLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUF2QlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUtlLFdBQUk7T0FKbkIsV0FBVyxDQXdCdkI7SUFBRCxrQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKb2JzU2VydmljZSB7XHJcblxyXG4gIGFwaVVSTDogc3RyaW5nID0gXCJodHRwOi8vcmVhbHRpbWUtYXBwcy5xdWFudG94LnRlY2gvYXBpL1wiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gIGdldENvbW1vbkhlYWRlcnMoKSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVycztcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG5cclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldEpvYnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVVSTCArIFwiam9icy9cIiwgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9KVxyXG4gICAgLm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5jYXRjaCAodGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxufVxyXG4iXX0=