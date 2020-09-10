import { NgModule } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { CommonModule } from '@angular/common';

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
