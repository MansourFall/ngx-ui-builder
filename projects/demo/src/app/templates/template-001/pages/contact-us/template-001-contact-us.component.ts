import {Component, OnInit} from "@angular/core";
import {TemplateNameDirective, ZoneComponent} from "@gsaas/ngx-ui-builder";
@Component({
  selector: 'app-template-001-contact-us',
  standalone: true,
  imports: [
    ZoneComponent,
    TemplateNameDirective
  ],
  templateUrl: './template-001-contact-us.component.html'
})
export class Template001ContactUsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
