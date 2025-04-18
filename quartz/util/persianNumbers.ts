/**
 * Convert English numbers to Persian
 * @param input Input text containing English numbers
 * @returns Text with Persian numbers
 */
export function toPersianNumbers(input: string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
}

/**
 * Convert Persian numbers to English
 * @param input Input text containing Persian numbers
 * @returns Text with English numbers
 */
export function toEnglishNumbers(input: string): string {
  return input.replace(/[۰-۹]/g, (digit) => {
    return String(
      '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)
    );
  });
} 