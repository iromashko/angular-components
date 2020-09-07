import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
})
export class SortTableComponent {
  @Input() public tableData: any[] = [
    {
      first: 'Lorem 1',
      dob: '11/22/80',
      age: 17,
      living: true,
    },
    {
      first: 'Lorem 2',
      dob: '11/22/40',
      age: 29,
      living: true,
    },
    {
      first: 'Lorem 3',
      dob: '11/22/30',
      age: 33,
      living: false,
    },
    {
      first: 'Lorem 4',
      dob: '11/22/20',
      age: 44,
      living: false,
    },
  ];

  public sortDirection = true;

  public sort(headerData: { key: string; value: any }): void {
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;
      case typeof value === 'number':
        this.sortNumber(key);
        break;
      case this.isDate(key):
        this.sortDate(key);
        break;
      case typeof value === 'string':
        this.sortString(key);
        break;
    }
  }

  private isDate(value: any): boolean {
    const parsedDate = Date.parse(value);
    return isNaN(value) && !isNaN(parsedDate);
  }

  private sortDate(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return (
          new Date(value1[key]).getTime() - new Date(value2[key]).getTime()
        );
      } else {
        return (
          new Date(value2[key]).getTime() - new Date(value1[key]).getTime()
        );
      }
    });
  }

  private sortBoolean(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key] - Number(value2[key]));
      } else {
        return Number(value2[key] - Number(value1[key]));
      }
    });
  }
  private sortNumber(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key] - Number(value2[key]));
      } else {
        return Number(value2[key] - Number(value1[key]));
      }
    });
  }
  private sortString(key: string): void {
    this.tableData.sort((value1: string, value2: string) => {
      const value1Uppercase = value1[key].toUpperCase();
      const value2Uppercase = value2[key].toUpperCase();
      if (this.sortDirection) {
        if (value1Uppercase > value2Uppercase) {
          return -1;
        }
        if (value2Uppercase > value2Uppercase) {
          return 1;
        }
        return 0;
      } else {
        if (value2Uppercase > value1Uppercase) {
          return -1;
        }
        if (value1Uppercase > value2Uppercase) {
          return 1;
        }
        return 0;
      }
    });
  }
}
