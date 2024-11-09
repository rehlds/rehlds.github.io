import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Re:HLDS",
  tagline: "Refined HLDS with fixes and new features for better performance.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://rehlds.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rehlds", // Usually your GitHub org/user name.
  projectName: "rehlds.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/rehlds/rehlds.github.io/tree/master/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/rehlds/rehlds.github.io/tree/master/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    announcementBar: {
      backgroundColor: "var(--ifm-color-primary-lighter)",
      textColor: "var(--ifm-color-text)",
      content:
        '<strong><a href="/blog/2024/11/01/welcome">🫵 We need you!</a></strong>',
    },
    navbar: {
      title: "ReHLDS Documentation",
      logo: {
        alt: "ReHLDS Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/rehlds",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/ReHLDS_Community",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub ",
              href: "https://github.com/rehlds",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ReHLDS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "GCT2K03UR1",
      apiKey: "41b3073341af875e11a1de96cd00f535",
      indexName: "rehldsio",
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-REKDWWGWC3",
        anonymizeIP: false,
      },
    ],
    [
      "docusaurus-plugin-yandex-metrica",
      {
        counterID: "98867928",
        webvisor: true,
      },
    ],
  ],
};

export default config;
