import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div style={{ textAlign: 'center' }}>
          <ul style={{ display: 'inline-flex', gap: '1rem', justifyContent: 'center', padding: 0 }}>
            <li style={{ listStyle: 'none' }}>
              <a href="https://github.com">GitHub</a>
            </li>
            <li style={{ listStyle: 'none' }}>
              <a href="https://telegram.me/Mehraz_Logs">Telegram</a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
