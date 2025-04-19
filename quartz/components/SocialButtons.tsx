import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/socialButtons.scss"
import { classNames } from "../util/lang"

interface SocialButtonsOptions {
  github?: string
  telegram?: string
}

export default ((opts?: SocialButtonsOptions) => {
  function SocialButtons({ displayClass }: QuartzComponentProps) {
    const githubUrl = opts?.github || "https://github.com/mehrazino"
    const telegramUrl = opts?.telegram || "https://telegram.me/Mehraz_Logs"
    
    return (
      <div class={classNames(displayClass, "social-floating-buttons")}>
        <div class="button-group">
          {/* GitHub */}
          <a 
            href={githubUrl}
            class="floating-button github-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="گیت‌هاب"
          >
            <span class="floating-button-tooltip">گیت‌هاب</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svg-icon github">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.743.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
          
          {/* Telegram */}
          <a 
            href={telegramUrl}
            class="floating-button telegram-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تلگرام"
          >
            <span class="floating-button-tooltip">تلگرام</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svg-icon telegram">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
        </div>
      </div>
    )
  }

  SocialButtons.css = style
  return SocialButtons
}) satisfies QuartzComponentConstructor 