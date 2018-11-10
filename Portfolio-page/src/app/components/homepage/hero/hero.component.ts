import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router'; // <-- do not forget to import


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {

  constructor(router: Router) {

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });

  }


}
