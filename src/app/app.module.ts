import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './module/home/home.component';
import { ContactComponent } from './module/contact/contact.component';
import { ProjectsHomeComponent } from './module/projects/projects-home/projects-home.component';
import { AboutmeComponent } from './module/aboutme/aboutme.component';
import { UnderconstructionComponent } from './module/underconstruction/underconstruction.component';
import { AquafunComponent } from './module/projects/aquafun/aquafun.component';
import { Project4Component } from './module/projects/project4/project4.component';
import { WsappComponent } from './module/projects/wsapp/wsapp.component';
import { HomeInternshipComponent } from './module/internship/home-internship/home-internship.component';
import { MicroservicesComponent } from './module/projects/microservices/microservices.component';
import { WorkoutComponent } from './module/projects/workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProjectsHomeComponent,
    AboutmeComponent,
    UnderconstructionComponent,
    AquafunComponent,
    Project4Component,
    WsappComponent,
    HomeInternshipComponent,
    MicroservicesComponent,
    WorkoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
