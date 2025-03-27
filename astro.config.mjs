// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Personal Docs',
          social: {
              github: 'https://github.com/furkantaskin/wiki',
              "x.com": 'https://x.com/muffinisamuffin',
              instagram: 'https://instagram.com/muffinisamuffin',
              linkedin: 'https://linkedin.com/in/furkant1',
          },
		  customCss: ['./src/styles/global.css']
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});