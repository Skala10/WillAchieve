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
      className="h-[80px] relative z-10 bg-black top-0 w-[100%] flex text-white">
      <div className="w-full max-w-[1440px] mx-auto px-5 py-5 flex justify-between items-center">
        <Logo color="white" className="w-[3.2rem] md:w-[4.2rem] lg:w-[5.2rem]" />
        <Navigation deviceMd={true} links={links} />
        <BurgerMenu />
      </div>
    </header>
  )
}
