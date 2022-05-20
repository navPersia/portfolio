import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AboutmeComponent } from './module/aboutme/aboutme.component';
import { AquafunComponent } from './module/projects/aquafun/aquafun.component';
import { ContactComponent } from './module/contact/contact.component';
import { HomeComponent } from './module/home/home.component';
import { HomeInternshipComponent } from './module/internship/home-internship/home-internship.component';
import { Project4Component } from './module/projects/project4/project4.component';
import { ProjectsHomeComponent } from './module/projects/projects-home/projects-home.component';
import { UnderconstructionComponent } from './module/underconstruction/underconstruction.component';
import { WsappComponent } from './module/projects/wsapp/wsapp.component';
import { MicroservicesComponent } from './module/projects/microservices/microservices.component';
import { WorkoutComponent } from './module/projects/workout/workout.component';

const routes: Routes = [
  // { path: '', component:  },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsHomeComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'aquafun', component: AquafunComponent},
  {path: 'underconstruction', component: UnderconstructionComponent},
  {path: 'project4', component: Project4Component},
  {path: 'wsapp', component: WsappComponent}, 
  { path: 'internship', component: HomeInternshipComponent },
  { path: 'microservices', component: MicroservicesComponent },
  { path: 'workout', component: WorkoutComponent },
  
  //moet laatst blijven staan.
//   {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
