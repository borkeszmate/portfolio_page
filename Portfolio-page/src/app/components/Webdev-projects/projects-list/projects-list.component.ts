  import { Component, OnInit } from '@angular/core';
import { Project } from '../../../Models/Project/ProjectModel';
import { ProjectsService } from '../sevices/projects-service.service';
// import { Observable } from 'rxjs/observable';
// import { from } from 'rxjs';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';


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
    preview_url: '',
    technologies: []
  };

  ProjectTechnologies;
  FilterByTechArr = [];
  FilteredProjects = [];
  isFiltered = false;


  constructor( private Projects_Service: ProjectsService) { }

  ngOnInit() {
    this.Projects_Service.getData()
    .subscribe((response) => {
      this.Projects = response;
      this.gettingUniqueTechnologies();
    },
    (err) => {console.log(err); }
    );


    // console.log(this.ProjectTechnologies);

  //  this.Projects_Service.sendData(this.Projects).subscribe(response => {
  //    console.log(response);
  //    },
  //    err => {
  //      console.log(err);
  //    }
  //  );


  }




  public getClickedProject(clickedProjectNumber) {

    if (this.isFiltered) {
      this.ClickedProject = this.FilteredProjects[clickedProjectNumber];
    } else {
      this.ClickedProject = this.Projects[clickedProjectNumber];
    }
    // console.log(this.ClickedProject);
// Sending clicked project data to the Subject in the Service in order to allow project details component to subscribe to it.
    this.Projects_Service.ProjectSubject.next(this.ClickedProject);
  }





  public gettingUniqueTechnologies() {
    // Getting project technologies from Projects service
    let ProjectTechArr;
    ProjectTechArr = this.Projects
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

       }
      });
    this.clearClickedProject();
    } else {
      // If clicked technology is not in the array then push it into it.
      this.FilterByTechArr.push(ProjectTechnology);
    }


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
      this.checkIfFiltered();

  }

    // Check if filtered
    public checkIfFiltered() {
      if (this.FilteredProjects.length > 0) {
        this.isFiltered = true;
      } else {
        this.isFiltered = false;
      }

   }

  public clearFilter() {
    this.FilteredProjects = [];
  }

  public clearClickedProject() {
    this.ClickedProject = {
      name: '',
      body: '',
      picture: '',
      github_url: '',
      preview_url: '',
      technologies: []
    };
    this.Projects_Service.ProjectSubject.next(this.ClickedProject);
  }



}
