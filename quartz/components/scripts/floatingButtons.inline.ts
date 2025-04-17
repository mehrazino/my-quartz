import { FullSlug, getFullSlug, pathToRoot, simplifySlug } from "../../util/path"

// ایجاد متغیرهای سراسری برای ذخیره وضعیت
let currentCleanup: (() => void) | null = null

// بازیابی یک صفحه تصادفی
async function navigateToRandomPage() {
    const fullSlug = getFullSlug(window)
    const currentSlug = simplifySlug(getFullSlug(window))
    // @ts-ignore
    const data = await fetchData
    // فیلتر کردن صفحات با تگ‌های خاص
    const allPosts = Object.keys(data)
      .filter((slug) => {
        const fileData = data[slug]
        const hasExcludeTag = fileData.tags?.some((tag: string) => tag.endsWith("exclude"))
        return !hasExcludeTag
      })
      .map((slug) => simplifySlug(slug as FullSlug))

    let newSlug = allPosts[Math.floor(Math.random() * allPosts.length)];

    // اطمینان از اینکه صفحه جدید همان صفحه فعلی نباشد
    while (newSlug === currentSlug) {
        newSlug = allPosts[Math.floor(Math.random() * allPosts.length)];
    }

    let newPageUrl;
    if (newSlug === '' || newSlug === '/') {
        newPageUrl = pathToRoot(fullSlug);
    } else {
        newPageUrl = `${pathToRoot(fullSlug)}/${newSlug}`;
    }
    window.location.href = newPageUrl;
}

// فعال‌سازی و نمایش گراف
function toggleGraph() {
  const graphComponent = document.querySelector('.graph') as HTMLElement
  if (!graphComponent) return

  const isVisible = graphComponent.classList.contains('active')
  if (!isVisible) {
    // نمایش گراف
    graphComponent.classList.add('active')
    // فعال‌سازی نمایش گراف سراسری
    const globalGraphIcons = document.getElementsByClassName('global-graph-icon');
    if (globalGraphIcons.length > 0) {
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      globalGraphIcons[0].dispatchEvent(clickEvent);
    }

    // اضافه کردن کلید Escape برای بستن گراف
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        graphComponent.classList.remove('active')
        document.removeEventListener('keydown', handleEsc)
      }
    }
    document.addEventListener('keydown', handleEsc)
  } else {
    // مخفی کردن گراف
    graphComponent.classList.remove('active')
  }
}

// راه‌اندازی دکمه‌های شناور
function setupFloatingButtons() {
  // پاکسازی تنظیمات قبلی
  if (currentCleanup) {
    currentCleanup()
    currentCleanup = null
  }

  const buttonGroups = document.querySelectorAll<HTMLElement>('.button-group')

  // مدیریت کلیک روی دکمه‌ها
  function handleButtonClick(e: Event) {
    const button = (e.target as Element).closest('[data-action]')
    if (!button) return
    
    const action = (button as Element).getAttribute('data-action')

    switch (action) {
      case 'scrollTop':
        // رفتن به بالای صفحه
        globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        break
      case 'scrollBottom':
        // رفتن به پایین صفحه
        const documentHeight = document.documentElement.scrollHeight;
        globalThis.scrollTo({ top: documentHeight, behavior: "smooth" });
        break
      case 'graph':
        // نمایش گراف
        toggleGraph()
        break
      case 'randomPage':
        // رفتن به صفحه تصادفی
        navigateToRandomPage()
        break
    }
  }

  // اضافه کردن شنونده رویداد کلیک به دکمه‌ها
  buttonGroups.forEach(group => {
    group.addEventListener('click', handleButtonClick)
  })

  // ذخیره تابع پاکسازی برای استفاده بعدی
  currentCleanup = () => {
    buttonGroups.forEach(group => {
      group.removeEventListener('click', handleButtonClick)
    })
  }
}

// راه‌اندازی دکمه‌ها هنگام بارگذاری صفحه و ناوبری
document.addEventListener('DOMContentLoaded', setupFloatingButtons)
document.addEventListener('nav', setupFloatingButtons) 