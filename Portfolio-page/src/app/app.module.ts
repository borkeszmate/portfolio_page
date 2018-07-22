import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { SplitScreenComponent } from './components/split-screen/split-screen.component';

/* SERVICES */
import { ProjectsService } from './sevices/projects-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ProjectsListComponent,
    SplitScreenComponent
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
