import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { PipesModule } from './pipes/pipes.module';
import { SharedModule } from './shared/shared.module';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
    ServicesDocumentationComponent,
    DirectivesDocumentationComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule, PipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
