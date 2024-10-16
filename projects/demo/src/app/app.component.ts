import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {ContactUsComponent} from "./templates/contact-us/contact-us.component";
import {LandingPageComponent} from "./templates/landing-page/landing-page.component";
import {NgIf} from "@angular/common";
import {rootConfig} from "./config";
import {PrismaTemplateComponent} from "./templates/prisma-template/prisma-template.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactUsComponent,
    LandingPageComponent,
    PrismaTemplateComponent,
    NgIf
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  contactUsIsActive: boolean;
  landingPageIsActive: boolean;
  constructor(
    private primengConfig: PrimeNGConfig) {
   // Enable ripple effect globally
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    const pageConfig = this.getPageConfig();
    console.log(pageConfig);
    this.contactUsIsActive = pageConfig.contactUsIsActive;
    this.landingPageIsActive = pageConfig.landingPageIsActive;
  }

  getPageConfig(): any {
    const localConfig = localStorage.getItem('config') ?? JSON.stringify(rootConfig);
    return JSON.parse(localConfig);
  }
}
