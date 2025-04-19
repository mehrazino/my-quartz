import {QuartzComponentConstructor, QuartzComponentProps} from "./types"
// @ts-ignore
import script from "./scripts/floatingButtons.inline"
import style from "./styles/floatingButtons.scss"
import {classNames} from "../util/lang"
import { getFullSlug } from "../util/path"

interface FloatingButtonsOptions {
  position?: 'left' | 'right'
}

export default ((opts?: FloatingButtonsOptions) => {
  function FloatingButtons({ displayClass, fileData }: QuartzComponentProps) {
    const position = opts?.position || 'right'
    const isIndexPage = fileData.slug === "index"
    
    return (
      <div class={classNames(displayClass, "floating-buttons", `floating-${position}`)}>
        <div class="button-group">
          {/* SCROLL UP - Hide on index page */}
          {!isIndexPage && (
            <button
              class="floating-button"
              data-action="scrollTop"
            >
              <span class="floating-button-tooltip">رفتن به اول صفحه</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          )}
          
          {/* SCROLL DOWN - Hide on index page */}
          {!isIndexPage && (
            <button
              class="floating-button"
              data-action="scrollBottom"
            >
              <span class="floating-button-tooltip">رفتن به آخر صفحه</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          )}
        </div>
      </div>
    )
  }

  FloatingButtons.css = style
  FloatingButtons.afterDOMLoaded = script
  return FloatingButtons
}) satisfies QuartzComponentConstructor 