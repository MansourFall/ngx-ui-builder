import {Component, Input, OnInit} from "@angular/core";
import {ComponentConfig, TemplateNameDirective, ZoneComponent} from "@gsaas/ngx-ui-builder";

@Component({
    selector: 'app-template-001-landing',
    standalone: true,
  imports: [
    ZoneComponent,
    TemplateNameDirective
  ],
    templateUrl: './template-001-landing.component.html'
  }
)
export class Template001LandingComponent implements OnInit {
  @Input() config: ComponentConfig[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
