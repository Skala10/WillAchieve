import { Logo } from "./logo"
import { Navigation } from "./navigation"
import { BurgerMenu } from "./burgerMenu"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const links = [
    { href: "#whywill", text: "Why Will?" },
    { href: "#services", text: "Services" },
    { href: "#calendar", text: "Book a free call", isButton: true },
  ]

  return (
    <header
      id="header"
      role="banner"
      className="h-[80px] relative z-10 bg-black top-0 w-[100%] flex text-white">
      <div className="w-full max-w-[1440px] mx-auto px-10 py-5 flex justify-between items-center">
        <Logo className="uppercase font-bold text-xl" />
        <Navigation deviceMd={true} links={links} />
        <BurgerMenu />
      </div>
    </header>
  )
}
