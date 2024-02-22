import { Component, OnInit } from '@angular/core';
import data from "../../../../assets/data/personal.json"

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  companyMenu:string[] = [];
  companySelected:any = data.experiences[0];

  constructor() { }

  ngOnInit(): void {
    data.experiences.forEach(experience => {
      this.companyMenu.push(experience.alias)
    })
  }
  selectCompany(value:string):void {
    this.companySelected = data.experiences.find(experience => experience.alias === value)
  }
}
