import { NavigationLink } from "./navigation-links"

export const Navigation = ({
  links,
  deviceMd,
  closeMenu,
  mb,
}: {
  links: {
    href: string
    text: string
    isButton?: boolean
    addStyles?: React.CSSProperties
  }[]
  deviceMd?: boolean
  closeMenu?: any
  mb?: React.CSSProperties
}) => {
  return (
    <nav className="flex items-center gap md:mb-0" style={mb}>
      <ul
        className={`w-full lg:gap-x-8 md:gap-x-4 gap-y-8 flex flex-col items-center text-small-md md:text-md uppercase tracking-wide  ${
          deviceMd ? "hidden" : ""
        } md:flex md:flex-row`}>
        {links.map((link) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            text={link.text}
            onClick={closeMenu}
            isButton={link.isButton}
            addStyles={link.addStyles}
          />
        ))}
      </ul>
    </nav>
  )
}
