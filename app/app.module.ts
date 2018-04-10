/* Core modules */
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


/* 3rd party */
import { registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

/* Application modules */
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/* Services */
import { JobsService } from "./shared/services/jobs.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        JobsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
