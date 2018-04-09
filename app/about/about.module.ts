import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

@NgModule({
    imports: [
        NativeScriptModule,
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutModule { }
