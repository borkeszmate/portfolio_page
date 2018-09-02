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
import { WebDevSkillsComponent } from './components/Webdev-projects/web-dev-skills/web-dev-skills.component';
import { WebDevHeroSectionComponent } from './components/Webdev-projects/web-dev-hero-section/web-dev-hero-section.component';
import { SectionRowComponent } from './components/Webdev-projects/section-row/section-row.component';
import { CvComponent } from './components/cv/cv.component';
import { ExperienceComponent } from './components/cv/experience/experience.component';




const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'webdev-projects', component: WebdevProjectsComponent},
  {path: 'cv', component: CvComponent}
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
    WebdevProjectsComponent,
    WebDevSkillsComponent,
    WebDevHeroSectionComponent,
    SectionRowComponent,
    CvComponent,
    ExperienceComponent
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
