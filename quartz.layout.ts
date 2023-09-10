import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Darkmode(),Component.PreviousFile(), Component.NextFile()],
  footer: Component.Footer({
    links: {
      "GitHub": ["https://github.com/UnMolDeQuimica", "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"],
      "Discord ": ["https://discord.gg/Q3HzFj4G", "https://i0.wp.com/spaniardperformance.com/wp-content/uploads/2023/04/discord-logo.png"],
      "YouTube": ["https://www.youtube.com/@unmoldequimica", "https://1000marcas.net/wp-content/uploads/2020/02/Logotipo-rojo-de-YouTube.png"]
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList(),],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    Component.Graph(),
    Component.ParentLink(),
    Component.InChapter(),
    Component.Backlinks()
],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
