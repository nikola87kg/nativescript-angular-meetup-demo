import { Component } from "@angular/core";
import * as utils from "utils/utils";
import { SurveyService } from "../../shared/services/survey.service";

@Component({
  selector: "Stats",
  moduleId: module.id,
  templateUrl: "./stats.component.html",
  styleUrls: ["stats.component.scss"]
})
export class StatsComponent {

  frameworkStats: Array<any> = [{}];
  positionStats: Array<any> = [{}];
  yearStats: Array<any> = [{}];
  knowledgeStats: Array<any> = [{}];

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.surveyService.getSurveys("position").subscribe(
      (stats) => {
        console.dir(stats);
        this.positionStats = stats;
      },
      (error) => {
        console.dir("error is:", error);
        console.log("error is:", error);
      }
    );
    this.surveyService.getSurveys("framework").subscribe(
      (stats) => {
        this.frameworkStats = stats;
      }
    );
    this.surveyService.getSurveys("years").subscribe(
      (stats) => {
        this.yearStats = stats;
      }
    );
    this.surveyService.getSurveys("experience").subscribe(
      (stats) => {
        this.knowledgeStats = stats;
      }
    );
  }
}
