import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import data from "../../../assets/data/personal.json"

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  private slug:string|null = null;
  project:any = {}

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.slug = value.get("slug")
    })
    this.setProjectData()
  }

  setProjectData():void {
    let result;
    data.experiences.forEach(experience => {
      result = experience.developedProjects.find(project => project.slug === this.slug)
      if (result) {
        this.project = result;
      }
    })
    if (!result) {
      result = data.applications.find(app => app.slug === this.slug)
      if (result) {
        this.project = result;
      }
    }
    if (!result) {
      result = data.challenges.find(challenge => challenge.slug === this.slug)
      if (result) {
        this.project = result;
      }
    }
  }
}
