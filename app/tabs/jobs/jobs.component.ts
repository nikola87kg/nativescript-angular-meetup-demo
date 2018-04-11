import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

import { JobsService } from "../../shared/services/jobs.service";
import { JobModel } from "./jobs.model";

import * as utils from "utils/utils";

@Component({
    selector: "Jobs",
    moduleId: module.id,
    templateUrl: "./jobs.component.html",
    styleUrls: ["./jobs.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class JobsComponent implements OnInit {
    jobArray: Array<JobModel>;
    private counter: number;

    constructor(private jobsService: JobsService) {
    }

    ngOnInit() {
        this.getJobs();
    }

    goToWeb(link) {
        utils.openUrl(link);
    }

    getJobs() {
        this.jobsService.getJobs().subscribe(
            (response) => {
                this.jobArray = response.data;
            },
            (error) => {
                this.jobArray = [{
                    id: 1,
                    name: "NativeScript developer",
                    city: "Kragujevac",
                    link: "https://quantox.com/careers",
                    created_at: "2018-04-10 13:28:39",
                    updated_at: "2018-04-10 13:28:39"
                }];
            }
        );
    }
}
