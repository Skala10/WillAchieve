"use client"

import { Logo } from "../header/logo"
import { Navigation } from "../header/navigation"

export const Footer = () => {
  const links = [
    {
      href: "#header",
      text: "Home",
      addStyles: { color: "black", fontWeight: 400 },
    },
    {
      href: "#whywill",
      text: "Why Will?",
      addStyles: { color: "black", fontWeight: 400 },
    },
    {
      href: "#services",
      text: "Services",
      addStyles: { color: "black", fontWeight: 400 },
    },
    {
      href: "#joinMyTeam",
      text: "Join my team",
      addStyles: { color: "black", fontWeight: 400 },
    },
    {
      href: "#calendar",
      text: "Book a free call",
      addStyles: { color: "black", fontWeight: 400 },
    },
  ]
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-5">
      <div className="flex justify-center items-center flex-col py-[50px]">
        <Logo color="blue" className="w-24 md:w-36 lg:w-44 mb-8" />
        <Navigation links={links} />
        <div className="w-full bg-black h-[1px] mb-8 mt-16 md:mt-15 px-4"></div>
        <p className="pb-6 md:pb-8 text-sm">
          © 2023 WillAchieve. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
