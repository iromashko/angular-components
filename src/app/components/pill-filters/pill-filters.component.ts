import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IPill } from '../pill/pill.interface';

@Component({
  selector: 'app-pill-filters',
  templateUrl: './pill-filters.component.html',
  styleUrls: ['./pill-filters.component.scss'],
})
export class PillFiltersComponent {
  private pillLabels: string[];

  @Input() set pills(value: string[]) {
    this.pillLabels = value;
    this.unselectedPills = value;
  }

  public unselectedPills: string[] = [];
  public selectedPills: string[] = [];

  public selected = new EventEmitter<string[]>();

  public addFilter(pillDetails: IPill): void {
    if (pillDetails.hasBeenSelected) {
      const selectedIndex = this.unselectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.unselectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPill);
      this.selected.emit(this.selectedPills);
    }
  }
  public removeFilter(pillDetails: IPill): void {
    if (!pillDetails.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.selectedPills.splice(selectedIndex, 1);
      this.unselectedPills.push(selectedPill);
    }
  }
}
