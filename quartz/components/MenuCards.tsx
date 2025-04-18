import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"

const MenuCards: QuartzComponent = ({ fileData, displayClass, cfg }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  
  return (
    <div class={classNames(displayClass, "menu-cards")}>
      <div class="logo-container">
        <img src={baseDir + "/static/icon-header.png"} alt="لوگوی وبسایت" class="site-logo" />
      </div>
      <div class="menu-row">
        <a href={baseDir + "/درباره"} class="menu-card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="5"/>
            <path d="M20 21a8 8 0 0 0-16 0"/>
          </svg>
          <span>درباره من</span>
        </a>
        
        <a href={baseDir + "/وبلاگ"} class="menu-card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <line x1="16" y1="8" x2="8" y2="8"></line>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="18" x2="8" y2="18"></line>
          </svg>
          <span>وبلاگ</span>
        </a>
        
        <a href={baseDir + "/گفتارها"} class="menu-card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <line x1="9" y1="12" x2="15" y2="12"/>
          </svg>
          <span>گفتارها</span>
        </a>
        
        <a href={baseDir + "/کتاب‌ها"} class="menu-card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          <span>کتاب‌ها</span>
        </a>
      </div>
    </div>
  )
}

MenuCards.css = `
.menu-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0.75rem 0;
  width: 100%;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.site-logo {
  width: 300px;
  height: auto;
  user-select: none;
}

.menu-row {
  display: flex;
  gap: 0.5rem;
  width: 100%;
}

.menu-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid var(--lightgray);
  border-radius: 4px;
  padding: 0.75rem;
  flex: 1;
  text-decoration: none;
  color: var(--darkgray);
  transition: all 0.3s ease;
  min-height: 4.5rem;
}

.menu-card:hover {
  background-color: var(--secondary);
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--secondary);
}

.menu-card:hover svg {
  stroke: white !important;
}

.menu-card:hover span {
  color: white !important;
}

.menu-card svg {
  width: 1.7rem;
  height: 1.7rem;
  margin-bottom: 0.5rem;
  stroke: var(--darkgray);
  transition: all 0.3s ease;
}

.menu-card span {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--darkgray);
  transition: all 0.3s ease;
}

@media (max-width: 600px) {
  .menu-cards {
    padding: 0 1rem;
    box-sizing: border-box;
    align-items: center;
  }

  .menu-row {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    align-items: center;
  }

  .menu-card {
    width: 90%;
    margin: 0 0 0.5rem 0;
    padding: 0.6rem;
    min-height: 3.5rem;
    max-width: 400px;
    background-color: transparent;
    border: 1px solid var(--lightgray);
  }
  
  .menu-card:hover {
    transform: none;
    box-shadow: none;
    background-color: var(--lightgray);
    border-color: var(--lightgray);
  }
  
  .menu-card:hover svg {
    stroke: var(--darkgray) !important;
  }
  
  .menu-card:hover span {
    color: var(--darkgray) !important;
  }
  
  .site-logo {
    width: 200px;
  }
}
`

export default (() => MenuCards) satisfies QuartzComponentConstructor 