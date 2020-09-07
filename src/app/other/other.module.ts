import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';

const OTHER_ROUTES = [
  {
    path: 'other',
    component: OtherDocumentationComponent,
  },
];

@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(OTHER_ROUTES)],
})
export class OtherModule {}
