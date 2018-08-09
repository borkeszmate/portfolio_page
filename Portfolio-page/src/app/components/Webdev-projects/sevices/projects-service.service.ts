import { Injectable } from '@angular/core';
import { Project } from '../../../Models/Project/ProjectModel';
import { Subject } from 'rxjs/subject';

@Injectable()
export class ProjectsService {

Projects: Project[] = [
  {
    name: 'Coding Space',
    body: 'This is a pure Sass project without any Framework like Bootstrap. The project is based on a great and very detailed course called Advanced CSS and Sass. I will write more about this project later...',
    picture: '../../../assets/img/projects/Coding_space.png',
    github_url: 'https://github.com/borkeszmate/SiteBuilding_Coding_Space',
    preview_url: 'https://borkeszmate.github.io/SiteBuilding_Coding_Space/',
    technologies: ['Sass', 'Floats']
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
    picture: '../../../assets/img/online_marketing_2.jpg',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    preview_url: 'Sitebuilding no Bootstrap',
    technologies: ['Bootstrap']
  },
];

ProjectSubject: Subject<any> = new Subject();

  constructor() { }

}
