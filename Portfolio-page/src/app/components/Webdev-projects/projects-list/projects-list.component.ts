import { Component, OnInit } from '@angular/core';
import { Project } from '../../../Models/Project/ProjectModel';
import { ProjectsService } from '../sevices/projects-service.service';

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
    category: '',
    technologies: []
  };
  ProjectTypes;
  FilteredProjects: Project[];

  constructor( private Projects_Service: ProjectsService) { }

  ngOnInit() {
    this.Projects = this.Projects_Service.Projects;
    this.ProjectTypes = this.Projects_Service.Projects
    .map(project => this.ProjectTypes)
      .reduce((a, b) => {
        return a.concat(b);
      });
    ;

    console.log(this.ProjectTypes);  
  }
  

  public getClickedProject(clickedProjectNumber) {
    this.ClickedProject = this.Projects[clickedProjectNumber];
// console.log(this.ClickedProject);
// Sending clicked project data to the Subject in the Service in order to allow project details component to subscribe to it.
    this.Projects_Service.ProjectSubject.next(this.ClickedProject);

  }

  public filterByTechnologies(Projects, ProjectType) {
    console.log(`megdurrantottad a ${ProjectType} gombot`);

    const currentFilteredProjects = Projects.filter(project => project.technologies == ProjectType)
    console.log(currentFilteredProjects);
  }}
