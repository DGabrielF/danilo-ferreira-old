import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  menuIsOpen: boolean = false;

  constructor(protected contact: ContactService) { }

  ngOnInit(): void {
  }

  toggleMenuIsOpen() {
    this.menuIsOpen = !this.menuIsOpen
  }
}
