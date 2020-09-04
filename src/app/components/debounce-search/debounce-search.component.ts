import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent {
  public searchTerm = '';
  @Input() public placeHolder = 'Search';
  @Output() public searchUpdate = new EventEmitter<string>();
  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => {
        this.searchUpdate.emit(value);
      });
  }

  public updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }
}
