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
    id: 'about-us-primary',
    type: '_container',
    items: ['about-us-primary-heading'],
  },
  {
    id: 'about-us-primary-heading',
    type: 'primary-heading',
    text: 'About Us',
    color: '#000000',
  },
  {
    id: 'about-us-secondary',
    type: '_container',
    items: ['about-us-secondary-heading'],
  },
  {
    id: 'about-us-secondary-heading',
    type: 'secondary-heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    color: '#000000',
  },
  {
    id: 'about-us-content',
    type: '_container',
    items: ['about-us-content-paragraph'],
    classes: 'flex-column',
  },
  {
    id: 'about-us-content-paragraph',
    type: 'paragraph',
    text: 'Sed do eiusmod tempor darko vador incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lumen do eiusmod ator incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum etc do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    color: '#000000',
  },
  {
   id: 'featured-image',
    type: '_container',
    items: ['about-us-featured-image'],
  },
  {
    id: 'about-us-featured-image',
    type: 'image',
    src: 'https://s3-alpha-sig.figma.com/img/fe3e/13a7/6ce3d2e6eda966b37b643d639baa140f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jJYYWYsKSOvorPMIm~dAgFKLZibMOlr5aQwy5hxn9HwnzQk6ZUB8j25YViv5aCYSEScR~5PnZ1aBGo3K9OQWUiEqqt-vx-~ZRZxV1rI-4SZD6jeyASXb75YH5WqeiBrNGWCcSA1R5U-zqWesp5rHg-jbxHghEXiKP32m4hoSlPX4bLajf4BeNVkzoEYtRASmP-9tCF1riIEiJtv7eIk0jPfTdZiP-872nRICS3pXuHlQYZ4jGM1zWo4GUSSj2ZpDDrdJp8YFJwuLIxETzO--hg3OopVVKzw1A5ptDPyUzSn2TZb-lhUb2uW~r6RuoHnlOHmpFQzc4SFdM5Robn0vkw__',
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

