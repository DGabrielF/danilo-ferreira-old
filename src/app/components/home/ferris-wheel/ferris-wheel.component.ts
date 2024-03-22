import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from "../../../service/contact.service";

@Component({
  selector: 'app-ferris-wheel',
  templateUrl: './ferris-wheel.component.html',
  styleUrls: ['./ferris-wheel.component.css']
})
export class FerrisWheelComponent implements OnInit {
  @Input() itemsArray:any[] = [
    {name: "seu"},
    {name: "no"},
    {name: "edite"},
    {name: "html"},
  ]

  arrayWithPosition:any[] = []
  imageBaseUrl:string = "../.."
  constructor(protected contact: ContactService) { }

  ngOnInit(): void {
    this.arrayWithPosition = [...this.itemsArray]
    this.setElementsPosition()
  }

  setElementsPosition():void {
    const TOTAL = 100;
    this.arrayWithPosition.map((item, index) => {
      const angle = index * 2*Math.PI/ this.itemsArray.length
      item.left = Math.floor(TOTAL/2*(1+Math.cos(angle)))
      item.bottom = Math.floor(TOTAL/2*(1+Math.sin(angle)))
    })
  }
}
