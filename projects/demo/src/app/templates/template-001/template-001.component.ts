import {Component, Input, OnInit} from "@angular/core";
import {Template001LandingComponent} from "./pages/landing/template-001-landing.component";
import {Template001AboutUsComponent} from "./pages/about-us/template-001-about-us.component";
import {Template001ContactUsComponent} from "./pages/contact-us/template-001-contact-us.component";
import {CommonModule, NgIf} from "@angular/common";
import {
  ConfigService,
  ConfigurableService, ConfiguratorComponent, NgModelChangeDebouncedDirective,
  TemplateNameDirective, ToolbarComponent, TooltipDirective,
  ZoneComponent
} from "@gsaas/ngx-ui-builder";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-template-001',
    standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,

    Template001LandingComponent,
    Template001AboutUsComponent,
    Template001ContactUsComponent,

    ZoneComponent,
    TemplateNameDirective,
    ConfiguratorComponent,
    ReactiveFormsModule,
    ToolbarComponent,
    TooltipDirective,
    NgModelChangeDebouncedDirective
  ],
    templateUrl: './template-001.component.html',
})
export class Template001Component implements OnInit {
  @Input() uiConfig: any = {};
  pageIdentifier: string = '';
  constructor(
    public configService: ConfigService,
    public configurableService: ConfigurableService,
    private router: Router
  ) { }
  ngOnInit(): void {
    console.log('uiConfig',this.uiConfig);
    console.log('current route', this.router.url)
    this.configService.init(JSON.parse(this.uiConfig.configuration));
    const currentPage = this.uiConfig?.pages?.find((page: any) => page.pageRoute === this.router.url.replace('/pages',''));
    this.pageIdentifier =  currentPage?.pageIdentifier ?? this.uiConfig.defaultPageIdentifier;

  }
}
