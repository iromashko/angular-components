import { NgModule } from '@angular/core';

import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { RichTextPipe } from './rich-text.pipe';
import { SortByPipe } from './sort-by.pipe';
import { SortByKeyPipe } from './sort-by-key.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    RichTextPipe,
    SortByPipe,
    SortByKeyPipe,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
