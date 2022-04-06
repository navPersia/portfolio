import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AboutmeComponent } from './module/aboutme/aboutme.component';
import { AquafunComponent } from './module/aquafun/aquafun.component';
import { BlogsComponent } from './module/blogs/blogs.component';
import { ContactComponent } from './module/contact/contact.component';
import { HomeComponent } from './module/home/home.component';
import { HomeInternshipComponent } from './module/internship/home-internship/home-internship.component';
import { Project4Component } from './module/project4/project4.component';
import { ProjectsComponent } from './module/projects/projects.component';
import { UnderconstructionComponent } from './module/underconstruction/underconstruction.component';
import { WsappComponent } from './module/wsapp/wsapp.component';

const routes: Routes = [
  // { path: '', component:  },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'aquafun', component: AquafunComponent},
  {path: 'underconstruction', component: UnderconstructionComponent},
  {path: 'project4', component: Project4Component},
  {path: 'wsapp', component: WsappComponent}, 
  {path: 'internship', component: HomeInternshipComponent},
  //moet laatst blijven staan.
//   {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
