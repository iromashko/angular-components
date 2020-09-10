import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { FormDirtyGuard } from '../other/form-dirty-guard/form-dirty.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const OTHER_ROUTES = [
  {
    path: '',
    component: OtherDocumentationComponent,
    canDeactivate: [FormDirtyGuard],
  },
];

@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(OTHER_ROUTES),
  ],
})
export class OtherModule {}
