import { Injectable } from '@angular/core';
import { Project } from '../../../Models/Project/ProjectModel';
import { Subject } from 'rxjs/subject';

@Injectable()
export class ProjectsService {

Projects: Project[] = [
  {
    name: 'Coding Space',
    body: 'This is a pure Sass project without any Framework like Bootstrap. The project is based on a great and very detailed course called Advanced CSS and Sass. I will write more about this project later...',
    picture: '../../../assets/img/online_marketing_2.jpg',
    github_url: 'https://github.com/borkeszmate/SiteBuilding_Coding_Space',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Sass']
  },
  {
    name: 'Flexy',
    body: 'This is my first Flexbox project where I build a whole site (without functionality) relying heavily on the great Flexbox. The project is originally based on Udemy course "Advanced CSS and Sass by Jonas Schmedtmann" but I always implement as much of my own thoughs as possible.',
    picture: '../../../assets/img/online_marketing_2.jpg',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Sass', 'Flexbox']
  },
  {
    name: 'Example Project',
    body: 'This is an example project, I will upload the rest of my projects later ',
    picture: 'https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/wordpress-lorem-ipsum.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Sass', 'ES6']
  },
  {
    name: 'Example Angular Project',
    body: 'This is an example Angular project, I will upload the rest of my projects later ',
    picture: 'https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/wordpress-lorem-ipsum.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Angular', 'Bootstrap']
  }
  /*,
  {
    name: 'Example Boostrap Project',
    body: 'This is an example only Bootstrap sitebuilding project, I will upload the rest of my projects later ',
    picture: 'https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/wordpress-lorem-ipsum.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Bootstrap']
  },
  {
    name: 'Example Project',
    body: 'This is an example project, I will upload the rest of my projects later ',
    picture: 'https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/wordpress-lorem-ipsum.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Sass', 'ES6']
  },
  {
    name: 'Example Project',
    body: 'This is an example project, I will upload the rest of my projects later ',
    picture: 'https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/wordpress-lorem-ipsum.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Sass', 'ES6']
  },
  {
    name: 'Example Project',
    body: 'This is an example project, I will upload the rest of my projects later ',
    picture: 'https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/wordpress-lorem-ipsum.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Sass', 'ES6']
  },
  {
    name: 'Example Project',
    body: 'This is an example project, I will upload the rest of my projects later ',
    picture: 'https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/wordpress-lorem-ipsum.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Sass', 'ES6']
  },
  {
    name: 'Example Project',
    body: 'This is an example project, I will upload the rest of my projects later ',
    picture: 'https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/wordpress-lorem-ipsum.png',
    github_url: 'https://github.com/borkeszmate/FlexboxProject',
    category: 'Sitebuilding no Bootstrap',
    technologies: ['Új Technológia', 'React']
  } */
];

ProjectSubject: Subject<any> = new Subject();

  constructor() { }

}
