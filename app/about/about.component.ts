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
      source: "~/images/native_script_logo.png",
      text: "NativeScript v3.4.3",
      link: "https://www.nativescript.org/"
    },
    {
      source: "~/images/angular_logo.png",
      text: "Angular v5.2.0",
      link: "https://angular.io/"
    },
    {
      source:  "~/images/angular_logo.png",
      text: "Preuzmi kód na GitHubu",
      link: "https://github.com/nikola87kg/nativescript-angular-meetup-demo"
    },
    {
      source: "~/images/angular_logo.png",
      text: "Quantox na LinkedIn-u",
      link: "https://www.linkedin.com/company/quantoxtechnology/"
    },
    {
      source: "~/images/angular_logo.png",
      text: "Autor na LinkedIn-u",
      link: "https://www.linkedin.com/in/nikolajeremic"
    }
  ];

  goTo(link) {
    utils.openUrl(link);
  }
}
