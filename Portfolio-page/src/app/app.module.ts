import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* COMPONENTS */
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { ProjectsListComponent } from './components/Webdev-projects/projects-list/projects-list.component';
import { SplitScreenComponent } from './components/homepage/split-screen/split-screen.component';
import { ProjectDetailsComponent } from './components/Webdev-projects/project-details/project-details.component';
import { WebdevProjectsComponent } from './components/webdev-projects/webdev-projects.component';

/* SERVICES */
import { ProjectsService } from './components/Webdev-projects/sevices/projects-service.service';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'webdev-projects', component: WebdevProjectsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    HeroComponent,
    ProjectsListComponent,
    SplitScreenComponent,
    ProjectDetailsComponent,
    WebdevProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
