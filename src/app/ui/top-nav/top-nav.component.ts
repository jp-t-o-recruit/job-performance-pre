import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent {
  menus = [
    {
      link: "/login",
      label: "login"
    },
    {
      link: "/content/production-summary",
      label: "production-summary"
    }
  ];

  constructor() {}
}
