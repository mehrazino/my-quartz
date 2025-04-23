import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Flex({
      gap: "0.5rem",
      direction: "row",
      components: [
        {
          Component: Component.Search(),
          grow: true,
          shrink: false,
          basis: "calc(100% - 2.3rem)",
        },
        { 
          Component: Component.Darkmode(),
          align: "end",
          basis: "2rem",
        },
      ],
    }),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.GitHubEditLink({
        repoUrl: "https://github.com/mehrazino/my-quartz",
        branch: "v4",
        contentPath: "content",
        text: "ویرایش این صفحه در گیت‌هاب"
      }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.SocialButtons(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/mehrazino",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({rootName: "خانه", showCurrentPage: false}),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.MenuCards(),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({
      showReadingTime: false,
      showDate: false
    }),
    Component.TagList(),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    // Component.Explorer(),
    Component.FloatingButtons({position: 'right'}),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({rootName: "خانه", showCurrentPage: false}), 
    Component.ArticleTitle(), 
    Component.ContentMeta({
      showReadingTime: false,
      showDate: false
    })
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    // Component.Explorer(),
    Component.FloatingButtons({position: 'right'}),
  ],
  right: [],
}
