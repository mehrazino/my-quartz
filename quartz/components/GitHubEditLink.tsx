import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/githubEditLink.scss"
import { classNames } from "../util/lang"

interface GitHubEditLinkOptions {
  repoUrl: string
  branch?: string
  contentPath?: string
  text?: string
}

export default ((opts?: Partial<GitHubEditLinkOptions>) => {
  const GitHubEditLink = ({ fileData, displayClass }: QuartzComponentProps) => {
    // صفحه اصلی را نادیده می‌گیریم
    if (fileData.slug === "index") {
      return null
    }
    
    const repoUrl = opts?.repoUrl || "https://github.com/mehrazino/my-quartz"
    const branch = opts?.branch || "v4"
    const contentPath = opts?.contentPath || "content"
    const text = opts?.text || "ویرایش این صفحه در گیت‌هاب"
    
    const filePath = fileData.filePath
    if (!filePath) return null
    
    // بررسی و اصلاح مسیر فایل (حذف "content/" اضافی از ابتدای مسیر)
    let cleanFilePath = filePath
    if (filePath.startsWith(`${contentPath}/`)) {
      cleanFilePath = filePath.substring(contentPath.length + 1) // +1 برای حذف / بعد از content
    }
    
    const editUrl = `${repoUrl}/blob/${branch}/${contentPath}/${cleanFilePath}`
    
    return (
      <div class={classNames(displayClass, "github-edit-link")}>
        <a href={editUrl} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          {text}
        </a>
      </div>
    )
  }

  GitHubEditLink.css = style
  return GitHubEditLink
}) satisfies QuartzComponentConstructor<Partial<GitHubEditLinkOptions>> 