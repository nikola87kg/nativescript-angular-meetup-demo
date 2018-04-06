import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import {
  SelectedIndexChangedEventData,
  TabView,
  TabViewItem
} from "tns-core-modules/ui/tab-view";

@Component({
  selector: "TabsComponent",
  moduleId: module.id,
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  selectedIndex: number = 0;
  private _title: string;

  constructor() {
    /*  */
  }

  ngOnInit(): void {
    /* */
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    if (this._title !== value) {
      this._title = value;
    }
  }
  getIconSource(icon: string): string {
    return isAndroid ? "" : "res://tabIcons/" + icon;
  }

  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    const tabView = <TabView>args.object;
    const selectedTabViewItem = tabView.items[args.newIndex];
    setTimeout(() => {
        this.title = selectedTabViewItem.title;
    }, 0);
  }

  tabIndexChange(index: any) {
    if (index === 0) {
        this.selectedIndex = 0;
    } else if (index === 1) {
        this.selectedIndex = 1;
    } else if (index === 2) {
        this.selectedIndex = 2;
    }
  }

}
