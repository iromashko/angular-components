import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() public width = '100%';
  @Input() public height = '100%';

  public get dimensions() {
    return { width: this.width, height: this.height };
  }

  constructor() {}

  ngOnInit(): void {}
}
