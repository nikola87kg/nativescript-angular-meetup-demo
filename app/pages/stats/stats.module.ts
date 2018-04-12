import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { StatsRoutingModule } from "./stats-routing.module";
import { StatsComponent } from "./stats.component";

@NgModule({
    imports: [
        NativeScriptModule,
        StatsRoutingModule
    ],
    declarations: [
        StatsComponent
    ]
})
export class StatsModule { 
    constructor() {
        /* constructor */
    }
}
