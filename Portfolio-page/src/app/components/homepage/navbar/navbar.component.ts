import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isToggled = false;
  menuIcon;
  constructor() { }

  ngOnInit() {
    this.menuIcon = document.querySelector("#menuIcon");
  }

  public navClick() {
    this.isToggled = !this.isToggled;
    if (this.isToggled === false) {
      this.menuIcon.style.transform = 'rotate(-180deg)';
    } else {
      this.menuIcon.style.transform = 'rotate(90deg)';
    }


  }

}
