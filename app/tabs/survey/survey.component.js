"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppSettings = require("application-settings");
var survey_service_1 = require("../../shared/services/survey.service");
var dialogs = require("ui/dialogs");
var validator = require("email-validator");
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
        this.isValidEmail = function () {
            return validator.validate(this.emailField);
        };
    }
    SurveyComponent.prototype.printValue = function (value) {
        this.emailField = value;
    };
    SurveyComponent.prototype.checkStorage = function () {
        return AppSettings.getBoolean("formSubmitted");
    };
    /* Logic */
    SurveyComponent.prototype.ngOnInit = function () {
        this.isFormSubmitted = this.checkStorage();
    };
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
    SurveyComponent.prototype.onSubmit = function () {
        var _this = this;
        var answers = {
            email: this.emailField,
            framework: this.frameworkSelected,
            years: this.yearSelected,
            experience: this.knowledgeSelected,
            position: this.positionSelected
        };
        if (this.isValidEmail() &&
            this.frameworkSelected &&
            this.yearSelected &&
            this.knowledgeSelected &&
            this.positionSelected) {
            this.isFormInvalid = false;
            this.surveyService.submitSurveys(answers).subscribe(function (response) {
                AppSettings.setBoolean("formSubmitted", true);
                _this.isFormSubmitted = _this.checkStorage();
                _this.surveyService.getSurveys("position").subscribe(function (stats) {
                    _this.positionStats = stats;
                });
                _this.surveyService.getSurveys("framework").subscribe(function (stats) {
                    _this.frameworkStats = stats;
                });
                _this.surveyService.getSurveys("years").subscribe(function (stats) {
                    _this.yearStats = stats;
                });
                _this.surveyService.getSurveys("experience").subscribe(function (stats) {
                    _this.knowledgeStats = stats;
                });
            }, function (error) { console.log(error); });
        }
        else {
            this.isValidEmail() ?
                this.validationMessage = "* Morate popuniti sva polja" :
                this.validationMessage = "* Email nije validan";
            AppSettings.setBoolean("formSubmitted", false);
            this.isFormSubmitted = this.checkStorage();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cnZleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFHbEYsa0RBQW9EO0FBRXBELHVFQUFxRTtBQUVyRSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFRN0M7SUEwREkseUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBekRoRCxjQUFjO1FBQ2QsaUJBQVksR0FBVyxVQUFVLENBQUM7UUFLbEMsd0JBQW1CLEdBQVcscUJBQXFCLENBQUM7UUFFcEQsa0JBQWEsR0FBa0I7WUFDM0IscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsWUFBWTtZQUNaLFNBQVM7U0FDWixDQUFDO1FBSUYseUJBQW9CLEdBQVcsd0JBQXdCLENBQUM7UUFFeEQsbUJBQWMsR0FBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUl4RSxvQkFBZSxHQUFXLHlCQUF5QixDQUFDO1FBRXBELGNBQVMsR0FBa0I7WUFDdkIsYUFBYTtZQUNiLE9BQU87WUFDUCxPQUFPO1lBQ1AsT0FBTztZQUNQLFlBQVk7U0FDZixDQUFDO1FBSUYseUJBQW9CLEdBQVcseUJBQXlCLENBQUM7UUFFekQsbUJBQWMsR0FBa0I7WUFDNUIsU0FBUztZQUNULE9BQU87WUFDUCxLQUFLO1lBQ0wsc0JBQXNCO1lBQ3RCLHdCQUF3QjtTQUMzQixDQUFDO1FBRUYsV0FBVztRQUNYLHFCQUFnQixHQUFXLGVBQWUsQ0FBQztRQWtGM0MsaUJBQVksR0FBRztZQUNYLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFD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b3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIEFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHsgU3VydmV5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvc3VydmV5LnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU3VydmV5XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdXJ2ZXkuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zdXJ2ZXkuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1cnZleUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvKiBEZWZhdWx0cyAqL1xyXG4gICAgY2FuY2VsQnV0dG9uOiBzdHJpbmcgPSBcIk9kdXN0YW5pXCI7XHJcbiAgICBpc0Zvcm1TdWJtaXR0ZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyogUG9zaXRpb24gKi9cclxuICAgIHBvc2l0aW9uU2VsZWN0ZWQ6IHN0cmluZztcclxuICAgIHBvc2l0aW9uUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiSXphYmVyaSBwb3ppY2lqdS4uLlwiO1xyXG4gICAgcG9zaXRpb25TdGF0czogb2JqZWN0O1xyXG4gICAgcG9zaXRpb25BcnJheTogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICBcIkZ1bGxzdGFjayBkZXZlbG9wZXJcIixcclxuICAgICAgICBcIkZyb250ZW5kIGRldmVsb3BlclwiLFxyXG4gICAgICAgIFwiQmFja2VuZCBkZXZlbG9wZXJcIixcclxuICAgICAgICBcIkRpemFqbmVyXCIsXHJcbiAgICAgICAgXCJBbmRyb2lkIGRldmVsb3BlclwiLFxyXG4gICAgICAgIFwiU3dpZnQgZGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgXCJQcmFrdGlrYW50XCIsXHJcbiAgICAgICAgXCJTdHVkZW50XCJcclxuICAgIF07XHJcblxyXG4gICAgLyogS25vd2xlZGdlICovXHJcbiAgICBrbm93bGVkZ2VTZWxlY3RlZDogc3RyaW5nO1xyXG4gICAga25vd2xlZGdlUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiSXphYmVyaSBuaXZvIHpuYW5qYS4uLlwiO1xyXG4gICAga25vd2xlZGdlU3RhdHM6IG9iamVjdDtcclxuICAgIGtub3dsZWRnZUFycmF5OiBBcnJheTxzdHJpbmc+ID0gW1wiU2VuaW9yXCIsIFwiTWVkaW9yXCIsIFwiSnVuaW9yXCIsIFwiRHJ1Z29cIl07XHJcblxyXG4gICAgLyogWWVhcnMgKi9cclxuICAgIHllYXJTZWxlY3RlZDogc3RyaW5nO1xyXG4gICAgeWVhclBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkl6YWJlcmkgb3BzZWcgZ29kaW5hLi4uXCI7XHJcbiAgICB5ZWFyU3RhdHM6IG9iamVjdDtcclxuICAgIHllYXJBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICBcIm1hbmplIG9kIDI1XCIsXHJcbiAgICAgICAgXCIyNi0zNVwiLFxyXG4gICAgICAgIFwiMzYtNDVcIixcclxuICAgICAgICBcIjQ2LTU1XCIsXHJcbiAgICAgICAgXCJ2acWhZSBvZCA1NVwiXHJcbiAgICBdO1xyXG5cclxuICAgIC8qIEZhdm91cml0ZSBKUyBGcmFtZXdvcmsgKi9cclxuICAgIGZyYW1ld29ya1NlbGVjdGVkOiBzdHJpbmc7XHJcbiAgICBmcmFtZXdvcmtQbGFjZWhvbGRlcjogc3RyaW5nID0gXCJJemFiZXJpIEpTIGZyYW1ld29yay4uLlwiO1xyXG4gICAgZnJhbWV3b3JrU3RhdHM6IG9iamVjdDtcclxuICAgIGZyYW1ld29ya0FycmF5OiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgIFwiQW5ndWxhclwiLFxyXG4gICAgICAgIFwiUmVhY3RcIixcclxuICAgICAgICBcIlZ1ZVwiLFxyXG4gICAgICAgIFwiTmlqZWRhbiBvZCBuYXZlZGVuaWhcIixcclxuICAgICAgICBcIk5lIGtvcmlzdGltIGZyYW1ld29ya2VcIlxyXG4gICAgXTtcclxuXHJcbiAgICAvKiBFbWFpbCAqL1xyXG4gICAgZW1haWxQbGFjZWhvbGRlcjogc3RyaW5nID0gXCJUdm9qIGVtYWlsLi4uXCI7XHJcbiAgICBlbWFpbEZpZWxkOiBzdHJpbmc7XHJcbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIC8qIFZhbGlkYXRpb24gKi9cclxuICAgIGlzRm9ybUludmFsaWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdXJ2ZXlTZXJ2aWNlOiBTdXJ2ZXlTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHByaW50VmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmVtYWlsRmllbGQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0b3JhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFwcFNldHRpbmdzLmdldEJvb2xlYW4oXCJmb3JtU3VibWl0dGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIExvZ2ljICovXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlzRm9ybVN1Ym1pdHRlZCA9IHRoaXMuY2hlY2tTdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBvc2l0aW9ucygpIHtcclxuICAgICAgICBkaWFsb2dzXHJcbiAgICAgICAgICAgIC5hY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJemFiZXJpdGUgcG96aWNpanVcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY2FuY2VsQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogdGhpcy5wb3NpdGlvbkFycmF5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRoaXMuY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25QbGFjZWhvbGRlciA9IFwiT2Rnb3ZvcjogXCIgKyB0aGlzLnBvc2l0aW9uU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Lbm93bGVkZ2UoKSB7XHJcbiAgICAgICAgZGlhbG9nc1xyXG4gICAgICAgICAgICAuYWN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSXphYmVyaXRlIG5pdm8gem5hbmphXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMua25vd2xlZGdlQXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtub3dsZWRnZVNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua25vd2xlZGdlUGxhY2Vob2xkZXIgPSBcIk9kZ292b3I6IFwiICsgdGhpcy5rbm93bGVkZ2VTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblllYXJSYW5nKCkge1xyXG4gICAgICAgIGRpYWxvZ3NcclxuICAgICAgICAgICAgLmFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkl6YWJlcmkgYnJvaiBnb2RpbmFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY2FuY2VsQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogdGhpcy55ZWFyQXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJTZWxlY3RlZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJQbGFjZWhvbGRlciA9IFwiT2Rnb3ZvcjogXCIgKyB0aGlzLnllYXJTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZyYW1ld29yaygpIHtcclxuICAgICAgICBkaWFsb2dzXHJcbiAgICAgICAgICAgIC5hY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJemFiZXJpIEpTIGZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogdGhpcy5jYW5jZWxCdXR0b24sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLmZyYW1ld29ya0FycmF5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRoaXMuY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXdvcmtTZWxlY3RlZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1ld29ya1BsYWNlaG9sZGVyID0gXCJPZGdvdm9yOiBcIiArIHRoaXMuZnJhbWV3b3JrU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRFbWFpbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbEZpZWxkKTtcclxuICAgIH07XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VycyA9IHtcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWxGaWVsZCxcclxuICAgICAgICAgICAgZnJhbWV3b3JrOiB0aGlzLmZyYW1ld29ya1NlbGVjdGVkLFxyXG4gICAgICAgICAgICB5ZWFyczogdGhpcy55ZWFyU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIGV4cGVyaWVuY2U6IHRoaXMua25vd2xlZGdlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uU2VsZWN0ZWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkRW1haWwoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmZyYW1ld29ya1NlbGVjdGVkICYmXHJcbiAgICAgICAgICAgIHRoaXMueWVhclNlbGVjdGVkICYmXHJcbiAgICAgICAgICAgIHRoaXMua25vd2xlZGdlU2VsZWN0ZWQgJiZcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblNlbGVjdGVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGb3JtSW52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleVNlcnZpY2Uuc3VibWl0U3VydmV5cyhhbnN3ZXJzKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBcHBTZXR0aW5ncy5zZXRCb29sZWFuKFwiZm9ybVN1Ym1pdHRlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRm9ybVN1Ym1pdHRlZCA9IHRoaXMuY2hlY2tTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJ2ZXlTZXJ2aWNlLmdldFN1cnZleXMoXCJwb3NpdGlvblwiKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblN0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cnZleVNlcnZpY2UuZ2V0U3VydmV5cyhcImZyYW1ld29ya1wiKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXdvcmtTdGF0cyA9IHN0YXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJ2ZXlTZXJ2aWNlLmdldFN1cnZleXMoXCJ5ZWFyc1wiKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyU3RhdHMgPSBzdGF0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VydmV5U2VydmljZS5nZXRTdXJ2ZXlzKFwiZXhwZXJpZW5jZVwiKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rbm93bGVkZ2VTdGF0cyA9IHN0YXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRFbWFpbCgpID9cclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZSA9IFwiKiBNb3JhdGUgcG9wdW5pdGkgc3ZhIHBvbGphXCIgOlxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlID0gXCIqIEVtYWlsIG5pamUgdmFsaWRhblwiO1xyXG4gICAgICAgICAgICBBcHBTZXR0aW5ncy5zZXRCb29sZWFuKFwiZm9ybVN1Ym1pdHRlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGb3JtU3VibWl0dGVkID0gdGhpcy5jaGVja1N0b3JhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pc0Zvcm1JbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuaXNGb3JtSW52YWxpZCA9IGZhbHNlOyB9LCAzMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=