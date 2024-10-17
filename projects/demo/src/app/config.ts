import { ComponentConfig } from "@gsaas/ngx-ui-builder";

export const defaultConfig:ComponentConfig[] = [
  {
    id: 'header',
    type: '_container',
    items: ['nav-bar'],
    classes: 'flex-column',
  },
  {
    id: 'body',
    type: '_container',
    items: ['title'],
    classes: 'flex-column',
  },
  {
    id: 'footer',
    type: '_container',
    items: ['title'],
    classes: 'flex-column',
  },
  {
    id: 'title',
    type: 'title',
  },
  {
    id: 'nav-bar',
    type: 'nav-bar',
    logo: 'https://storage.googleapis.com/g-saas.appspot.com/tenants/66b36d8e84119bb650ebeb79/prima_health.png',
  },
];

