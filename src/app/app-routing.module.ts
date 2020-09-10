import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const APP_ROUTES: Routes = [
  { path: '', component: ComponentDocumentationComponent },
  { path: 'directives', component: DirectivesDocumentationComponent },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  { path: 'services', component: ServicesDocumentationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
