import { Injectable } from '@angular/core';
import { Project } from '../../../Models/Project/ProjectModel';
import { Subject } from 'rxjs/subject';

@Injectable()
export class ProjectsService {

Projects: Project[] = [
  {
    name: 'Coding Space',
    body: 'This is a pure Sass project without any Framework like Bootstrap. The project is based on a great and very detailed course called Advanced CSS and Sass. I will write more about this project later...',
    picture: '../../../assets/img/projects/Coding_space.PNG',
    github_url: 'https://github.com/borkeszmate/SiteBuilding_Coding_Space',
    preview_url: 'https://borkeszmate.github.io/SiteBuilding_Coding_Space/',
    technologies: ['Sass', 'Floats']
  },
  {
    name: 'Flexy',
    body: 'This is my first Flexbox project where I build a whole site (without functionality) relying heavily on the great Flexbox. The project is originally based on Udemy course "Advanced CSS and Sass by Jonas Schmedtmann" but I always implement as much of my own thoughs as possible.',
    picture: '../../../assets/img/online_marketing_2.jpg',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    preview_url: 'Sitebuilding no Bootstrap',
    technologies: ['Sass', 'Flexbox']
  },
  {
    name: 'Flexy',
    body: 'This is my first Flexbox project where I build a whole site (without functionality) relying heavily on the great Flexbox. The project is originally based on Udemy course "Advanced CSS and Sass by Jonas Schmedtmann" but I always implement as much of my own thoughs as possible.',
    picture: '../../../assets/img/online_marketing_2.jpg',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    preview_url: 'Sitebuilding no Bootstrap',
    technologies: ['Sass', 'Flexbox']
  },
];

ProjectSubject: Subject<any> = new Subject();

  constructor() { }

}
