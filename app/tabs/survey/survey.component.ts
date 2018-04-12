import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { ListPicker } from "ui/list-picker";

import * as AppSettings from "application-settings";

import { SurveyService } from "../../shared/services/survey.service";
import { RouterExtensions } from "nativescript-angular";
import { Router } from "@angular/router";

const dialogs = require("ui/dialogs");
const validator = require("email-validator");

@Component({
    selector: "Survey",
    moduleId: module.id,
    templateUrl: "./survey.component.html",
    styleUrls: ["./survey.component.scss"]
})
export class SurveyComponent implements OnInit {
    /* Defaults */
    cancelButton: string = "Odustani";
    isFormSubmitted: boolean;

    /* Position */
    positionSelected: string;
    positionPlaceholder: string = "Izaberi poziciju...";
    positionStats = [{}];
    positionArray: Array<string> = [
        "Fullstack developer",
        "Frontend developer",
        "Backend developer",
        "Dizajner",
        "Android developer",
        "Swift developer",
        "Praktikant",
        "Student"
    ];

    /* Knowledge */
    knowledgeSelected: string;
    knowledgePlaceholder: string = "Izaberi nivo znanja...";
    knowledgeStats = [{}];
    knowledgeArray: Array<string> = ["Senior", "Medior", "Junior", "Drugo"];

    /* Years */
    yearSelected: string;
    yearPlaceholder: string = "Izaberi opseg godina...";
    yearStats = [{}];
    yearArray: Array<string> = [
        "manje od 25",
        "26-35",
        "36-45",
        "46-55",
        "više od 55"
    ];

    /* Favourite JS Framework */
    frameworkSelected: string;
    frameworkPlaceholder: string = "Izaberi JS framework...";
    frameworkStats = [{}];
    frameworkArray: Array<string> = [
        "Angular",
        "React",
        "Vue",
        "Nijedan od navedenih",
        "Ne koristim frameworke"
    ];

    /* Email */
    emailPlaceholder: string = "Tvoj email...";
    emailField: string;
    validationMessage: string;

    /* Validation */
    isFormInvalid: boolean;

    constructor(private surveyService: SurveyService, 
    private router: Router) {}

    navigateToStats() {
        this.router.navigate(['/stats']);
      }

    printValue(value) {
        this.emailField = value;
    }

    checkStorage() {
        return AppSettings.getBoolean("formSubmitted");
    }

    /* Logic */
    ngOnInit() {
        this.isFormSubmitted = this.checkStorage();
    }

    openPositions() {
        dialogs
            .action({
                message: "Izaberite poziciju",
                cancelButtonText: this.cancelButton,
                actions: this.positionArray
            })
            .then((result) => {
                if (result !== this.cancelButton) {
                    this.positionSelected = result;
                    this.positionPlaceholder = "Odgovor: " + this.positionSelected;
                }
            });
    }

    openKnowledge() {
        dialogs
            .action({
                message: "Izaberite nivo znanja",
                cancelButtonText: this.cancelButton,
                actions: this.knowledgeArray
            })
            .then((result) => {
                if (result !== this.cancelButton) {
                    this.knowledgeSelected = result;
                    this.knowledgePlaceholder = "Odgovor: " + this.knowledgeSelected;
                }
            });
    }

    openYearRang() {
        dialogs
            .action({
                message: "Izaberi broj godina",
                cancelButtonText: this.cancelButton,
                actions: this.yearArray
            })
            .then((result) => {
                if (result !== this.cancelButton) {
                    this.yearSelected = result;
                    this.yearPlaceholder = "Odgovor: " + this.yearSelected;
                }
            });
    }

    openFramework() {
        dialogs
            .action({
                message: "Izaberi JS framework",
                cancelButtonText: this.cancelButton,
                actions: this.frameworkArray
            })
            .then((result) => {
                if (result !== this.cancelButton) {
                    this.frameworkSelected = result;
                    this.frameworkPlaceholder = "Odgovor: " + this.frameworkSelected;
                }
            });
    }


    switchSurvey() {
        this.isFormSubmitted = !this.isFormSubmitted;
    }

    isValidEmail = function() {
        return validator.validate(this.emailField);
    };

    onSubmit() {
        const answers = {
            email: this.emailField,
            framework: this.frameworkSelected,
            years: this.yearSelected,
            experience: this.knowledgeSelected,
            position: this.positionSelected
        };
        if (
            this.isValidEmail() &&
            this.frameworkSelected &&
            this.yearSelected &&
            this.knowledgeSelected &&
            this.positionSelected
        ) {
            this.isFormInvalid = false;
            this.surveyService.submitSurveys(answers).subscribe(
                (response) => {
                    AppSettings.setBoolean("formSubmitted", true);
                    this.navigateToStats();
                 },
                (error) => { console.log(error); }
            );
        } else {
            this.isValidEmail() ?
            this.validationMessage = "* Morate popuniti sva polja" :
            this.validationMessage = "* Email nije validan";
            this.isFormInvalid = true;
            setTimeout(() => { this.isFormInvalid = false; }, 3000);
        }

    }

}
