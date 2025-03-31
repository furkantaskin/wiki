// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';
import starlightThemeObsidian from "starlight-theme-obsidian";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://furkantaskin.github.io/wiki',
  base: '/wiki',
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["math", "mermaid"]
    }
  },
  integrations: [
    astroExpressiveCode({
      themes: ["one-dark-pro", "github-light"]
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
                { label: "C# Tipleri", link: "/dotnet/csharp/tipler"},
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