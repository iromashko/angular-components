import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const APP_ROUTES: Routes = [
  {
    data: { title: 'Components' },
    path: '',
    component: ComponentDocumentationComponent,
  },
  {
    data: { title: 'Directives' },
    path: 'directives',
    component: DirectivesDocumentationComponent,
  },
  {
    data: { title: 'Pipes' },
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    data: { title: 'Services' },
    path: 'services',
    component: ServicesDocumentationComponent,
  },
  {
    data: { title: 'Services' },
    path: 'services/:id',
    component: ServicesDocumentationComponent,
  },
  {
    data: { title: 'Other' },
    path: 'other',
    loadChildren: () =>
      import('./other/other.module').then((m) => m.OtherModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
