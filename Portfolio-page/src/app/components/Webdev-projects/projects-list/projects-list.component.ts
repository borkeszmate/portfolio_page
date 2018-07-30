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
  ProjectTechnologies;
  FilterByTechArr = [];
  FilteredProjects = [];

  constructor( private Projects_Service: ProjectsService) { }

  ngOnInit() {
    this.Projects = this.Projects_Service.Projects;
    this.gettingUniqueTechnologies();
    console.log(this.ProjectTechnologies);

  }

  public getClickedProject(clickedProjectNumber) {
    this.ClickedProject = this.Projects[clickedProjectNumber];
// console.log(this.ClickedProject);
// Sending clicked project data to the Subject in the Service in order to allow project details component to subscribe to it.
    this.Projects_Service.ProjectSubject.next(this.ClickedProject);
  }

  public gettingUniqueTechnologies() {
    // Getting project technologies from Projects service
    let ProjectTechArr;
    ProjectTechArr = this.Projects_Service.Projects
      .map(project => project.technologies);
    ProjectTechArr = ProjectTechArr.reduce((a, b) => {
      return a.concat(b);
    });
    // All technologies push into an array, now we filter out the unique values
    const uniqueArray = [];
    ProjectTechArr.forEach(ProjectType => {
      if (uniqueArray.indexOf(ProjectType) === -1) {
        uniqueArray.push(ProjectType);
      }
    });
    this.ProjectTechnologies = uniqueArray;
  }
// Filter array for filtering displayed projects by technologies. Method is fired when Technology is clicked in the template.
  public filterByTechnology(ProjectTechnology) {
// If the clicked technology is already in the array remove from it by click
    if (this.FilterByTechArr.includes(ProjectTechnology)) {
      const index = this.FilterByTechArr.indexOf(ProjectTechnology);
      // console.log(index);
      this.FilterByTechArr.splice(index, 1);
// Remove filtered projects from array when technology is clicked second time
      this.FilteredProjects.forEach((ProjectToRemove, Index) => {
        if (ProjectToRemove.technologies.includes(ProjectTechnology) ) {
         this.FilteredProjects.splice(Index);
          console.log(ProjectToRemove.technologies.includes(ProjectTechnology));
       }
      });
    } else {
      // If clicked technology is not in the array then push it into it.
      this.FilterByTechArr.push(ProjectTechnology);
    }
    console.log(this.FilteredProjects);

// Adding projects to filtered project array
        this.Projects.forEach(projectItem => {

          this.FilterByTechArr.forEach(filterItem => {

            if (projectItem.technologies.indexOf(filterItem) > -1) {
              if (this.FilteredProjects.indexOf(projectItem) === -1) {
                this.FilteredProjects.push(projectItem);
              }
            }
          }
        );
      });

    }



}
