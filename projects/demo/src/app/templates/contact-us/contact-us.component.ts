import {Component, OnInit} from "@angular/core";
import {
  ComponentConfig,
  ConfigService,
  ConfiguratorComponent, NgModelChangeDebouncedDirective, TemplateNameDirective, ToastComponent,
  ToolbarComponent, TooltipDirective,
  ZoneComponent
} from "@gsaas/ngx-ui-builder";
import { contactUsConfig } from "../../config";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {BadgeModule} from "primeng/badge";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    ContactUsComponent,
    ZoneComponent,
    ToolbarComponent,
    ConfiguratorComponent,
    ToastComponent,
    TemplateNameDirective,
    NgModelChangeDebouncedDirective,
    TooltipDirective,

    ButtonModule,
    RippleModule,
    StyleClassModule,
    BadgeModule
  ],
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

  constructor(
    public configService: ConfigService) {
  }

  ngOnInit() {
    // Initial state of the UI builder
    this.configService.init(this.getPageConfig());
  }

  getPageConfig(): ComponentConfig[] {
    const localConfig = localStorage.getItem('config') ?? JSON.stringify(contactUsConfig);
    return JSON.parse(localConfig) as ComponentConfig[];
  }

}
