import { ComponentConfig } from "@gsaas/ngx-ui-builder";

// export const defaultConfig:ComponentConfig[] = [
//   {
//     id: 'header',
//     type: '_container',
//     items: ['nav-bar'],
//     classes: 'flex-column',
//   },
//   {
//     id: 'body',
//     type: '_container',
//     items: ['title'],
//     classes: 'flex-column',
//   },
//   {
//     id: 'footer',
//     type: '_container',
//     items: ['title'],
//     classes: 'flex-column',
//   },
//   {
//     id: 'title',
//     type: 'title',
//   },
//   {
//     id: 'nav-bar',
//     type: 'nav-bar',
//     logo: 'https://blocks.primeng.org/assets/images/blocks/logos/bastion.svg',
//   },
// ];

export const contactUsConfig:ComponentConfig[] = [
  {
    id: 'map',
    type: '_container',
    items: ['map-element'],
    classes: 'flex-column',
  },
  {
    id: 'form',
    type: '_container',
    items: ['form-element'],
    classes: 'flex-column',
  }
];

export const landingPageConfig:ComponentConfig[] = [
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
    logo: 'https://blocks.primeng.org/assets/images/blocks/logos/bastion.svg',
  },
];

export const rootConfig: any = {
  contactUsIsActive: false,
  landingPageIsActive: true,
}
