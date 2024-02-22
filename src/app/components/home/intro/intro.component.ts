import { Component, OnInit } from '@angular/core';
import data from "../../../../assets/data/personal.json";
import { ContactService } from "../../../service/contact.service";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  data:any = data;
  greeting:string = "";
  firstName:string = data.personal.name.split(' ')[0];
  randomName:string = '';
  joke:string = "";

  constructor(protected Contact: ContactService) { }

  ngOnInit(): void {
    this.setGreeting();

    this.handleJoke();
    setInterval(() => {
      this.handleJoke();
    }, 10000)

    this.handleRandomName()
    setInterval(() => {
      this.handleRandomName();
    }, 8000)
  }

  setGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      this.greeting = "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greeting = "Boa tarde";
    } else {
      this.greeting = "Boa noite";
    }
  }

  handleRandomName():void {
    const index = Math.floor(Math.random()*(data.personal.name.split(' ').length-1)+1);
    this.randomName =
      (data.personal.name.split(' ')[index].length <= 2)?
      `${data.personal.name.split(' ')[index]} ${data.personal.name.split(' ')[index + 1]}`:
      data.personal.name.split(' ')[index]
  }

  handleJoke():void {
    const index = Math.floor(Math.random()*data.personal.jokes.length);
    this.joke = data.personal.jokes[index]
  }
}
