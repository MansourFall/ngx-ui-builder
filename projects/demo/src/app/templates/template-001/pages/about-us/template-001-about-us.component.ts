import {Component, OnInit} from "@angular/core";
import {TemplateNameDirective, ZoneComponent} from "@gsaas/ngx-ui-builder";

@Component({
  selector: 'app-template-001-about-us',
  standalone: true,
  imports: [
    ZoneComponent,
    TemplateNameDirective
  ],
  templateUrl: './template-001-about-us.component.html'
})
export class Template001AboutUsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
