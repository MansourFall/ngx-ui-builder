import {Component, Input, OnInit} from "@angular/core";
import {NgIf} from "@angular/common";
import {ConfigService, ConfigurableService} from "@gsaas/ngx-ui-builder";
import {Template002LandingComponent} from "./pages/landing/template-002-landing.component";
import {Template002ContactUsComponent} from "./pages/contact-us/template-002-contact-us.component";
import {Template002AboutUsComponent} from "./pages/about-us/template-002-about-us.component";

@Component({
    selector: 'app-template-002',
    standalone: true,
  imports: [
    Template002LandingComponent,
    Template002AboutUsComponent,
    Template002ContactUsComponent,
    NgIf
  ],
    templateUrl: './template-002.component.html',
})
export class Template002Component implements OnInit {
  @Input() uiConfig: any = {};
  pageIdentifier: string = '';
  constructor(
    public configService: ConfigService,
    public configurableService: ConfigurableService,
  ) { }
  ngOnInit(): void {
    this.configService.init(JSON.parse(this.uiConfig.configuration));
    this.pageIdentifier = this.uiConfig.defaultPageIdentifier;
  }
}
