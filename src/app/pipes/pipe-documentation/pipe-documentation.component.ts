import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrls: ['./pipe-documentation.component.scss'],
})
export class PipeDocumentationComponent {
  public flattenData = [1, 2, [3], [5, 6], [7]];

  public html = ' <a href="http://youtube.com" target="_blank">YouTube</a>';

  public stringArray: string[] = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

  public objectArray: { [key: string]: string }[] = [
    { content: 'Courses' },
    { content: 'YouTube' },
    { content: 'Twitter' },
    { content: 'LinkedIn' },
  ];

  public modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }
  public reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
