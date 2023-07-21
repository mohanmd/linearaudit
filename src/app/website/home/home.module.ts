import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { WhyChooseusComponent } from './why-chooseus/why-chooseus.component';
import { WhatWedoComponent } from './what-wedo/what-wedo.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    MatToolbarModule,
    MatGridListModule
  ],
  declarations: [
    HomeComponent,
    IntroSectionComponent,
    WhyChooseusComponent,
    WhatWedoComponent,
    SubscriberComponent,
    TestimonialComponent,
    ContactComponent
  ]
})
export class HomeModule { }
