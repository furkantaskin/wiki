// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from "starlight-theme-obsidian";

import tailwindcss from '@tailwindcss/vite';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://furkantaskin.github.io/wiki',
  base: '/wiki',
  integrations: [
    astroExpressiveCode({
      themes: ["github-dark-dimmed", "github-light"]
    }),
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
            {
              label: "C#", items: [
                { label: "Temel Bilgiler", link: "/dotnet/csharp/temel-bilgiler" },
                { label: "Program Yapısı", link: "/dotnet/csharp/program-yapisi" },
                
              ]
            },
          ]
        }
      ],
      customCss: ['./src/styles/global.css'],
      plugins: [starlightThemeObsidian()]
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});