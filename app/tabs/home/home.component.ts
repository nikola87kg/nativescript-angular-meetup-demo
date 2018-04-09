import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import * as moment from "moment";
import * as app from "tns-core-modules/application";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  timeDifference: any;
  isPortrait: boolean = true;
  @Output()
  confirmDialogResult: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    moment.locale("sr");
    app.on("orientationChanged", this.onOrientationChanged);
  }

  onOrientationChanged = (evt) => {
    if (evt.newValue === "portrait") {
      return (this.isPortrait = true);
    }

    return (this.isPortrait = false);
  }

  changeTab(index) {
    this.confirmDialogResult.emit(index);
  }

  goToForm() {
    dialogs
      .confirm({
        title: "Anketa",
        message: "Da li želiš da pređeš na anketu?",
        okButtonText: "Nastavi",
        cancelButtonText: "Odustani"
      })
      .then((result) => {
        if (result) {
          this.changeTab(1);
        }
      });
  }

  meetupCounter() {
    const meetupTime = moment([2018, 3, 12, 18, 0, 0]);
    const rightNow = moment().add(2, "hours"); // timezone
    /* Total remaining units */
    const daysTotal = meetupTime.diff(rightNow, "days");
    const hoursTotal = meetupTime.diff(rightNow, "hours");
    const minutesTotal = meetupTime.diff(rightNow, "minutes");
    const secondsTotal = meetupTime.diff(rightNow, "seconds");
    /* Relative remaining units */
    const hoursLeft = hoursTotal % (daysTotal * 24);
    const minutesLeft = minutesTotal % (hoursTotal * 60);
    const secondsLeft = secondsTotal % (minutesTotal * 60);
    /* Counter */
    this.timeDifference =
      secondsTotal > 0
        ? daysTotal +
          " dana " +
          hoursLeft +
          "h " +
          minutesLeft +
          "min " +
          secondsLeft +
          "s"
        : "Dobrodošli";
  }

  ngOnInit(): void {
    setInterval((): void => {
      this.meetupCounter();
    }, 1000);
  }
}
