import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent implements OnInit {
  @Input() public tableData: any[] = [
    { first: 'Lorem 1', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 2', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 3', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 4', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 5', last: 'Ipsum 1', dob: '11/22/80' },
    { first: 'Lorem 6', last: 'Ipsum 1', dob: '11/22/80' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
