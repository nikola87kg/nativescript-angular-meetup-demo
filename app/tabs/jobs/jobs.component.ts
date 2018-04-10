import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { JobModel } from "./jobs.model";
import { JobsService } from "../../shared/services/jobs.service";

@Component({
    selector: "Jobs",
    moduleId: module.id,
    templateUrl: "./jobs.component.html",
    styleUrls: ["./jobs.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class JobsComponent implements OnInit {
    jobArray: Array<JobModel> = [{
        "id": 1,
        "name": "FE developer",
        "city": "Kragujevac",
        "link": "https://quantox.com",
        "created_at": "2018-04-10 13:28:39",
        "updated_at": "2018-04-10 13:28:39"
    }];
    private counter: number;

    constructor(private jobsService: JobsService) {
    }

    ngOnInit() {
        this.getJobs();
    }

    getJobs() {
        this.jobsService.getJobs().subscribe(
            (response) => {
                this.jobArray = response.data;
            }
        );
    }

    onItemTap(args) {
        console.log("Go to link" + args.index);
    }
}
