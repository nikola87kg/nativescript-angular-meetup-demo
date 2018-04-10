import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ListPicker } from "ui/list-picker";
import { SurveyService } from "../../shared/services/survey.service";
const dialogs = require("ui/dialogs");

@Component({
  selector: "Survey",
  moduleId: module.id,
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.scss"]
})
export class SurveyComponent {
  /* Defaults */
  cancelButton: string = "Odustani";

  /* Position */
  positionSelected: string;
  positionPlaceholder: string = "Izaberi poziciju...";
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
  knowledgeArray: Array<string> = ["Senior", "Medior", "Junior", "Drugo"];

  /* Years */
  yearSelected: string;
  yearPlaceholder: string = "Izaberi opseg godina...";
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
  frameworkArray: Array<string> = [
    "Angular",
    "React",
    "Vue",
    "Nijedan od navedenih",
    "Ne koristim frameworke"
  ];

  /* Email */
  emailPlaceholder: string = "Tvoj email...";
  email: string;

  /* Validation */
  isFormInvalid: boolean;

  constructor(private surveyService: SurveyService) {}

  /* Logic */
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

  postAnswers() {
    const answers = {
      email: this.email,
      framework: this.frameworkSelected,
      year: this.yearSelected,
      knowledge: this.knowledgeSelected,
      position: this.positionSelected
    };
    if (
      this.email &&
      this.frameworkSelected &&
      this.yearSelected &&
      this.knowledgeSelected &&
      this.positionSelected
    ) {
        this.isFormInvalid = false;
        this.surveyService.submitSurveys(answers).subscribe(
            (response) => { console.log(response); },
            (error) => { console.log(error); }
        );
    } else {
        this.isFormInvalid = true;
        setTimeout(() => { this.isFormInvalid = false; }, 3000);
    }

  }

}
