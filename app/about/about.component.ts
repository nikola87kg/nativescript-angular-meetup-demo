import { Component, OnInit } from "@angular/core";
import * as utils from "utils/utils";

@Component({
  selector: "About",
  moduleId: module.id,
  templateUrl: "./about.component.html",
  styleUrls: ["about.component.scss"]
})
export class AboutComponent implements OnInit {
  aboutList = [
    {
      source: "~/images/native_script_logo.png",
      link: "https://www.nativescript.org/"
    },
    {
      source: "~/images/angular_logo.png",
      link: "https://angular.io/"
    },
    {
      source: "&#xf09b;",
      link: "https://github.com/nikola87kg/nativescript-angular-meetup-demo"
    },
    {
      source: "&#xf0e1;",
      link: "https://www.linkedin.com/company/quantoxtechnology/"
    },
    {
      source: "&#xf08c;",
      link: "https://www.linkedin.com/in/nikolajeremic"
    }
  ];

  constructor() {
    /************************************************************
     * Use the constructor to inject app services that you need in this component.
     *************************************************************/
  }

  ngOnInit(): void {
    /************************************************************
     * Use the "ngOnInit" handler to initialize data for this component.
     *************************************************************/
  }

  goTo(link) {
    utils.openUrl(link);
  }
}
