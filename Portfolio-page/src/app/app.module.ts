import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


/* COMPONENTS */
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { ProjectsListComponent } from './components/webdev-projects/projects-list/projects-list.component';
import { SplitScreenComponent } from './components/homepage/split-screen/split-screen.component';
import { ProjectDetailsComponent } from './components/webdev-projects/project-details/project-details.component';
import { WebdevProjectsComponent } from './components/webdev-projects/webdev-projects.component';

import { WebDevSkillsComponent } from './components/webdev-projects/web-dev-skills/web-dev-skills.component';
import { WebDevHeroSectionComponent } from './components/webdev-projects/web-dev-hero-section/web-dev-hero-section.component';
import { SectionRowComponent } from './components/webdev-projects/section-row/section-row.component';
import { CvComponent } from './components/cv/cv.component';
import { ExperienceComponent } from './components/cv/experience/experience.component';
import { PersonalComponent } from './components/cv/personal/personal.component';
import { OnlineMarketingComponent } from './components/online-marketing/online-marketing.component';
import { IntroComponent } from './components/online-marketing/intro/intro.component';
import { AuchanComponent } from './components/online-marketing/auchan/auchan.component';
import { LeaseplanComponent } from './components/online-marketing/leaseplan/leaseplan.component';


/* SERVICES */
import { ProjectsService } from './components/webdev-projects/sevices/projects-service.service';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { SpendMonitorComponent } from './components/webdev-projects/spend-monitor/spend-monitor.component';



const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'webdev-projects', component: WebdevProjectsComponent},
  { path: 'cv', component: CvComponent },
  { path: 'online-marketing', component: OnlineMarketingComponent}

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
    ExperienceComponent,
    PersonalComponent,
    OnlineMarketingComponent,
    IntroComponent,
    AuchanComponent,
    LeaseplanComponent,
    FooterComponent,
    SpendMonitorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
