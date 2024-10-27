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

    ZoneComponent,
    TemplateNameDirective,
    ConfiguratorComponent,
    ReactiveFormsModule,
    ToolbarComponent,
    TooltipDirective,
    NgModelChangeDebouncedDirective,
    RouterLink
  ],
  templateUrl: './prisma-01.component.html',
})
export class Prisma01Component implements OnInit {
  @Input() uiConfig: any = {};
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
