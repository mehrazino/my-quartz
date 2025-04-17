// اسکریپت تبدیل اعداد انگلیسی به فارسی در پاورقی‌ها و رفرنس‌ها

const persianDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

function toPersianNumbers(input: string): string {
  return input.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
}

function convertToPersianNumbers(): void {
  // تبدیل اعداد در پاورقی‌ها
  const footnotes = document.querySelectorAll('.footnotes li[id^=fn], .footnote-ref');
  
  // پیدا کردن همه پاورقی‌ها و تبدیل شماره‌های آن‌ها
  footnotes.forEach((element) => {
    // تبدیل ID های پاورقی
    if (element.id && element.id.startsWith('fn')) {
      element.id = element.id.replace(/\d+/g, (match) => {
        return toPersianNumbers(match);
      });
    }
    
    // تبدیل متن داخل المان (که میتواند شماره پاورقی باشد)
    const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
    textNodes.forEach(node => {
      if (node.textContent) {
        node.textContent = toPersianNumbers(node.textContent);
      }
    });
    
    // تبدیل ارجاع‌های داخل پاورقی‌ها
    const refs = element.querySelectorAll('a.footnote-backref');
    refs.forEach(ref => {
      if (ref.textContent) {
        ref.textContent = toPersianNumbers(ref.textContent);
      }
      
      // تبدیل href مربوط به پاورقی
      if (ref instanceof HTMLAnchorElement && ref.href) {
        const href = ref.getAttribute('href');
        if (href && href.startsWith('#fnref')) {
          ref.setAttribute('href', href.replace(/\d+/g, match => toPersianNumbers(match)));
        }
      }
    });
  });
  
  // تبدیل ارجاع‌های پاورقی در متن
  const footnoteRefs = document.querySelectorAll('sup[id^=fnref] a');
  footnoteRefs.forEach(ref => {
    if (ref instanceof HTMLElement && ref.textContent) {
      ref.textContent = toPersianNumbers(ref.textContent);
    }
    
    if (ref instanceof HTMLAnchorElement && ref.href) {
      const href = ref.getAttribute('href');
      if (href && href.startsWith('#fn')) {
        ref.setAttribute('href', href.replace(/\d+/g, match => toPersianNumbers(match)));
      }
    }
    
    // تبدیل ID های ارجاع
    const parentSup = ref.closest('sup');
    if (parentSup && parentSup.id && parentSup.id.startsWith('fnref')) {
      parentSup.id = parentSup.id.replace(/\d+/g, match => toPersianNumbers(match));
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // اجرای تبدیل بعد از بارگذاری کامل صفحه
  convertToPersianNumbers();
  
  // اجرای مجدد تبدیل پس از هر تغییر محتوی صفحه (مثلاً بعد از جستجو)
  let lastUrl = location.href; 
  
  // شروع مشاهده تغییرات DOM
  const mutationObserver = new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setTimeout(convertToPersianNumbers, 100);
    }
  });
  
  // افزودن مشاهده‌گر به body
  if (document.body) {
    mutationObserver.observe(document.body, {subtree: true, childList: true});
  }
}); 