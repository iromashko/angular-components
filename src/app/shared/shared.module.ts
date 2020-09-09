import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TabsComponent } from '../components/tabs/tabs.component';

@NgModule({
  declarations: [
    CardComponent,
    FilterTermPipe,
    SnackbarComponent,
    TabsComponent,
  ],
  imports: [CommonModule],
  exports: [CardComponent, FilterTermPipe, SnackbarComponent, TabsComponent],
})
export class SharedModule {}
