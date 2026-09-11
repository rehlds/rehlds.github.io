import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const repoName = "rehlds.github.io"

// Yandex.Metrica, wired in directly instead of via docusaurus-plugin-yandex-metrica.
// That plugin pinned @docusaurus/core to an exact old version (dragging a second,
// stale dependency tree into the lockfile) and injected its <noscript> counter into
// <head>, which is invalid HTML and produced four minifier diagnostics per page.
// The counter script belongs in <head>; the <noscript> pixel belongs at end of <body>.
function yandexMetrica(counterID: string) {
  return function yandexMetricaPlugin() {
    return {
      name: "yandex-metrica",
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: "script",
              innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<e.length;j++){if(e[j].src===r){return}}k=t.createElement("script"),a=t.getElementsByTagName("script")[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document.scripts,document,"https://mc.yandex.ru/metrika/tag.js","ym");ym(${counterID},"init",{defer:true,clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`,
            },
          ],
          postBodyTags: [
            {
              tagName: "noscript",
              innerHTML: `<div><img src="https://mc.yandex.ru/watch/${counterID}" style="position:absolute;left:-9999px" alt="" /></div>`,
            },
          ],
        };
      },
    };
  };
}

const config: Config = {
  title: "ReHLDS",
  tagline: "Refined HLDS with fixes and new features for better performance.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://rehlds.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  deploymentBranch: "gh-pages",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rehlds", // Usually your GitHub org/user name.
  projectName: repoName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "zh-Hans"],
    localeConfigs: {
      en: {
        label: "English",
      },
      ru: {
        label: "Русский",
      },
      "zh-Hans": {
        label: "简体中文",
        htmlLang: "zh-Hans",
      },
    },
  },
  storage: {
    type: 'localStorage',
    namespace: true,
  },
  future: {
    v4: true, // opt-in for Docusaurus v4 planned changes
    faster: true, // turns Docusaurus Faster on globally
   // fasterByDefault: true,  // https://docusaurus.io/blog/releases/3.10
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/rehlds/" + repoName + "/tree/master/",
          editLocalizedFiles: true
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom", "json"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/rehlds/" + repoName + "/tree/master/",
          // Useful options to enforce blogging best practices
          onInlineTags: "ignore",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "warn",
          editLocalizedFiles: true
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
    image: "img/rehlds-social-card.jpg",
    announcementBar: {
      backgroundColor: "var(--ifm-color-primary-lighter)",
      textColor: "var(--ifm-color-text)",
      content: ''
        + '<strong>'
          + '<a href="/blog/2024/11/01/welcome">🫵 We need you!</a>'
        + '</strong>',
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
          type: 'localeDropdown',
          position: 'right',
        },
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
              label: "Discord",
              href: "https://rehlds.dev/to/discord",
            },
            {
              label: "Telegram",
              href: "https://rehlds.dev/to/telegram",
            },
            {
              label: "Telegram Chat",
              href: "https://rehlds.dev/to/telegram-chat",
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
              label: "GitHub",
              href: "https://github.com/rehlds",
            },
            {
              label: "Sitemap",
              href: "https://rehlds.dev/sitemap.xml"
            }
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
    yandexMetrica("98867928"),
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/rehlds.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(255, 100, 5)",
          },
        ],
      },
    ],
  ],
};

export default config;
