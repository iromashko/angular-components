import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
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
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './components/linkedin-post/linkedin-post.component';
import { ModalComponent } from './components/modal/modal.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { QuoteComponent } from './components/quote/quote.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './components/debounce-search/debounce-search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { PagingComponent } from './components/paging/paging.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { RippleDirective } from './directives/ripple.directive';
import { OtherModule } from './other/other.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortTableComponent } from './components/sort-table/sort-table.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './components/banner-cut-out/banner-cut-out.component';
import { ScaleDirective } from './directives/scale.directive';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SimplePopupComponent } from './components/simple-popup/simple-popup.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

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
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    DebounceClickDirective,
    QuoteComponent,
    ToggleComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
    PagingComponent,
    TabsComponent,
    RippleDirective,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    ScaleDirective,
    SimplePopupComponent,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    OtherModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
