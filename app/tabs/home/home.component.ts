import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Color } from "color";
import * as moment from "moment";
import { View } from "ui/core/view";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  timeDifference: any;
  @Output() confirmDialogResult: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    moment.locale("sr");
  }

  changeTab(index) {
    this.confirmDialogResult.emit(index);
  }

  openPool() {
    dialogs.confirm({
      title: "Anketa",
      message: "Da li želiš da pređeš na anketu?",
      okButtonText: "Nastavi",
      cancelButtonText: "Odustani"
    }).then((result) => {
      if (result) {
        this.changeTab(1);
      }
  });
  }
  openJobs() {
    dialogs.confirm({
      title: "Poslovi",
      message: "Da li želiš da pogledaš otvorene pozicije u Quantoxu?",
      okButtonText: "Nastavi",
      cancelButtonText: "Odustani"
    }).then((result) => {
      if (result) {
        this.changeTab(2);
      }
  });
  }

  ngOnInit(): void {
    setInterval((): void => {
      /* meetupTime & rightNow time */
      const meetupTime = moment([2018, 3, 12, 18]);
      const rightNow = moment().add(2, "hours");
      // const rightNow = moment([2018, 3, 12, 19]);
      /* Days remaining */
      const daysDifference =
        meetupTime.diff(rightNow, "days") > 0
          ? meetupTime.diff(rightNow, "days") + " dana "
          : "";
      /* Hours remaining */
      const hoursDifference =
        meetupTime.diff(rightNow, "hours") > 0
          ? meetupTime.diff(rightNow, "hours") %
              meetupTime.diff(rightNow, "days") +
            "h "
          : "";
      /* Minutes remaining */
      const minutesDifference =
        meetupTime.diff(rightNow, "minutes") > 0
          ? meetupTime.diff(rightNow, "minutes") %
              meetupTime.diff(rightNow, "hours") +
            "min "
          : "";
      /* Minutes remaining */
      const secondsDifference =
        meetupTime.diff(rightNow, "seconds") > 0
          ? meetupTime.diff(rightNow, "seconds") %
              meetupTime.diff(rightNow, "minutes") +
            "s "
          : "";
      this.timeDifference =
        daysDifference +
        hoursDifference +
        minutesDifference +
        secondsDifference;
    }, 1000);
  }
}
