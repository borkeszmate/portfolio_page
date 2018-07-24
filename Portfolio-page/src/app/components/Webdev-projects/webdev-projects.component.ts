import { Component, OnInit } from '@angular/core';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@Component({
  selector: 'app-webdev-projects',
  templateUrl: './webdev-projects.component.html',
  styleUrls: ['./webdev-projects.component.scss']
})
export class WebdevProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
