import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--light);
  padding: 1rem max(1.5rem, calc((100% - var(--pageWidth)) / 2));
  width: 100%;
  z-index: 100;
  margin: 0;
}

header h2 {
  margin: 0;
  flex: auto;
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  header h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
}
`

export default (() => Header) satisfies QuartzComponentConstructor
