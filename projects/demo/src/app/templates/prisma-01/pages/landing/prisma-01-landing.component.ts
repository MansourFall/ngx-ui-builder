import {Component, OnInit} from "@angular/core";
import {TemplateNameDirective, ZoneComponent} from "@gsaas/ngx-ui-builder";
import {NgStyle} from "@angular/common";

@Component({
  selector: "prisma-01-landing",
  standalone: true,
  templateUrl: "./prisma-01-landing.component.html",
  imports: [
    ZoneComponent,
    TemplateNameDirective,
    NgStyle
  ]
})
export class Prisma01LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
