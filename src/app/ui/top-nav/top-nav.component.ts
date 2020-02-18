import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes as CONTENT_ROUTES } from '../content/content.module';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  menus = [
    {
      link: '/login',
      label: 'login'
    },
    {
      link: '/content/production-summary',
      label: 'production-summary'
    }
  ];

  constructor() {
    this.menus =  CONTENT_ROUTES.map(d => {
      return {};
    });
  }
}
