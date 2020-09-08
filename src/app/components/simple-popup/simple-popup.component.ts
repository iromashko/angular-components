import { Component, OnInit, Input } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/other/fade-in-out/fade-in-out.animation';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss'],
  animations: [fadeInOutAnimation],
})
export class SimplePopupComponent implements OnInit {
  @Input() public message = '';
  public isShown = false;

  public show(): void {
    this.isShown = true;

    const subscription = of(null)
      .pipe(delay(3000))
      .subscribe({
        complete: () => {
          this.isShown = false;
          subscription.unsubscribe();
        },
      });
  }

  constructor() {}

  ngOnInit(): void {}
}
