import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isToggled = false;
  openedNav;
  constructor() { }

  ngOnInit() {
    // this.openedNav = document.querySelector("#open-navbar");
    // this.openedNav.style.display = "none";
  }

  public navClick() {
    this.isToggled = !this.isToggled;
    console.log(this.isToggled);

    // if (this.isToggled) {
    //   this.openedNav.style.display = "block";
    // } else {
    //   this.openedNav.style.display = "none";
    // }
  }

}
