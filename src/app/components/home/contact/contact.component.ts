import { Component, OnInit } from '@angular/core';
import data from "../../../../assets/data/personal.json"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data:any = data;
  constructor() { }

  ngOnInit(): void {
  }
}
