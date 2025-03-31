// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from "starlight-theme-obsidian";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://furkantaskin.github.io/wiki',
  base: '/wiki',
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
              label: ".NET, ASP.NET Core ve Blazor",
              items: [
                { label: "C#", autogenerate: {directory: "dotnet/csharp"} },
              ]
            }
          ],
		  customCss: ['./src/styles/global.css'],
      plugins: [starlightThemeObsidian()]
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});