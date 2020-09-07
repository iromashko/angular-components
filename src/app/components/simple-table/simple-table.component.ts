import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {
  @Input() public tableData: any[] = [
    { first: 'Lorem 1', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 2', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 3', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 4', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 5', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 6', last: 'Ipsum 1', dob: '11/22/80' },
  ];

  @Output() public headerSelected = new EventEmitter<{
    key: string;
    value: any;
  }>();

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }
}
