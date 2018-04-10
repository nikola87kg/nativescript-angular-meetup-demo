import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TabsRoutingModule } from "./tabs-routing.module";

import { HomeComponent } from "./home/home.component";
import { JobsComponent } from "./jobs/jobs.component";
import { SurveyComponent } from "./survey/survey.component";
import { TabsComponent } from "./tabs.component";

import { JobsService } from "../shared/services/jobs.service";
import { SurveyService } from "../shared/services/survey.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        SurveyComponent,
        JobsComponent
    ],
    providers: [
        JobsService,
        SurveyService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
