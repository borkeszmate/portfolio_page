import { Component, OnInit } from '@angular/core';
import { Project } from '../../Models/Project/ProjectModel';
import { ProjectsService } from '../../sevices/projects-service.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  Projects: Project[];
  ClickedProject: Project = {
    name: '',
    body: '',
    picture: '',
    github_url: '',
    category: ''
  };
  constructor( private Projectsservice: ProjectsService) { }

  ngOnInit() {
    this.Projects = this.Projectsservice.Projects;
  }

}
