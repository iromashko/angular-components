import { NgModule } from '@angular/core';

import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { RichTextPipe } from './rich-text.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    RichTextPipe,
  ],
  imports: [SharedModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
