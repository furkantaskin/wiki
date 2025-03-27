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
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
		  customCss: ['./src/styles/global.css']
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});