import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from '../../other/fade-in-out/fade-in-out.animation';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOutAnimation],
})
export class OtherDocumentationComponent implements OnInit {
  public isInDOM = true;

  constructor() {}

  ngOnInit(): void {}
}
