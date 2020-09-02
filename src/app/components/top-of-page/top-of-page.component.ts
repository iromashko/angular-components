import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent implements OnInit {
  public isShown = false;

  constructor(private viewPortScroller: ViewportScroller) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const yCoordinate = this.viewPortScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  public goToTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }

  ngOnInit(): void {}
}
