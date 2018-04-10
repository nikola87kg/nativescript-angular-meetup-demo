"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var survey_service_1 = require("../../shared/services/survey.service");
var dialogs = require("ui/dialogs");
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(surveyService) {
        this.surveyService = surveyService;
        /* Defaults */
        this.cancelButton = "Odustani";
        this.positionPlaceholder = "Izaberi poziciju...";
        this.positionArray = [
            "Fullstack developer",
            "Frontend developer",
            "Backend developer",
            "Dizajner",
            "Android developer",
            "Swift developer",
            "Praktikant",
            "Student"
        ];
        this.knowledgePlaceholder = "Izaberi nivo znanja...";
        this.knowledgeArray = ["Senior", "Medior", "Junior", "Drugo"];
        this.yearPlaceholder = "Izaberi opseg godina...";
        this.yearArray = [
            "manje od 25",
            "26-35",
            "36-45",
            "46-55",
            "više od 55"
        ];
        this.frameworkPlaceholder = "Izaberi JS framework...";
        this.frameworkArray = [
            "Angular",
            "React",
            "Vue",
            "Nijedan od navedenih",
            "Ne koristim frameworke"
        ];
        /* Email */
        this.emailPlaceholder = "Tvoj email...";
    }
    /* Logic */
    SurveyComponent.prototype.openPositions = function () {
        var _this = this;
        dialogs
            .action({
            message: "Izaberite poziciju",
            cancelButtonText: this.cancelButton,
            actions: this.positionArray
        })
            .then(function (result) {
            if (result !== _this.cancelButton) {
                _this.positionSelected = result;
                _this.positionPlaceholder = "Odgovor: " + _this.positionSelected;
            }
        });
    };
    SurveyComponent.prototype.openKnowledge = function () {
        var _this = this;
        dialogs
            .action({
            message: "Izaberite nivo znanja",
            cancelButtonText: this.cancelButton,
            actions: this.knowledgeArray
        })
            .then(function (result) {
            if (result !== _this.cancelButton) {
                _this.knowledgeSelected = result;
                _this.knowledgePlaceholder = "Odgovor: " + _this.knowledgeSelected;
            }
        });
    };
    SurveyComponent.prototype.openYearRang = function () {
        var _this = this;
        dialogs
            .action({
            message: "Izaberi broj godina",
            cancelButtonText: this.cancelButton,
            actions: this.yearArray
        })
            .then(function (result) {
            if (result !== _this.cancelButton) {
                _this.yearSelected = result;
                _this.yearPlaceholder = "Odgovor: " + _this.yearSelected;
            }
        });
    };
    SurveyComponent.prototype.openFramework = function () {
        var _this = this;
        dialogs
            .action({
            message: "Izaberi JS framework",
            cancelButtonText: this.cancelButton,
            actions: this.frameworkArray
        })
            .then(function (result) {
            if (result !== _this.cancelButton) {
                _this.frameworkSelected = result;
                _this.frameworkPlaceholder = "Odgovor: " + _this.frameworkSelected;
            }
        });
    };
    SurveyComponent.prototype.postAnswers = function () {
        var _this = this;
        var answers = {
            email: this.email,
            framework: this.frameworkSelected,
            year: this.yearSelected,
            knowledge: this.knowledgeSelected,
            position: this.positionSelected
        };
        if (this.email &&
            this.frameworkSelected &&
            this.yearSelected &&
            this.knowledgeSelected &&
            this.positionSelected) {
            this.isFormInvalid = false;
            this.surveyService.submitSurveys(answers).subscribe(function (response) { console.log(response); }, function (error) { console.log(error); });
        }
        else {
            this.isFormInvalid = true;
            setTimeout(function () { _this.isFormInvalid = false; }, 3000);
        }
    };
    SurveyComponent = __decorate([
        core_1.Component({
            selector: "Survey",
            moduleId: module.id,
            templateUrl: "./survey.component.html",
            styleUrls: ["./survey.component.scss"]
        }),
        __metadata("design:paramtypes", [survey_service_1.SurveyService])
    ], SurveyComponent);
    return SurveyComponent;
}());
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cnZleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFFMUUsdUVBQXFFO0FBQ3JFLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQVF0QztJQW9ERSx5QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFuRGhELGNBQWM7UUFDZCxpQkFBWSxHQUFXLFVBQVUsQ0FBQztRQUlsQyx3QkFBbUIsR0FBVyxxQkFBcUIsQ0FBQztRQUNwRCxrQkFBYSxHQUFrQjtZQUM3QixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osU0FBUztTQUNWLENBQUM7UUFJRix5QkFBb0IsR0FBVyx3QkFBd0IsQ0FBQztRQUN4RCxtQkFBYyxHQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSXhFLG9CQUFlLEdBQVcseUJBQXlCLENBQUM7UUFDcEQsY0FBUyxHQUFrQjtZQUN6QixhQUFhO1lBQ2IsT0FBTztZQUNQLE9BQU87WUFDUCxPQUFPO1lBQ1AsWUFBWTtTQUNiLENBQUM7UUFJRix5QkFBb0IsR0FBVyx5QkFBeUIsQ0FBQztRQUN6RCxtQkFBYyxHQUFrQjtZQUM5QixTQUFTO1lBQ1QsT0FBTztZQUNQLEtBQUs7WUFDTCxzQkFBc0I7WUFDdEIsd0JBQXdCO1NBQ3pCLENBQUM7UUFFRixXQUFXO1FBQ1gscUJBQWdCLEdBQVcsZUFBZSxDQUFDO0lBTVEsQ0FBQztJQUVwRCxXQUFXO0lBQ1gsdUNBQWEsR0FBYjtRQUFBLGlCQWFDO1FBWkMsT0FBTzthQUNKLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsZ0JBQWdCLEVBQUUs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LElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDL0MsVUFBQyxRQUFRLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEMsVUFBQyxLQUFLLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckMsQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxjQUFRLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFFSCxDQUFDO0lBNUlVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBcURtQyw4QkFBYTtPQXBEckMsZUFBZSxDQThJM0I7SUFBRCxzQkFBQztDQUFBLEFBOUlELElBOElDO0FBOUlZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XHJcbmltcG9ydCB7IFN1cnZleVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N1cnZleS5zZXJ2aWNlXCI7XHJcbmNvbnN0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIlN1cnZleVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9zdXJ2ZXkuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vc3VydmV5LmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlDb21wb25lbnQge1xyXG4gIC8qIERlZmF1bHRzICovXHJcbiAgY2FuY2VsQnV0dG9uOiBzdHJpbmcgPSBcIk9kdXN0YW5pXCI7XHJcblxyXG4gIC8qIFBvc2l0aW9uICovXHJcbiAgcG9zaXRpb25TZWxlY3RlZDogc3RyaW5nO1xyXG4gIHBvc2l0aW9uUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiSXphYmVyaSBwb3ppY2lqdS4uLlwiO1xyXG4gIHBvc2l0aW9uQXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICBcIkZ1bGxzdGFjayBkZXZlbG9wZXJcIixcclxuICAgIFwiRnJvbnRlbmQgZGV2ZWxvcGVyXCIsXHJcbiAgICBcIkJhY2tlbmQgZGV2ZWxvcGVyXCIsXHJcbiAgICBcIkRpemFqbmVyXCIsXHJcbiAgICBcIkFuZHJvaWQgZGV2ZWxvcGVyXCIsXHJcbiAgICBcIlN3aWZ0IGRldmVsb3BlclwiLFxyXG4gICAgXCJQcmFrdGlrYW50XCIsXHJcbiAgICBcIlN0dWRlbnRcIlxyXG4gIF07XHJcblxyXG4gIC8qIEtub3dsZWRnZSAqL1xyXG4gIGtub3dsZWRnZVNlbGVjdGVkOiBzdHJpbmc7XHJcbiAga25vd2xlZGdlUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiSXphYmVyaSBuaXZvIHpuYW5qYS4uLlwiO1xyXG4gIGtub3dsZWRnZUFycmF5OiBBcnJheTxzdHJpbmc+ID0gW1wiU2VuaW9yXCIsIFwiTWVkaW9yXCIsIFwiSnVuaW9yXCIsIFwiRHJ1Z29cIl07XHJcblxyXG4gIC8qIFllYXJzICovXHJcbiAgeWVhclNlbGVjdGVkOiBzdHJpbmc7XHJcbiAgeWVhclBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkl6YWJlcmkgb3BzZWcgZ29kaW5hLi4uXCI7XHJcbiAgeWVhckFycmF5OiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgXCJtYW5qZSBvZCAyNVwiLFxyXG4gICAgXCIyNi0zNVwiLFxyXG4gICAgXCIzNi00NVwiLFxyXG4gICAgXCI0Ni01NVwiLFxyXG4gICAgXCJ2acWhZSBvZCA1NVwiXHJcbiAgXTtcclxuXHJcbiAgLyogRmF2b3VyaXRlIEpTIEZyYW1ld29yayAqL1xyXG4gIGZyYW1ld29ya1NlbGVjdGVkOiBzdHJpbmc7XHJcbiAgZnJhbWV3b3JrUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiSXphYmVyaSBKUyBmcmFtZXdvcmsuLi5cIjtcclxuICBmcmFtZXdvcmtBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgIFwiQW5ndWxhclwiLFxyXG4gICAgXCJSZWFjdFwiLFxyXG4gICAgXCJWdWVcIixcclxuICAgIFwiTmlqZWRhbiBvZCBuYXZlZGVuaWhcIixcclxuICAgIFwiTmUga29yaXN0aW0gZnJhbWV3b3JrZVwiXHJcbiAgXTtcclxuXHJcbiAgLyogRW1haWwgKi9cclxuICBlbWFpbFBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlR2b2ogZW1haWwuLi5cIjtcclxuICBlbWFpbDogc3RyaW5nO1xyXG5cclxuICAvKiBWYWxpZGF0aW9uICovXHJcbiAgaXNGb3JtSW52YWxpZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdXJ2ZXlTZXJ2aWNlOiBTdXJ2ZXlTZXJ2aWNlKSB7fVxyXG5cclxuICAvKiBMb2dpYyAqL1xyXG4gIG9wZW5Qb3NpdGlvbnMoKSB7XHJcbiAgICBkaWFsb2dzXHJcbiAgICAgIC5hY3Rpb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiSXphYmVyaXRlIHBvemljaWp1XCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogdGhpcy5jYW5jZWxCdXR0b24sXHJcbiAgICAgICAgYWN0aW9uczogdGhpcy5wb3NpdGlvbkFycmF5XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0aGlzLmNhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvblNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvblBsYWNlaG9sZGVyID0gXCJPZGdvdm9yOiBcIiArIHRoaXMucG9zaXRpb25TZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbktub3dsZWRnZSgpIHtcclxuICAgIGRpYWxvZ3NcclxuICAgICAgLmFjdGlvbih7XHJcbiAgICAgICAgbWVzc2FnZTogXCJJemFiZXJpdGUgbml2byB6bmFuamFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICBhY3Rpb25zOiB0aGlzLmtub3dsZWRnZUFycmF5XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0aGlzLmNhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgdGhpcy5rbm93bGVkZ2VTZWxlY3RlZCA9IHJlc3VsdDtcclxuICAgICAgICAgIHRoaXMua25vd2xlZGdlUGxhY2Vob2xkZXIgPSBcIk9kZ292b3I6IFwiICsgdGhpcy5rbm93bGVkZ2VTZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlblllYXJSYW5nKCkge1xyXG4gICAgZGlhbG9nc1xyXG4gICAgICAuYWN0aW9uKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkl6YWJlcmkgYnJvaiBnb2RpbmFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICBhY3Rpb25zOiB0aGlzLnllYXJBcnJheVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgIHRoaXMueWVhclNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgdGhpcy55ZWFyUGxhY2Vob2xkZXIgPSBcIk9kZ292b3I6IFwiICsgdGhpcy55ZWFyU2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5GcmFtZXdvcmsoKSB7XHJcbiAgICBkaWFsb2dzXHJcbiAgICAgIC5hY3Rpb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiSXphYmVyaSBKUyBmcmFtZXdvcmtcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICBhY3Rpb25zOiB0aGlzLmZyYW1ld29ya0FycmF5XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0aGlzLmNhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgdGhpcy5mcmFtZXdvcmtTZWxlY3RlZCA9IHJlc3VsdDtcclxuICAgICAgICAgIHRoaXMuZnJhbWV3b3JrUGxhY2Vob2xkZXIgPSBcIk9kZ292b3I6IFwiICsgdGhpcy5mcmFtZXdvcmtTZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcG9zdEFuc3dlcnMoKSB7XHJcbiAgICBjb25zdCBhbnN3ZXJzID0ge1xyXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgZnJhbWV3b3JrOiB0aGlzLmZyYW1ld29ya1NlbGVjdGVkLFxyXG4gICAgICB5ZWFyOiB0aGlzLnllYXJTZWxlY3RlZCxcclxuICAgICAga25vd2xlZGdlOiB0aGlzLmtub3dsZWRnZVNlbGVjdGVkLFxyXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvblNlbGVjdGVkXHJcbiAgICB9O1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmVtYWlsICYmXHJcbiAgICAgIHRoaXMuZnJhbWV3b3JrU2VsZWN0ZWQgJiZcclxuICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQgJiZcclxuICAgICAgdGhpcy5rbm93bGVkZ2VTZWxlY3RlZCAmJlxyXG4gICAgICB0aGlzLnBvc2l0aW9uU2VsZWN0ZWRcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaXNGb3JtSW52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VydmV5U2VydmljZS5zdWJtaXRTdXJ2ZXlzKGFuc3dlcnMpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7IGNvbnNvbGUubG9nKHJlc3BvbnNlKTsgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTsgfVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNGb3JtSW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuaXNGb3JtSW52YWxpZCA9IGZhbHNlOyB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=