import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  line-height: 1.2;
}

.page-title a {
  display: inline-block;
  color: var(--darkgray);
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.page-title a:hover {
  color: var(--secondary);
}

@media (max-width: 600px) {
  .page-title {
    font-size: 1.5rem;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
