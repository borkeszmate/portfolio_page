import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../sevices/projects-service.service';
import { Project } from '../../../Models/Project/ProjectModel';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  ProjectDetails: Project;
  isProjectLoaded = false;
  GitHubLogo = '../../../assets/img/GitHub_Logo.png';

  constructor(private Projects_Service: ProjectsService) { }
  ngOnInit() {
    this.Projects_Service.ProjectSubject.subscribe(ClickedProject => {
      this.ProjectDetails = ClickedProject;
      // console.log(this.ProjectDetails);
      this.isProjectLoaded = true;

      if (this.ProjectDetails.name === '') {
        this.isProjectLoaded = false;
        console.log(this.isProjectLoaded);
      } else {
        console.log('false');
      }
    });
  }

}
