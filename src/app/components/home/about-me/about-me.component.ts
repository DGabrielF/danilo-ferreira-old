import { Component, OnInit } from '@angular/core';
import data from "../../../../assets/data/personal.json"

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  data:any = data
  isPhotoHover:boolean = false;
  usedTools:string[] = [];

  constructor() { }

  ngOnInit(): void {
    data.applications.forEach(app => {
      this.usedTools.push(...app.usedTools)
    })
    data.challenges.forEach(challenge => {
      this.usedTools.push(...challenge.usedTools)
    })
    data.experiences.forEach(experience => {
      experience.developedProjects.forEach(project => {
        this.usedTools.push(...project.usedTools)
      })
    })
  }

  togglePhotoHover() {
    this.isPhotoHover = !this.isPhotoHover;
  }
}
