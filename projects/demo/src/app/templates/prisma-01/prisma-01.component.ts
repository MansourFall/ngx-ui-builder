import {Component, Input, OnInit} from "@angular/core";
import {CommonModule, NgIf} from "@angular/common";
import {
  ConfigService,
  ConfigurableService, ConfiguratorComponent, NgModelChangeDebouncedDirective,
  TemplateNameDirective, ToolbarComponent, TooltipDirective,
  ZoneComponent
} from "@gsaas/ngx-ui-builder";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {BadgeModule} from "primeng/badge";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {Prisma01LandingComponent} from "./pages/landing/prisma-01-landing.component";
import {Prisma01ContactUsComponent} from "./pages/contact-us/prisma-01-contact-us.component";
import {Prisma01AboutUsComponent} from "./pages/about-us/prisma-01-about-us.component";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'prisma-01',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,

    ButtonModule,
    RippleModule,
    StyleClassModule,
    BadgeModule,

    Prisma01LandingComponent,
    Prisma01ContactUsComponent,
    Prisma01AboutUsComponent,

    ZoneComponent,
    TemplateNameDirective,
    ConfiguratorComponent,
    ReactiveFormsModule,
    ToolbarComponent,
    TooltipDirective,
    NgModelChangeDebouncedDirective,
    RouterLink,
    DividerModule
  ],
  templateUrl: './prisma-01.component.html',
})
export class Prisma01Component implements OnInit {
  @Input() uiConfig: any = {};
  currentYear = new Date().getFullYear();
  pageIdentifier: string = '';
  siteColor: string = '#467E7B'  ;
  constructor(
    public configService: ConfigService,
    public configurableService: ConfigurableService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.configService.init(JSON.parse(this.uiConfig.configuration));
    const currentPage = this.uiConfig?.pages?.find((page: any) => page.pageRoute === this.router.url.replace('/pages',''));
    this.pageIdentifier =  currentPage?.pageIdentifier ?? this.uiConfig.defaultPageIdentifier;
  }

  navigateTo(path: string) {
    const sanitizedPath = path.startsWith('/') ? path.slice(1) : path;
    this.router.navigate(['/pages', sanitizedPath]).then(() => window.location.reload());
  }
}
