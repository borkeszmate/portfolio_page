import { Injectable, OnInit } from '@angular/core';
import { Project } from '../../../Models/Project/ProjectModel';
import { Subject } from 'rxjs/subject';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {

Projects: Project[] = [
  {
    name: 'Coding Space',
    body: 'This is a pure Sass project without any Framework like Bootstrap. The project is based on a great and very detailed course called Advanced CSS and Sass. I will write more about this project later...',
    picture: '../../../assets/img/projects/Coding_space.png',
    github_url: 'https://github.com/borkeszmate/SiteBuilding_Coding_Space',
    preview_url: 'https://borkeszmate.github.io/SiteBuilding_Coding_Space/',
    technologies: ['Sass', 'Regular Floats']
  },
  {
    name: 'Flexy',
    body: 'In this Flexbox project I build a whole site (without functionality) relying heavily on the great Flexbox. The project is originally based on Udemy course "Advanced CSS and Sass by Jonas Schmedtmann" but I always implement as much of my own thoughs as possible.',
    picture: '../../../assets/img/projects/Flexy.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    preview_url: 'https://borkeszmate.github.io/FlexboxProject/',
    technologies: ['Sass', 'Flexbox']
  },
  {
    name: 'Company Onepager',
    body: "This is a simple Bootstrap company website. I built this website based on Brad Traversy's Bootstrap course back in 2017. As all my projects based on online courses it contains my own solution and it is of course not just the copy of the course project.",
    picture: '../../../assets/img/projects/Company_page.png',
    github_url: 'https://github.com/borkeszmate/Sitebuilding_Bootstrap_Company_site',
    preview_url: 'https://borkeszmate.github.io/Sitebuilding_Bootstrap_Company_site/src/',
    technologies: ['Bootstrap']
  },
  {
    name: 'CMS Admin',
    body: "This is a Bootstrap admin page. I built this website based on Brad Traversy's Bootstrap course back in 2017. As all my projects based on online courses it contains my own solution and it is of course not just the copy of the course project.",
    picture: '../../../assets/img/projects/CMS_admin.png',
    github_url: 'https://github.com/borkeszmate/Sitebuilding_Bootstrap_Company_site',
    preview_url: 'https://borkeszmate.github.io/Sitebuilding_Bootstrap_Admin_dashboard/src/',
    technologies: ['Bootstrap']
  },
  {
    name: 'The Weather App',
    body: "This pure JavaScript project uses ES6 classes and async fetch to get data from external api.  Enter a Hungary based city location and get the actual weather from Wunderground API. You can save your frequently used location. (Stored in Local Storage).",
    picture: '../../../assets/img/projects/Weather_app.png',
    github_url: 'https://github.com/borkeszmate/vanilla_js_projects_weather_app',
    preview_url: 'https://borkeszmate.github.io/vanilla_js_projects_weather_app/',
    technologies: ['Bootstrap', 'JavaScript', 'ES6', 'Local Storage', 'HTTP Requests']
  },
  {
    name: 'UTM Parameter Builder',
    body: "This extremely simple app is good for creating simple UTM parameters.",
    picture: '../../../assets/img/projects/UTM_Parameter_Builder.png',
    github_url: 'https://github.com/borkeszmate/vanilla_js_projects_UTM_builder',
    preview_url: 'https://borkeszmate.github.io/vanilla_js_projects_UTM_builder',
    technologies: ['Bootstrap', 'JavaScript']
  },
  {
    name: 'GitHub Finder',
    body: "This project is based on a online JS course I took. It uses modern ES6 classes and fetch api to get user date from the Github API.",
    picture: '../../../assets/img/projects/GitHub_Finder.png',
    github_url: 'https://github.com/borkeszmate/vanilla_js_projects_UTM_builder',
    preview_url: 'https://borkeszmate.github.io/vanilla_js_projects_github_finder/',
    technologies: ['Bootstrap', 'JavaScript', 'ES6', 'HTTP Requests']
  }

];

  dataBaseUrl = 'https://bm-portfolio-575fe.firebaseio.com/projects.json';

ProjectSubject: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  public sendData(data: Project[]) {
   return this.http.post(this.dataBaseUrl, data);
  }



}
