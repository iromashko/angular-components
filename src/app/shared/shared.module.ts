import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@NgModule({
  declarations: [CardComponent, FilterTermPipe, SnackbarComponent],
  imports: [CommonModule],
  exports: [CardComponent, FilterTermPipe, SnackbarComponent],
})
export class SharedModule {}
