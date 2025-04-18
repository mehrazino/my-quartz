import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

// @ts-ignore
import floatingButtonsScript from "../scripts/floatingButtons.inline"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint not-found-page">
      <h1>گشتم نبود نگرد نیست!</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir} class="back-to-home">
        <span>{i18n(cfg.locale).pages.error.home}</span>
      </a>
      
      <div class="floating-buttons floating-right">
        <div class="button-group">
          {/* GRAPH BUTTON */}
          <button
            class="floating-button"
            data-action="graph"
          >
            <span class="floating-button-tooltip">نمایش گراف</span>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 55 55"
              fill="currentColor"
              xmlSpace="preserve"
            >
              <path
                d="M49,0c-3.309,0-6,2.691-6,6c0,1.035,0.263,2.009,0.726,2.86l-9.829,9.829C32.542,17.634,30.846,17,29,17
                s-3.542,0.634-4.898,1.688l-7.669-7.669C16.785,10.424,17,9.74,17,9c0-2.206-1.794-4-4-4S9,6.794,9,9s1.794,4,4,4
                c0.74,0,1.424-0.215,2.019-0.567l7.669,7.669C21.634,21.458,21,23.154,21,25s0.634,3.542,1.688,4.897L10.024,42.562
                C8.958,41.595,7.549,41,6,41c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6c0-1.035-0.263-2.009-0.726-2.86l12.829-12.829
                c1.106,0.86,2.44,1.436,3.898,1.619v10.16c-2.833,0.478-5,2.942-5,5.91c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.967-2.167-5.431-5-5.91
                v-10.16c1.458-0.183,2.792-0.759,3.898-1.619l7.669,7.669C41.215,39.576,41,40.26,41,41c0,2.206,1.794,4,4,4s4-1.794,4-4
                s-1.794-4-4-4c-0.74,0-1.424,0.215-2.019,0.567l-7.669-7.669C36.366,28.542,37,26.846,37,25s-0.634-3.542-1.688-4.897l9.665-9.665
                C46.042,11.405,47.451,12,49,12c3.309,0,6-2.691,6-6S52.309,0,49,0z M11,9c0-1.103,0.897-2,2-2s2,0.897,2,2s-0.897,2-2,2
                S11,10.103,11,9z M6,51c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S8.206,51,6,51z M33,49c0,2.206-1.794,4-4,4s-4-1.794-4-4
                s1.794-4,4-4S33,46.794,33,49z M29,31c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S32.309,31,29,31z M47,41c0,1.103-0.897,2-2,2
                s-2-0.897-2-2s0.897-2,2-2S47,39.897,47,41z M49,10c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S51.206,10,49,10z"
              />
            </svg>
          </button>

          {/* RANDOM PAGE */}
          <button
            class="floating-button"
            data-action="randomPage"
          >
            <span class="floating-button-tooltip">صفحه تصادفی</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 7H4.77985C6.93172 7 8.00766 7 8.87921 7.45631C9.25172 7.65134 9.59114 7.90388 9.88499 8.20464C10.5725 8.90832 10.8817 9.93888 11.5 12V12C12.1183 14.0611 12.4275 15.0917 13.115 15.7954C13.4089 16.0961 13.7483 16.3487 14.1208 16.5437C14.9923 17 16.0683 17 18.2202 17H21M21 17L18 14M21 17L18 20" stroke="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3536 6.64648L18.3536 3.64648L17.6464 4.35359L19.7929 6.50004H18.2202H18.1963C17.1406 6.50003 16.3153 6.50003 15.6464 6.55901C14.964 6.61918 14.405 6.74317 13.8889 7.01339C13.4698 7.2328 13.0879 7.51691 12.7574 7.85526C12.7386 7.87444 12.7202 7.8938 12.7019 7.91335C12.8289 8.16228 12.9399 8.41464 13.0406 8.66741C13.0782 8.7617 13.1154 8.85879 13.1523 8.95851C13.2519 8.80434 13.3571 8.6724 13.4727 8.5541C13.7298 8.29094 14.0268 8.06996 14.3527 7.89931C14.7081 7.71321 15.1228 7.60905 15.7343 7.55514C16.3542 7.50049 17.1355 7.50004 18.2202 7.50004H19.7929L17.6464 9.64648L18.3536 10.3536L21.3536 7.35359L21.7071 7.00004L21.3536 6.64648ZM10.2981 16.0867C10.1711 15.8378 10.0601 15.5854 9.95935 15.3327C9.92175 15.2384 9.88456 15.1413 9.84766 15.0416C9.74807 15.1957 9.64293 15.3277 9.52735 15.446C9.27024 15.7091 8.97324 15.9301 8.6473 16.1008C8.29185 16.2869 7.87716 16.391 7.26574 16.4449C6.64583 16.4996 5.86454 16.5 4.77985 16.5H3V17.5H4.77985H4.80369C5.85944 17.5 6.68467 17.5 7.35357 17.4411C8.03597 17.3809 8.59502 17.2569 9.11113 16.9867C9.5302 16.7673 9.91205 16.4832 10.2426 16.1448C10.2614 16.1256 10.2798 16.1063 10.2981 16.0867Z" fill="currentColor"></path> </g></svg>
          </button>
        </div>
      </div>
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

.floating-buttons {
  position: fixed;
  bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.floating-buttons.floating-right {
  right: 1.5rem;
}

.floating-buttons .button-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.floating-buttons .floating-button {
  width: 2rem;
  height: 2rem;
  background-color: var(--lightgray);
  border: none;
  border-radius: 4px;
  color: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  position: relative;
}

.floating-buttons .floating-button:hover {
  background-color: var(--gray);
  color: var(--light);
}

.floating-buttons .floating-button svg {
  width: 18px;
  height: 18px;
}

.floating-buttons .floating-button .floating-button-tooltip {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--dark);
  color: var(--light);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  pointer-events: none;
  font-family: var(--bodyFont);
  right: calc(100% + 10px);
}

.floating-buttons .floating-button .floating-button-tooltip::after {
  content: '';
  position: absolute;
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
  border-left: 4px solid var(--dark);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}

.floating-buttons .floating-button:hover .floating-button-tooltip {
  opacity: 1;
  visibility: visible;
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

NotFound.beforeDOMLoaded = floatingButtonsScript

export default (() => NotFound) satisfies QuartzComponentConstructor
