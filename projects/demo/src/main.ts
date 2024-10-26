import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ConfigModule, SvgIconsModule, icons } from '@gsaas/ngx-ui-builder';
import {provideRouter, Route} from "@angular/router";

if (environment.production) {
  enableProdMode();
}

const routes: Route[] = [
  {
    path: 'pages/:pageRoute',
    component: AppComponent,
  },
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages/home' }
]

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      HttpClientModule,
      SvgIconsModule.forRoot({icons: icons}),
      StoreModule.forRoot({}),
      ConfigModule
    ]),
    provideRouter(routes)
  ]
})
