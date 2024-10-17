import { ComponentConfig } from "@gsaas/ngx-ui-builder";

export const defaultConfig:ComponentConfig[] = [
  {
    id: 'header',
    type: '_container',
    items: ['header-logo', 'header-links'],
  },
  {
    id: 'header-logo',
    type: '_container',
    items: ['logo'],
    classes: 'flex-column',
  },
  {
    id: 'logo',
    type: 'image',
    src: 'https://storage.googleapis.com/g-saas.appspot.com/tenants/66b36d8e84119bb650ebeb79/prima_health.png',
  },
  {
    id: 'header-links',
    type: '_container',
    items: ['home-link', 'about-us-link', 'contact-us-link'],
    classes: 'flex',
  },
  {
    id: 'home-link',
    type: 'link',
    label: 'Home',
    href: '/',
    color: '#ffffff',
  },
  {
    id: 'about-us-link',
    type: 'link',
    label: 'About Us',
    href: '/about-us',
    color: '#ffffff',
  },
  {
    id: 'contact-us-link',
    type: 'link',
    label: 'Contact Us',
    href: '/contact-us',
    color: '#ffffff',
  },
  {
    id: 'body',
    type: '_container',
    items: ['title'],
    classes: 'flex-column',
  },
  {
    id: 'header-buttons',
    type: '_container',
    items: ['sign-up-button','log-in-button'],
    classes: 'flex gap-2',
  },
  {
    id: 'sign-up-button',
    type: 'button-filled',
    label: 'Sign Up',
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  {
    id: 'log-in-button',
    type: 'button-outlined',
    label: 'Log In',
    color: '#ffffff',
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

