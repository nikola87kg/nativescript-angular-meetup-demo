import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ListPicker } from "ui/list-picker";
var dialogs = require("ui/dialogs");

@Component({
    selector: "Survey",
    moduleId: module.id,
    templateUrl: "./survey.component.html",
    styleUrls: ["./survey.component.scss"]
})
export class SurveyComponent {

    /* Defaults */
    cancelButton:string = "Odustani";

    /* Position */
    positionSelected: string;
    positionPlaceholder: string = "Izaberi poziciju...";
    positionArray: Array<string> = [
        'Fullstack developer',
        'Frontend developer',
        'Backend developer',
        'Designer',
        'Android developer',
        'Swift developer',
        'Intern',
        'Student'
    ];
    /* Knowledge */
    knowledgeSelected: string;
    knowledgePlaceholder: string = "Izaberi nivo znanja...";
    knowledgeArray: Array<string> = [
        'Senior',
        'Medior',
        'Junior',
        'Učenik'
    ];
    /* Years */
    yearSelected: string;
    yearPlaceholder: string = "Izaberi opseg godina...";
    yearArray: Array<string> = [
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
    /* Favourite JS Framework */
    frameworkSelected: string;
    frameworkPlaceholder: string = "Izaberi JS framework...";
    frameworkArray: Array<string> = [
        'Angular',
        'ReactJS',
        'VueJS',
        'Neki drugi',
        'Nijedan'
    ];

    constructor() {
    }

    openPositions() {
        dialogs.action({
            message: "Izaberite poziciju",
            cancelButtonText: this.cancelButton,
            actions: this.positionArray
        }).then(result => {
            if(result!==this.cancelButton) {
                this.positionSelected = result;
                this.positionPlaceholder = "Odgovor: " + this.positionSelected ;
            }
        })
    };

    openKnowledge() {
        dialogs.action({
            message: "Izaberite nivo znanja",
            cancelButtonText: this.cancelButton,
            actions: this.knowledgeArray
        }).then(result => {
            if(result!==this.cancelButton) {
                this.knowledgeSelected = result;
                this.knowledgePlaceholder = "Odgovor: " + this.knowledgeSelected ;
            }
        })
    };

    openYearRang() {
        dialogs.action({
            message: "Izaberi broj godina",
            cancelButtonText: this.cancelButton,
            actions: this.yearArray
        }).then(result => {
            if(result!==this.cancelButton) {
                this.yearSelected = result;
                this.yearPlaceholder = "Odgovor: " + this.yearSelected ;
            }
        })
    };

    openFramework() {
        dialogs.action({
            message: "Izaberi JS framework",
            cancelButtonText: this.cancelButton,
            actions: this.frameworkArray
        }).then(result => {
            if(result!==this.cancelButton) {
                this.frameworkSelected = result;
                this.frameworkPlaceholder = "Odgovor: " + this.frameworkSelected ;
            }
        })
    };
}
