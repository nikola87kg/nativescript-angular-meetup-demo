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
        /* Fake Data */
        this.chartData = [
            { Country: "Nemacka", Amount: 1, Amount2: 15 },
            { Country: "Island", Amount: 2, Amount2: 12 },
            { Country: "Srbija", Amount: 3, Amount2: 12 }
        ];
        this.isValidEmail = function () {
            return validator.validate(this.emailField);
        };
    }
    SurveyComponent.prototype.printValue = function (value) {
        this.emailField = value;
    };
    /* Logic */
    SurveyComponent.prototype.ngOnInit = function () {
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
                _this.isFormSubmitted = AppSettings.getBoolean("formSubmitted");
                _this.surveyService.getSurveys('position').subscribe(function (stats) {
                    _this.positionStats = stats;
                    console.log(stats);
                    console.dir("dir", stats);
                });
            }, function (error) { console.log(error); });
        }
        else {
            this.isValidEmail() ?
                this.validationMessage = "* Morate popuniti sva polja" :
                this.validationMessage = "* Email nije validan";
            AppSettings.setBoolean("formSubmitted", false);
            this.isFormSubmitted = AppSettings.getBoolean("formSubmitted");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cnZleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFHbEYsa0RBQW9EO0FBRXBELHVFQUFxRTtBQUdyRSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFRN0M7SUE4REkseUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBN0RoRCxjQUFjO1FBQ2QsaUJBQVksR0FBVyxVQUFVLENBQUE7UUFLakMsd0JBQW1CLEdBQVcscUJBQXFCLENBQUM7UUFFcEQsa0JBQWEsR0FBa0I7WUFDM0IscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsWUFBWTtZQUNaLFNBQVM7U0FDWixDQUFDO1FBSUYseUJBQW9CLEdBQVcsd0JBQXdCLENBQUM7UUFDeEQsbUJBQWMsR0FBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUl4RSxvQkFBZSxHQUFXLHlCQUF5QixDQUFDO1FBQ3BELGNBQVMsR0FBa0I7WUFDdkIsYUFBYTtZQUNiLE9BQU87WUFDUCxPQUFPO1lBQ1AsT0FBTztZQUNQLFlBQVk7U0FDZixDQUFDO1FBSUYseUJBQW9CLEdBQVcseUJBQXlCLENBQUM7UUFDekQsbUJBQWMsR0FBa0I7WUFDNUIsU0FBUztZQUNULE9BQU87WUFDUCxLQUFLO1lBQ0wsc0JBQXNCO1lBQ3RCLHdCQUF3QjtTQUMzQixDQUFDO1FBRUYsV0FBVztRQUNYLHFCQUFnQixHQUFXLGVBQWUsQ0FBQztRQU8zQyxlQUFlO1FBQ2YsY0FBUyxHQUFHO1lBQ1IsRUFBQyxPQUFPLEVBQUUsU0FBUyxF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QUFDLENBQ0wsQ0FBQTtZQUNKLENBQUMsRUFDRixVQUFDLEtBQUssSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNyQyxDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyw2QkFBNkIsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsc0JBQXNCLENBQUM7WUFDaEQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxjQUFRLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFFTCxDQUFDO0lBakxRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBK0RxQyw4QkFBYTtPQTlEdkMsZUFBZSxDQW1MM0I7SUFBRCxzQkFBQztDQUFBLEFBbkxELElBbUxDO0FBbkxZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIEFwcFNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbmltcG9ydCB7IFN1cnZleVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3N1cnZleS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3JcIjtcclxuXHJcbmNvbnN0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU3VydmV5XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdXJ2ZXkuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zdXJ2ZXkuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1cnZleUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvKiBEZWZhdWx0cyAqL1xyXG4gICAgY2FuY2VsQnV0dG9uOiBzdHJpbmcgPSBcIk9kdXN0YW5pXCJcclxuICAgIGlzRm9ybVN1Ym1pdHRlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiBQb3NpdGlvbiAqL1xyXG4gICAgcG9zaXRpb25TZWxlY3RlZDogc3RyaW5nO1xyXG4gICAgcG9zaXRpb25QbGFjZWhvbGRlcjogc3RyaW5nID0gXCJJemFiZXJpIHBvemljaWp1Li4uXCI7XHJcbiAgICBwb3NpdGlvblN0YXRzOiBhbnk7XHJcbiAgICBwb3NpdGlvbkFycmF5OiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgIFwiRnVsbHN0YWNrIGRldmVsb3BlclwiLFxyXG4gICAgICAgIFwiRnJvbnRlbmQgZGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgXCJCYWNrZW5kIGRldmVsb3BlclwiLFxyXG4gICAgICAgIFwiRGl6YWpuZXJcIixcclxuICAgICAgICBcIkFuZHJvaWQgZGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgXCJTd2lmdCBkZXZlbG9wZXJcIixcclxuICAgICAgICBcIlByYWt0aWthbnRcIixcclxuICAgICAgICBcIlN0dWRlbnRcIlxyXG4gICAgXTtcclxuXHJcbiAgICAvKiBLbm93bGVkZ2UgKi9cclxuICAgIGtub3dsZWRnZVNlbGVjdGVkOiBzdHJpbmc7XHJcbiAgICBrbm93bGVkZ2VQbGFjZWhvbGRlcjogc3RyaW5nID0gXCJJemFiZXJpIG5pdm8gem5hbmphLi4uXCI7XHJcbiAgICBrbm93bGVkZ2VBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtcIlNlbmlvclwiLCBcIk1lZGlvclwiLCBcIkp1bmlvclwiLCBcIkRydWdvXCJdO1xyXG5cclxuICAgIC8qIFllYXJzICovXHJcbiAgICB5ZWFyU2VsZWN0ZWQ6IHN0cmluZztcclxuICAgIHllYXJQbGFjZWhvbGRlcjogc3RyaW5nID0gXCJJemFiZXJpIG9wc2VnIGdvZGluYS4uLlwiO1xyXG4gICAgeWVhckFycmF5OiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgIFwibWFuamUgb2QgMjVcIixcclxuICAgICAgICBcIjI2LTM1XCIsXHJcbiAgICAgICAgXCIzNi00NVwiLFxyXG4gICAgICAgIFwiNDYtNTVcIixcclxuICAgICAgICBcInZpxaFlIG9kIDU1XCJcclxuICAgIF07XHJcblxyXG4gICAgLyogRmF2b3VyaXRlIEpTIEZyYW1ld29yayAqL1xyXG4gICAgZnJhbWV3b3JrU2VsZWN0ZWQ6IHN0cmluZztcclxuICAgIGZyYW1ld29ya1BsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkl6YWJlcmkgSlMgZnJhbWV3b3JrLi4uXCI7XHJcbiAgICBmcmFtZXdvcmtBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICBcIkFuZ3VsYXJcIixcclxuICAgICAgICBcIlJlYWN0XCIsXHJcbiAgICAgICAgXCJWdWVcIixcclxuICAgICAgICBcIk5pamVkYW4gb2QgbmF2ZWRlbmloXCIsXHJcbiAgICAgICAgXCJOZSBrb3Jpc3RpbSBmcmFtZXdvcmtlXCJcclxuICAgIF07XHJcblxyXG4gICAgLyogRW1haWwgKi9cclxuICAgIGVtYWlsUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiVHZvaiBlbWFpbC4uLlwiO1xyXG4gICAgZW1haWxGaWVsZDogc3RyaW5nO1xyXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICAvKiBWYWxpZGF0aW9uICovXHJcbiAgICBpc0Zvcm1JbnZhbGlkOiBib29sZWFuO1xyXG5cclxuICAgIC8qIEZha2UgRGF0YSAqL1xyXG4gICAgY2hhcnREYXRhID0gW1xyXG4gICAgICAgIHtDb3VudHJ5OiBcIk5lbWFja2FcIiwgQW1vdW50OiAxLCBBbW91bnQyOiAxNX0sXHJcbiAgICAgICAge0NvdW50cnk6IFwiSXNsYW5kXCIsIEFtb3VudDogMiwgQW1vdW50MjogMTJ9LFxyXG4gICAgICAgIHtDb3VudHJ5OiBcIlNyYmlqYVwiLCBBbW91bnQ6IDMsIEFtb3VudDI6IDEyfVxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3VydmV5U2VydmljZTogU3VydmV5U2VydmljZSkge31cclxuXHJcblxyXG4gICAgcHJpbnRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZW1haWxGaWVsZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIExvZ2ljICovXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUG9zaXRpb25zKCkge1xyXG4gICAgICAgIGRpYWxvZ3NcclxuICAgICAgICAgICAgLmFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkl6YWJlcml0ZSBwb3ppY2lqdVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogdGhpcy5jYW5jZWxCdXR0b24sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLnBvc2l0aW9uQXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uU2VsZWN0ZWQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblBsYWNlaG9sZGVyID0gXCJPZGdvdm9yOiBcIiArIHRoaXMucG9zaXRpb25TZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbktub3dsZWRnZSgpIHtcclxuICAgICAgICBkaWFsb2dzXHJcbiAgICAgICAgICAgIC5hY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJemFiZXJpdGUgbml2byB6bmFuamFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY2FuY2VsQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogdGhpcy5rbm93bGVkZ2VBcnJheVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0aGlzLmNhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua25vd2xlZGdlU2VsZWN0ZWQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rbm93bGVkZ2VQbGFjZWhvbGRlciA9IFwiT2Rnb3ZvcjogXCIgKyB0aGlzLmtub3dsZWRnZVNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuWWVhclJhbmcoKSB7XHJcbiAgICAgICAgZGlhbG9nc1xyXG4gICAgICAgICAgICAuYWN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSXphYmVyaSBicm9qIGdvZGluYVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogdGhpcy5jYW5jZWxCdXR0b24sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLnllYXJBcnJheVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0aGlzLmNhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhclNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhclBsYWNlaG9sZGVyID0gXCJPZGdvdm9yOiBcIiArIHRoaXMueWVhclNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRnJhbWV3b3JrKCkge1xyXG4gICAgICAgIGRpYWxvZ3NcclxuICAgICAgICAgICAgLmFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkl6YWJlcmkgSlMgZnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMuZnJhbWV3b3JrQXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1ld29ya1NlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWV3b3JrUGxhY2Vob2xkZXIgPSBcIk9kZ292b3I6IFwiICsgdGhpcy5mcmFtZXdvcmtTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZEVtYWlsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmVtYWlsRmllbGQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBhbnN3ZXJzID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbEZpZWxkLFxyXG4gICAgICAgICAgICBmcmFtZXdvcms6IHRoaXMuZnJhbWV3b3JrU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHllYXJzOiB0aGlzLnllYXJTZWxlY3RlZCxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZTogdGhpcy5rbm93bGVkZ2VTZWxlY3RlZCxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb25TZWxlY3RlZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRFbWFpbCgpICYmXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWV3b3JrU2VsZWN0ZWQgJiZcclxuICAgICAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQgJiZcclxuICAgICAgICAgICAgdGhpcy5rbm93bGVkZ2VTZWxlY3RlZCAmJlxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uU2VsZWN0ZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zvcm1JbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3VydmV5U2VydmljZS5zdWJtaXRTdXJ2ZXlzKGFuc3dlcnMpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcFNldHRpbmdzLnNldEJvb2xlYW4oXCJmb3JtU3VibWl0dGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGb3JtU3VibWl0dGVkID0gQXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImZvcm1TdWJtaXR0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXJ2ZXlTZXJ2aWNlLmdldFN1cnZleXMoJ3Bvc2l0aW9uJykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdHMpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uU3RhdHMgPSBzdGF0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKFwiZGlyXCIsIHN0YXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRFbWFpbCgpID9cclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZSA9IFwiKiBNb3JhdGUgcG9wdW5pdGkgc3ZhIHBvbGphXCIgOlxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlID0gXCIqIEVtYWlsIG5pamUgdmFsaWRhblwiO1xyXG4gICAgICAgICAgICBBcHBTZXR0aW5ncy5zZXRCb29sZWFuKFwiZm9ybVN1Ym1pdHRlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGb3JtU3VibWl0dGVkID0gQXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImZvcm1TdWJtaXR0ZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGb3JtSW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmlzRm9ybUludmFsaWQgPSBmYWxzZTsgfSwgMzAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19