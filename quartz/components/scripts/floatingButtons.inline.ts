import { FullSlug, getFullSlug, pathToRoot, simplifySlug } from "../../util/path"

// Global variables to store state
let currentCleanup: (() => void) | null = null

// Setup floating buttons
function setupFloatingButtons() {
  // Clean up previous setup
  if (currentCleanup) {
    currentCleanup()
    currentCleanup = null
  }

  const buttonGroups = document.querySelectorAll<HTMLElement>('.button-group')

  // Handle button clicks
  function handleButtonClick(e: Event) {
    const button = (e.target as Element).closest('[data-action]')
    if (!button) return
    
    const action = (button as Element).getAttribute('data-action')

    switch (action) {
      case 'scrollTop':
        // Scroll to top of page
        globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        break
      case 'scrollBottom':
        // Scroll to bottom of page
        const documentHeight = document.documentElement.scrollHeight;
        globalThis.scrollTo({ top: documentHeight, behavior: "smooth" });
        break
    }
  }

  // Add click event listeners to buttons
  buttonGroups.forEach(group => {
    group.addEventListener('click', handleButtonClick)
  })

  // Store cleanup function for later use
  currentCleanup = () => {
    buttonGroups.forEach(group => {
      group.removeEventListener('click', handleButtonClick)
    })
  }
}

// Initialize buttons when page loads and during navigation
document.addEventListener('DOMContentLoaded', setupFloatingButtons)
document.addEventListener('nav', setupFloatingButtons) 