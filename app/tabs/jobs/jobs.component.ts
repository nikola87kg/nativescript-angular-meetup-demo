import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { DataItem } from "./jobs.model";

@Component({
    selector: "Jobs",
    moduleId: module.id,
    templateUrl: "./jobs.component.html",
    styleUrls: ["./jobs.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsComponent  {
    myItems: Array<DataItem>;
    private counter: number;

    constructor() {
        this.myItems = [
            { id: 1, name: "Frontend Developer", city: "Beograd" },
            { id: 2, name: "Senior PHP Developer", city: "Beograd" },
            { id: 3, name: "PHP Developer", city: "Beograd" },
            { id: 4, name: "Ruby on Rails Developer", city: "Beograd" },
            { id: 5, name: "Clojure Developer", city: "Svi gradovi" },
            { id: 6, name: "Crypto Project Community Manager", city: "Svi gradovi" },
            { id: 7, name: "NodeJS Developer", city: "Svi gradovi" },
            { id: 8, name: "Python Developer", city: "Svi gradovi" },
            { id: 9, name: ".NET Deveoper", city: "Svi gradovi" },
            { id: 10, name: "Java Developer", city: "Svi gradovi" },
            { id: 11, name: "Java QA", city: "Svi gradovi" },
            { id: 12, name: "DevOps Engineer", city: "Svi gradovi" },
            { id: 13, name: "Blockchain Developer", city: "Svi gradovi" },
            { id: 14, name: "Frontend Developer", city: "Kragujevac" },
            { id: 15, name: "PHP Developer", city: "Kragujevac" },
            { id: 16, name: "PHP Developer", city: "Niš" },
            { id: 17, name: "Frontend Developer", city: "Niš" }
        ];
    }

    onItemTap(args) {
        console.log("Go to link" + args.index);
    }
}
