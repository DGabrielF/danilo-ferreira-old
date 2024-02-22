import { Component, Input, OnInit } from '@angular/core';
import data from "../../../../assets/data/personal.json"

@Component({
  selector: 'app-falling-words',
  templateUrl: './falling-words.component.html',
  styleUrls: ['./falling-words.component.css']
})
export class FallingWordsComponent implements OnInit {
  @Input() wordsArray:string[] = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  @Input() paddingPx:number = window.innerWidth * 0.1;
  @Input() heigthPx:string = String(Math.floor(window.innerHeight * 0.1))+"px";
  bgHeigth:string = (parseInt(this.heigthPx.replace(/\D/g,""))+15)+"px"

  words:{text: string, position: number}[] = [];

  constructor() { }

  ngOnInit(): void {
    this.startEffect()
  }

  startEffect() {
    setInterval(() => {
      const index = Math.floor(Math.random() * this.wordsArray.length);
      const position = 0.5 * this.paddingPx + Math.random() * (window.innerWidth - 2 * this.paddingPx);
      const foundWord = this.words.find(w => w.text === this.wordsArray[index])
      if (foundWord) {
        foundWord.position = position;
      } else {
        this.words.push({text: this.wordsArray[index], position: position});
      }
    }, 2500)
  }
}
