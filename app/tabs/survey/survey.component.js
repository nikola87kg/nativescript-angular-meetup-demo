"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppSettings = require("application-settings");
var survey_service_1 = require("../../shared/services/survey.service");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var validator = require("email-validator");
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(surveyService, router) {
        this.surveyService = surveyService;
        this.router = router;
        /* Defaults */
        this.cancelButton = "Odustani";
        this.positionPlaceholder = "Izaberi poziciju...";
        this.positionStats = [{}];
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
        this.knowledgeStats = [{}];
        this.knowledgeArray = ["Senior", "Medior", "Junior", "Drugo"];
        this.yearPlaceholder = "Izaberi opseg godina...";
        this.yearStats = [{}];
        this.yearArray = [
            "manje od 25",
            "26-35",
            "36-45",
            "46-55",
            "više od 55"
        ];
        this.frameworkPlaceholder = "Izaberi JS framework...";
        this.frameworkStats = [{}];
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
    SurveyComponent.prototype.navigateToStats = function () {
        this.router.navigate(['/stats']);
    };
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
    SurveyComponent.prototype.switchSurvey = function () {
        this.isFormSubmitted = !this.isFormSubmitted;
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
                _this.navigateToStats();
            }, function (error) { console.log(error); });
        }
        else {
            this.isValidEmail() ?
                this.validationMessage = "* Morate popuniti sva polja" :
                this.validationMessage = "* Email nije validan";
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
        __metadata("design:paramtypes", [survey_service_1.SurveyService,
            router_1.Router])
    ], SurveyComponent);
    return SurveyComponent;
}());
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cnZleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFHbEYsa0RBQW9EO0FBRXBELHVFQUFxRTtBQUVyRSwwQ0FBeUM7QUFFekMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBUTdDO0lBMERJLHlCQUFvQixhQUE0QixFQUN4QyxNQUFjO1FBREYsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTFEdEIsY0FBYztRQUNkLGlCQUFZLEdBQVcsVUFBVSxDQUFDO1FBS2xDLHdCQUFtQixHQUFXLHFCQUFxQixDQUFDO1FBQ3BELGtCQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixrQkFBYSxHQUFrQjtZQUMzQixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osU0FBUztTQUNaLENBQUM7UUFJRix5QkFBb0IsR0FBVyx3QkFBd0IsQ0FBQztRQUN4RCxtQkFBYyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsbUJBQWMsR0FBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUl4RSxvQkFBZSxHQUFXLHlCQUF5QixDQUFDO1FBQ3BELGNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBa0I7WUFDdkIsYUFBYTtZQUNiLE9BQU87WUFDUCxPQUFPO1lBQ1AsT0FBTztZQUNQLFlBQVk7U0FDZixDQUFDO1FBSUYseUJBQW9CLEdBQVcseUJBQXlCLENBQUM7UUFDekQsbUJBQWMsR0FB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QUMxQixDQUFDLEVBQ0YsVUFBQyxLQUFLLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckMsQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsNkJBQTZCLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHNCQUFzQixDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxjQUFRLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFFTCxDQUFDO0lBbExRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBMkRxQyw4QkFBYTtZQUNoQyxlQUFNO09BM0RiLGVBQWUsQ0FvTDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBMRCxJQW9MQztBQXBMWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBBcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IFN1cnZleVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N1cnZleS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuY29uc3QgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTdXJ2ZXlcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N1cnZleS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3N1cnZleS5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VydmV5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8qIERlZmF1bHRzICovXHJcbiAgICBjYW5jZWxCdXR0b246IHN0cmluZyA9IFwiT2R1c3RhbmlcIjtcclxuICAgIGlzRm9ybVN1Ym1pdHRlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiBQb3NpdGlvbiAqL1xyXG4gICAgcG9zaXRpb25TZWxlY3RlZDogc3RyaW5nO1xyXG4gICAgcG9zaXRpb25QbGFjZWhvbGRlcjogc3RyaW5nID0gXCJJemFiZXJpIHBvemljaWp1Li4uXCI7XHJcbiAgICBwb3NpdGlvblN0YXRzID0gW3t9XTtcclxuICAgIHBvc2l0aW9uQXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICAgICAgXCJGdWxsc3RhY2sgZGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgXCJGcm9udGVuZCBkZXZlbG9wZXJcIixcclxuICAgICAgICBcIkJhY2tlbmQgZGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgXCJEaXpham5lclwiLFxyXG4gICAgICAgIFwiQW5kcm9pZCBkZXZlbG9wZXJcIixcclxuICAgICAgICBcIlN3aWZ0IGRldmVsb3BlclwiLFxyXG4gICAgICAgIFwiUHJha3Rpa2FudFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudFwiXHJcbiAgICBdO1xyXG5cclxuICAgIC8qIEtub3dsZWRnZSAqL1xyXG4gICAga25vd2xlZGdlU2VsZWN0ZWQ6IHN0cmluZztcclxuICAgIGtub3dsZWRnZVBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkl6YWJlcmkgbml2byB6bmFuamEuLi5cIjtcclxuICAgIGtub3dsZWRnZVN0YXRzID0gW3t9XTtcclxuICAgIGtub3dsZWRnZUFycmF5OiBBcnJheTxzdHJpbmc+ID0gW1wiU2VuaW9yXCIsIFwiTWVkaW9yXCIsIFwiSnVuaW9yXCIsIFwiRHJ1Z29cIl07XHJcblxyXG4gICAgLyogWWVhcnMgKi9cclxuICAgIHllYXJTZWxlY3RlZDogc3RyaW5nO1xyXG4gICAgeWVhclBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkl6YWJlcmkgb3BzZWcgZ29kaW5hLi4uXCI7XHJcbiAgICB5ZWFyU3RhdHMgPSBbe31dO1xyXG4gICAgeWVhckFycmF5OiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgIFwibWFuamUgb2QgMjVcIixcclxuICAgICAgICBcIjI2LTM1XCIsXHJcbiAgICAgICAgXCIzNi00NVwiLFxyXG4gICAgICAgIFwiNDYtNTVcIixcclxuICAgICAgICBcInZpxaFlIG9kIDU1XCJcclxuICAgIF07XHJcblxyXG4gICAgLyogRmF2b3VyaXRlIEpTIEZyYW1ld29yayAqL1xyXG4gICAgZnJhbWV3b3JrU2VsZWN0ZWQ6IHN0cmluZztcclxuICAgIGZyYW1ld29ya1BsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkl6YWJlcmkgSlMgZnJhbWV3b3JrLi4uXCI7XHJcbiAgICBmcmFtZXdvcmtTdGF0cyA9IFt7fV07XHJcbiAgICBmcmFtZXdvcmtBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICBcIkFuZ3VsYXJcIixcclxuICAgICAgICBcIlJlYWN0XCIsXHJcbiAgICAgICAgXCJWdWVcIixcclxuICAgICAgICBcIk5pamVkYW4gb2QgbmF2ZWRlbmloXCIsXHJcbiAgICAgICAgXCJOZSBrb3Jpc3RpbSBmcmFtZXdvcmtlXCJcclxuICAgIF07XHJcblxyXG4gICAgLyogRW1haWwgKi9cclxuICAgIGVtYWlsUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiVHZvaiBlbWFpbC4uLlwiO1xyXG4gICAgZW1haWxGaWVsZDogc3RyaW5nO1xyXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICAvKiBWYWxpZGF0aW9uICovXHJcbiAgICBpc0Zvcm1JbnZhbGlkOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3VydmV5U2VydmljZTogU3VydmV5U2VydmljZSwgXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICAgIG5hdmlnYXRlVG9TdGF0cygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGF0cyddKTtcclxuICAgICAgfVxyXG5cclxuICAgIHByaW50VmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmVtYWlsRmllbGQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0b3JhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFwcFNldHRpbmdzLmdldEJvb2xlYW4oXCJmb3JtU3VibWl0dGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIExvZ2ljICovXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlzRm9ybVN1Ym1pdHRlZCA9IHRoaXMuY2hlY2tTdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBvc2l0aW9ucygpIHtcclxuICAgICAgICBkaWFsb2dzXHJcbiAgICAgICAgICAgIC5hY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJemFiZXJpdGUgcG96aWNpanVcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY2FuY2VsQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogdGhpcy5wb3NpdGlvbkFycmF5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRoaXMuY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25QbGFjZWhvbGRlciA9IFwiT2Rnb3ZvcjogXCIgKyB0aGlzLnBvc2l0aW9uU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Lbm93bGVkZ2UoKSB7XHJcbiAgICAgICAgZGlhbG9nc1xyXG4gICAgICAgICAgICAuYWN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSXphYmVyaXRlIG5pdm8gem5hbmphXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMua25vd2xlZGdlQXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtub3dsZWRnZVNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua25vd2xlZGdlUGxhY2Vob2xkZXIgPSBcIk9kZ292b3I6IFwiICsgdGhpcy5rbm93bGVkZ2VTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblllYXJSYW5nKCkge1xyXG4gICAgICAgIGRpYWxvZ3NcclxuICAgICAgICAgICAgLmFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkl6YWJlcmkgYnJvaiBnb2RpbmFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY2FuY2VsQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogdGhpcy55ZWFyQXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJTZWxlY3RlZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJQbGFjZWhvbGRlciA9IFwiT2Rnb3ZvcjogXCIgKyB0aGlzLnllYXJTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZyYW1ld29yaygpIHtcclxuICAgICAgICBkaWFsb2dzXHJcbiAgICAgICAgICAgIC5hY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJemFiZXJpIEpTIGZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogdGhpcy5jYW5jZWxCdXR0b24sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLmZyYW1ld29ya0FycmF5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRoaXMuY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXdvcmtTZWxlY3RlZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1ld29ya1BsYWNlaG9sZGVyID0gXCJPZGdvdm9yOiBcIiArIHRoaXMuZnJhbWV3b3JrU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzd2l0Y2hTdXJ2ZXkoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Zvcm1TdWJtaXR0ZWQgPSAhdGhpcy5pc0Zvcm1TdWJtaXR0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZEVtYWlsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmVtYWlsRmllbGQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBhbnN3ZXJzID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbEZpZWxkLFxyXG4gICAgICAgICAgICBmcmFtZXdvcms6IHRoaXMuZnJhbWV3b3JrU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHllYXJzOiB0aGlzLnllYXJTZWxlY3RlZCxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZTogdGhpcy5rbm93bGVkZ2VTZWxlY3RlZCxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb25TZWxlY3RlZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRFbWFpbCgpICYmXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWV3b3JrU2VsZWN0ZWQgJiZcclxuICAgICAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQgJiZcclxuICAgICAgICAgICAgdGhpcy5rbm93bGVkZ2VTZWxlY3RlZCAmJlxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uU2VsZWN0ZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zvcm1JbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3VydmV5U2VydmljZS5zdWJtaXRTdXJ2ZXlzKGFuc3dlcnMpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcFNldHRpbmdzLnNldEJvb2xlYW4oXCJmb3JtU3VibWl0dGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb1N0YXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRFbWFpbCgpID9cclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZSA9IFwiKiBNb3JhdGUgcG9wdW5pdGkgc3ZhIHBvbGphXCIgOlxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlID0gXCIqIEVtYWlsIG5pamUgdmFsaWRhblwiO1xyXG4gICAgICAgICAgICB0aGlzLmlzRm9ybUludmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5pc0Zvcm1JbnZhbGlkID0gZmFsc2U7IH0sIDMwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==