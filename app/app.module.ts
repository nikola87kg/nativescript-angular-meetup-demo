/* Core modules */
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

/* 3rd party */
import { registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

/* Application modules */
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JobsService } from "./shared/services/jobs.service";
import { SurveyService } from "./shared/services/survey.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptUIChartModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        JobsService,
        SurveyService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
