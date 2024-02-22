import { Component, OnInit } from '@angular/core';
import data from "../../../../assets/data/personal.json"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data:any=data;
  projectsToExhibit:any[]=[];
  applicationsToExhibit:any[]=[];


  constructor() { }

  ngOnInit(): void {
    data.experiences.forEach(experience => {
      experience.developedProjects.forEach(project => {
        this.projectsToExhibit.push(project)
      })
    });
    data.applications.forEach(app => {
      this.applicationsToExhibit.push(app)
    });
    data.challenges.forEach(app => {
      this.applicationsToExhibit.push(app)
    })
  }
}
