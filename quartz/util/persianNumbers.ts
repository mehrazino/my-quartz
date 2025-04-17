/**
 * تبدیل اعداد انگلیسی به فارسی
 * @param input متن ورودی حاوی اعداد انگلیسی
 * @returns متن با اعداد فارسی
 */
export function toPersianNumbers(input: string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
}

/**
 * تبدیل اعداد فارسی به انگلیسی
 * @param input متن ورودی حاوی اعداد فارسی
 * @returns متن با اعداد انگلیسی
 */
export function toEnglishNumbers(input: string): string {
  return input.replace(/[۰-۹]/g, (digit) => {
    return String(
      '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)
    );
  });
} 