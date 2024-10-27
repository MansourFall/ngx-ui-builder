import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {AsyncPipe, NgIf} from "@angular/common";
import {Template001Component} from "./templates/template-001/template-001.component";
import {Template002Component} from "./templates/template-002/template-002.component";
import {UiConfigurationService} from "./services/ui-configuration.service";
import {Observable} from "rxjs";
import {Prisma01Component} from "./templates/prisma-01/prisma-01.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Template001Component,
    Template002Component,
    NgIf,
    AsyncPipe,
    Prisma01Component
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  uiConfig$: Observable<any>;
  constructor(
    private primengConfig: PrimeNGConfig,
    private uiConfigurationService: UiConfigurationService) {
   // Enable ripple effect globally
    this.primengConfig.ripple = true;
    this.uiConfig$ = this.uiConfigurationService.getGetConfigurationData();
  }

  ngOnInit() {
  }
}
