import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './module/home/home.component';
import { ContactComponent } from './module/contact/contact.component';
import { BlogsComponent } from './module/blogs/blogs.component';
import { ProjectsComponent } from './module/projects/projects.component';
import { AboutmeComponent } from './module/aboutme/aboutme.component';
import { UnderconstructionComponent } from './module/underconstruction/underconstruction.component';
import { AquafunComponent } from './module/aquafun/aquafun.component';
import { Project4Component } from './module/project4/project4.component';
import { WsappComponent } from './module/wsapp/wsapp.component';
import { HomeInternshipComponent } from './module/internship/home-internship/home-internship.component';
import { BlogComponent } from './module/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    BlogsComponent,
    ProjectsComponent,
    AboutmeComponent,
    UnderconstructionComponent,
    AquafunComponent,
    Project4Component,
    WsappComponent,
    HomeInternshipComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
