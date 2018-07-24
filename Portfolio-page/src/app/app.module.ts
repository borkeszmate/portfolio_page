import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsListComponent } from './components/Webdev-projects/projects-list/projects-list.component';
import { SplitScreenComponent } from './components/split-screen/split-screen.component';

/* SERVICES */
import { ProjectsService } from './components/Webdev-projects/sevices/projects-service.service';
import { ProjectDetailsComponent } from './components/Webdev-projects/project-details/project-details.component';

/* Packages */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ProjectsListComponent,
    SplitScreenComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
