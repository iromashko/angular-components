import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TabInterface {
  title: string;
  active: boolean;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() public tabs: TabInterface[] = [];
  @Output() public selectedTabIndex = new EventEmitter<number>();

  public selectTab(selected: TabInterface, index: number): void {
    this.tabs.forEach((tab) => {
      tab.active = selected === tab;
    });
    this.selectedTabIndex.emit(index);
  }
}
