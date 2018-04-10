"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
        /* Defaults */
        this.cancelButton = "Odustani";
        this.positionPlaceholder = "Izaberi poziciju...";
        this.positionArray = [
            'Fullstack developer',
            'Frontend developer',
            'Backend developer',
            'Designer',
            'Android developer',
            'Swift developer',
            'Intern',
            'Student'
        ];
        this.knowledgePlaceholder = "Izaberi nivo znanja...";
        this.knowledgeArray = [
            'Senior',
            'Medior',
            'Junior',
            'Učenik'
        ];
        this.yearPlaceholder = "Izaberi opseg godina...";
        this.yearArray = [
            '<20',
            '21-25',
            '26-30',
            '31-35',
            '36-40',
            '41-45',
            '46-50',
            '55-60',
            '>61',
        ];
        this.frameworkPlaceholder = "Izaberi JS framework...";
        this.frameworkArray = [
            'Angular',
            'ReactJS',
            'VueJS',
            'Neki drugi',
            'Nijedan'
        ];
    }
    SurveyComponent.prototype.openPositions = function () {
        var _this = this;
        dialogs.action({
            message: "Izaberite poziciju",
            cancelButtonText: this.cancelButton,
            actions: this.positionArray
        }).then(function (result) {
            if (result !== _this.cancelButton) {
                _this.positionSelected = result;
                _this.positionPlaceholder = "Odgovor: " + _this.positionSelected;
            }
        });
    };
    ;
    SurveyComponent.prototype.openKnowledge = function () {
        var _this = this;
        dialogs.action({
            message: "Izaberite nivo znanja",
            cancelButtonText: this.cancelButton,
            actions: this.knowledgeArray
        }).then(function (result) {
            if (result !== _this.cancelButton) {
                _this.knowledgeSelected = result;
                _this.knowledgePlaceholder = "Odgovor: " + _this.knowledgeSelected;
            }
        });
    };
    ;
    SurveyComponent.prototype.openYearRang = function () {
        var _this = this;
        dialogs.action({
            message: "Izaberi broj godina",
            cancelButtonText: this.cancelButton,
            actions: this.yearArray
        }).then(function (result) {
            if (result !== _this.cancelButton) {
                _this.yearSelected = result;
                _this.yearPlaceholder = "Odgovor: " + _this.yearSelected;
            }
        });
    };
    ;
    SurveyComponent.prototype.openFramework = function () {
        var _this = this;
        dialogs.action({
            message: "Izaberi JS framework",
            cancelButtonText: this.cancelButton,
            actions: this.frameworkArray
        }).then(function (result) {
            if (result !== _this.cancelButton) {
                _this.frameworkSelected = result;
                _this.frameworkPlaceholder = "Odgovor: " + _this.frameworkSelected;
            }
        });
    };
    ;
    SurveyComponent = __decorate([
        core_1.Component({
            selector: "Survey",
            moduleId: module.id,
            templateUrl: "./survey.component.html",
            styleUrls: ["./survey.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], SurveyComponent);
    return SurveyComponent;
}());
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cnZleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFFMUUsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBUXBDO0lBb0RJO1FBbERBLGNBQWM7UUFDZCxpQkFBWSxHQUFVLFVBQVUsQ0FBQztRQUlqQyx3QkFBbUIsR0FBVyxxQkFBcUIsQ0FBQztRQUNwRCxrQkFBYSxHQUFrQjtZQUMzQixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixRQUFRO1lBQ1IsU0FBUztTQUNaLENBQUM7UUFHRix5QkFBb0IsR0FBVyx3QkFBd0IsQ0FBQztRQUN4RCxtQkFBYyxHQUFrQjtZQUM1QixRQUFRO1lBQ1IsUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1NBQ1gsQ0FBQztRQUdGLG9CQUFlLEdBQVcseUJBQXlCLENBQUM7UUFDcEQsY0FBUyxHQUFrQjtZQUN2QixLQUFLO1lBQ0wsT0FBTztZQUNQLE9BQU87WUFDUCxPQUFPO1lBQ1AsT0FBTztZQUNQLE9BQU87WUFDUCxPQUFPO1lBQ1AsT0FBTztZQUNQLEtBQUs7U0FDUixDQUFDO1FBR0YseUJBQW9CLEdBQVcseUJBQXlCLENBQUM7UUFDekQsbUJBQWMsR0FBa0I7WUFDNUIsU0FBUztZQUNULFNBQVM7WUFDVCxPQUFPO1lBQ1AsWUFBWTtZQUNaLFNBQVM7U0FDWixDQUFDO0lBR0YsQ0FBQztJQUVELHVDQUFhLEdBQWI7UUFBQSxpQkFXQztRQVZHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTtTQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLEVBQUUsQ0FBQSxDQUFDLE1BQU0sS0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztnQkFDL0IsS0FBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUU7WUFDcEUsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUFBLENBQUM7SUFFRix1Q0FBYSxHQUFiO1FBQUEsaUJBV0M7UUFWRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixFQUFFLENBQUEsQ0FBQyxNQUFNLEtBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFFO1lBQ3RFLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFBQSxDQUFDO0lBRUYsc0NBQVksR0FBWjtRQUFBLGlCQVdDO1FBVkcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDbkMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsRUFBRSxDQUFBLENBQUMsTUFBTSxLQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDM0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBRTtZQUM1RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQUEsQ0FBQztJQUVGLHVDQUFhLEdBQWI7UUFBQSxpQkFXQztRQVZHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYztTQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLEVBQUUsQ0FBQSxDQUFDLE1BQU0sS0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztnQkFDaEMsS0FBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUU7WUFDdEUsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUFBLENBQUM7SUF6R08sZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzs7T0FDVyxlQUFlLENBMEczQjtJQUFELHNCQUFDO0NBQUEsQUExR0QsSUEwR0M7QUExR1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcclxudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU3VydmV5XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdXJ2ZXkuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zdXJ2ZXkuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1cnZleUNvbXBvbmVudCB7XHJcblxyXG4gICAgLyogRGVmYXVsdHMgKi9cclxuICAgIGNhbmNlbEJ1dHRvbjpzdHJpbmcgPSBcIk9kdXN0YW5pXCI7XHJcblxyXG4gICAgLyogUG9zaXRpb24gKi9cclxuICAgIHBvc2l0aW9uU2VsZWN0ZWQ6IHN0cmluZztcclxuICAgIHBvc2l0aW9uUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiSXphYmVyaSBwb3ppY2lqdS4uLlwiO1xyXG4gICAgcG9zaXRpb25BcnJheTogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICAnRnVsbHN0YWNrIGRldmVsb3BlcicsXHJcbiAgICAgICAgJ0Zyb250ZW5kIGRldmVsb3BlcicsXHJcbiAgICAgICAgJ0JhY2tlbmQgZGV2ZWxvcGVyJyxcclxuICAgICAgICAnRGVzaWduZXInLFxyXG4gICAgICAgICdBbmRyb2lkIGRldmVsb3BlcicsXHJcbiAgICAgICAgJ1N3aWZ0IGRldmVsb3BlcicsXHJcbiAgICAgICAgJ0ludGVybicsXHJcbiAgICAgICAgJ1N0dWRlbnQnXHJcbiAgICBdO1xyXG4gICAgLyogS25vd2xlZGdlICovXHJcbiAgICBrbm93bGVkZ2VTZWxlY3RlZDogc3RyaW5nO1xyXG4gICAga25vd2xlZGdlUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiSXphYmVyaSBuaXZvIHpuYW5qYS4uLlwiO1xyXG4gICAga25vd2xlZGdlQXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICAgICAgJ1NlbmlvcicsXHJcbiAgICAgICAgJ01lZGlvcicsXHJcbiAgICAgICAgJ0p1bmlvcicsXHJcbiAgICAgICAgJ1XEjWVuaWsnXHJcbiAgICBdO1xyXG4gICAgLyogWWVhcnMgKi9cclxuICAgIHllYXJTZWxlY3RlZDogc3RyaW5nO1xyXG4gICAgeWVhclBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkl6YWJlcmkgb3BzZWcgZ29kaW5hLi4uXCI7XHJcbiAgICB5ZWFyQXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICAgICAgJzwyMCcsXHJcbiAgICAgICAgJzIxLTI1JyxcclxuICAgICAgICAnMjYtMzAnLFxyXG4gICAgICAgICczMS0zNScsXHJcbiAgICAgICAgJzM2LTQwJyxcclxuICAgICAgICAnNDEtNDUnLFxyXG4gICAgICAgICc0Ni01MCcsXHJcbiAgICAgICAgJzU1LTYwJyxcclxuICAgICAgICAnPjYxJyxcclxuICAgIF07XHJcbiAgICAvKiBGYXZvdXJpdGUgSlMgRnJhbWV3b3JrICovXHJcbiAgICBmcmFtZXdvcmtTZWxlY3RlZDogc3RyaW5nO1xyXG4gICAgZnJhbWV3b3JrUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiSXphYmVyaSBKUyBmcmFtZXdvcmsuLi5cIjtcclxuICAgIGZyYW1ld29ya0FycmF5OiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgICdBbmd1bGFyJyxcclxuICAgICAgICAnUmVhY3RKUycsXHJcbiAgICAgICAgJ1Z1ZUpTJyxcclxuICAgICAgICAnTmVraSBkcnVnaScsXHJcbiAgICAgICAgJ05pamVkYW4nXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Qb3NpdGlvbnMoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkl6YWJlcml0ZSBwb3ppY2lqdVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5wb3NpdGlvbkFycmF5XHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQhPT10aGlzLmNhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblBsYWNlaG9sZGVyID0gXCJPZGdvdm9yOiBcIiArIHRoaXMucG9zaXRpb25TZWxlY3RlZCA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuS25vd2xlZGdlKCkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJJemFiZXJpdGUgbml2byB6bmFuamFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogdGhpcy5jYW5jZWxCdXR0b24sXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMua25vd2xlZGdlQXJyYXlcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCE9PXRoaXMuY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtub3dsZWRnZVNlbGVjdGVkID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rbm93bGVkZ2VQbGFjZWhvbGRlciA9IFwiT2Rnb3ZvcjogXCIgKyB0aGlzLmtub3dsZWRnZVNlbGVjdGVkIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5ZZWFyUmFuZygpIHtcclxuICAgICAgICBkaWFsb2dzLmFjdGlvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSXphYmVyaSBicm9qIGdvZGluYVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy55ZWFyQXJyYXlcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCE9PXRoaXMuY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnllYXJTZWxlY3RlZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHRoaXMueWVhclBsYWNlaG9sZGVyID0gXCJPZGdvdm9yOiBcIiArIHRoaXMueWVhclNlbGVjdGVkIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5GcmFtZXdvcmsoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkl6YWJlcmkgSlMgZnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY2FuY2VsQnV0dG9uLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLmZyYW1ld29ya0FycmF5XHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQhPT10aGlzLmNhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZXdvcmtTZWxlY3RlZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWV3b3JrUGxhY2Vob2xkZXIgPSBcIk9kZ292b3I6IFwiICsgdGhpcy5mcmFtZXdvcmtTZWxlY3RlZCA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufVxyXG4iXX0=