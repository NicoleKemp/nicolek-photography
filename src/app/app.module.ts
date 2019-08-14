import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioSliderComponent } from './portfolio-slider/portfolio-slider.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SliderDirective } from './slider.directive';
import { CopyrightComponent } from './copyright/copyright.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioSliderComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SliderDirective,
    CopyrightComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
