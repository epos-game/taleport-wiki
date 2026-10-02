import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import { basePaths } from './src/plugins/base-paths.mjs';

// Set SITE_URL, and SITE_BASE when the site is served from a sub-path rather than the root of its
// origin: a GitHub Pages project page is https://<owner>.github.io/<repo>/, so SITE_BASE is
// /<repo>/. The base-paths plugin carries that prefix onto the links and images written by hand in
// Markdown, which Astro leaves alone.
const site = process.env.SITE_URL ?? 'https://docs.epos.games';
const base = process.env.SITE_BASE || undefined;

const section = (label, cs, directory) => ({
  label,
  translations: { cs },
  items: [{ autogenerate: { directory } }],
});

export default defineConfig({
  site,
  base,
  markdown: {
    // Explicit rule anchors ("{#cr-i-1}"), so a citation survives the rule being reworded.
    processor: satteri({
      features: { headingAttributes: true },
      hastPlugins: base ? [basePaths(base)] : [],
    }),
  },
  integrations: [
    starlight({
      title: 'TalePort',
      description: 'How to write, publish and earn from interactive stories on TalePort.',
      favicon: '/favicon.png',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        cs: { label: 'Čeština', lang: 'cs' },
      },
      customCss: ['./src/styles/custom.css', './src/styles/screenshot-sizes.css'],
      components: {
        // Header and Sidebar together move the wordmark out of the top bar and into the head of
        // the left column, so the sidebar runs the full height of the window. The logo is the
        // masthead of the navigation rather than one more item in a crowded bar.
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
        MobileTableOfContents: './src/components/MobileTableOfContents.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
      // Roboto is the brand face on epos.games and on the Academy; the authoring app is the only
      // TalePort surface that falls back to the system stack.
      head: [
        // The palette lives in an external stylesheet, so without this the browser paints its
        // default white canvas for the first frame of every navigation and reload.
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Roboto+Mono:wght@400&display=swap',
          },
        },
      ],
      lastUpdated: true,
      // Sequential paging pairs whatever pages happen to be adjacent, across section boundaries.
      // This is a reference wiki, not a course, so the sidebar and links are the way through it.
      pagination: false,
      editLink: { baseUrl: 'https://github.com/epos-game/taleport-wiki/edit/main/' },
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/G5fVTPF9fh' },
      ],
      sidebar: [
        section('Getting Started', 'Začínáme', 'getting-started'),
        section('Story Editor', 'Editor příběhu', 'story-editor'),
        section('Media', 'Média', 'media'),
        section('Publishing & Content Rules', 'Publikování a pravidla obsahu', 'publishing'),
        section('Monetization', 'Zpeněžení', 'monetization'),
        section('Best Practices', 'Osvědčené postupy', 'best-practices'),
      ],
    }),
  ],
});
