import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyrightComponent } from './copyright/copyright.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'copyright',
    component: CopyrightComponent
  },
  {
    path: 'not-found',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
