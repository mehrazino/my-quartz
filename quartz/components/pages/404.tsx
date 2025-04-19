import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint not-found-page">
      <h2>گشتم نبود نگرد نیست!</h2>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir} class="back-to-home">
        <span>{i18n(cfg.locale).pages.error.home}</span>
      </a>
    </article>
  )
}

NotFound.css = `
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
}

.not-found-page h1 {
  margin-bottom: 1rem;
}

.not-found-page p {
  margin-bottom: 1.5rem;
}

.back-to-home {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid var(--lightgray);
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: var(--darkgray);
  transition: all 0.3s ease;
  min-width: 10rem;
}

.back-to-home:hover {
  background-color: var(--secondary);
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--secondary);
}

.back-to-home:hover span {
  color: white;
}

.back-to-home span {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--darkgray);
  transition: all 0.3s ease;
}

@media (max-width: 600px) {
  .back-to-home {
    width: 90%;
    max-width: 250px;
    background-color: transparent;
    border: 1px solid var(--lightgray);
    margin-top: 1rem;
  }
  
  .back-to-home:hover {
    transform: none;
    box-shadow: none;
    background-color: var(--lightgray);
    border-color: var(--lightgray);
  }
  
  .back-to-home:hover span {
    color: var(--darkgray);
  }
}
`

export default (() => NotFound) satisfies QuartzComponentConstructor
