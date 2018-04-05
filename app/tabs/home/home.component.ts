import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    meetupStartTime:any  = new Date("2018-04-12T17:00:00Z");
    thisMoment:any  = new Date();
    calculateTime()  {
        setInterval(() => {
            return this.thisMoment - this.meetupStartTime
            }, 1000);
    }


    constructor() {
    }

    ngOnInit(): void {
    }
}
