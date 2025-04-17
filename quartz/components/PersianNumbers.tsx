import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import persianNumbersScript from "./scripts/persianNumbers.inline"

const PersianNumbers: QuartzComponent = () => {
  return null
}

PersianNumbers.beforeDOMLoaded = persianNumbersScript

export default (() => PersianNumbers) satisfies QuartzComponentConstructor 