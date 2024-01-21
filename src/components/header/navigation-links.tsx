interface NavigationLinkProps {
  href: string
  text: string
  onClick?: () => void
  isButton?: boolean
  addStyles?: React.CSSProperties
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  text,
  onClick,
  isButton,
  addStyles,
}) => {
  const commonClasses =
    "font-bold lg:text-lg md:text-white md:hover:text-[#e8e8e8] transition-colors"

  const linkClasses = isButton
    ? ` inline-block py-3 px-5 bg-light-blue rounded-sm hover:bg-blue ${commonClasses} text-white pointer`
    : commonClasses

  return (
    <li>
      <a href={href} onClick={onClick} rel="noopener noreferrer">
        <span className={`${linkClasses}`} style={addStyles}>
          {text}
        </span>
      </a>
    </li>
  )
}
