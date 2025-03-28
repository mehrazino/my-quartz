import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "مهراز آزاد",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "fa-IR",
    baseUrl: "mehrazino.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "Intel One Mono",
      },
      colors: {
        lightMode: {
          light: "rgba(250, 248, 248, 1)",
          lightgray: "rgba(229, 229, 229, 1)",
          gray: "rgba(184, 184, 184, 1)",
          darkgray: "rgba(78, 78, 78, 1)",
          dark: "rgba(43, 43, 43, 1)",
          secondary: "rgba(0, 173, 67, 1)",
          tertiary: "rgba(0, 143, 55, 1)",
          highlight: "rgba(0, 173, 67, 0.15)",
          textHighlight: "rgba(255, 255, 54, 0.53)",
        },
        darkMode: {
          light: "rgba(22, 22, 24, 1)",
          lightgray: "rgba(57, 54, 57, 1)",
          gray: "rgba(100, 100, 100, 1)",
          darkgray: "rgba(212, 212, 212, 1)",
          dark: "rgba(235, 235, 236, 1)",
          secondary: "rgba(0, 173, 67, 1)",
          tertiary: "rgba(0, 143, 55, 1)",
          highlight: "rgba(0, 173, 67, 0.15)",
          textHighlight: "rgba(179, 170, 2, 0.53)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
