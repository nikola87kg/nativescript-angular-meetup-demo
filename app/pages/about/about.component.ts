import { Component } from "@angular/core";
import * as utils from "utils/utils";

@Component({
  selector: "About",
  moduleId: module.id,
  templateUrl: "./about.component.html",
  styleUrls: ["about.component.scss"]
})
export class AboutComponent {
  aboutList = [
    {
      source: "res://native_script_logo",
      text: "NativeScript v3.4.3",
      link: "https://www.nativescript.org/"
    },
    {
      source: "res://angular_logo",
      text: "Angular v5.2.0",
      link: "https://angular.io/"
    },
    {
      source:  "res://github_logo",
      text: "Preuzmi kód na GitHubu",
      link: "https://github.com/nikola87kg/nativescript-angular-meetup-demo"
    },
    {
      source: "res://linkedin_blue_logo",
      text: "Quantox na LinkedIn-u",
      link: "https://www.linkedin.com/company/quantoxtechnology/"
    },
    {
      source: "res://linkedin_black_logo",
      text: "Postavite pitanje",
      link: "https://www.linkedin.com/in/nikolajeremic"
    },
    {
      source: "res://slides_logo",
      text: "Pogledaj prezentaciju",
      link:  "https://docs.google.com/presentation/d/1R8KsqgY9v-LyslmVn-BhwYs-SBuHkqAC-KhQYpIbQok/edit#slide=id.g3813a982bc_0_49"
    }
  ];

  goTo(link) {
    utils.openUrl(link);
  }
}
