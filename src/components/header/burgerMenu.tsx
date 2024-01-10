"use client"

import React, { useEffect, useState } from "react"
import { Navigation } from "./navigation"
import { TbAlignRight, TbX } from "react-icons/tb"

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const links = [
    { href: "#whywill", text: "Why Will?", addStyles: { fontSize: "24px" } },
    {
      href: "#services",
      text: "Services",
      addStyles: { fontSize: "24px" },
    },
    {
      href: "#joinMyTeam",
      text: "Join My Team",
      addStyles: { fontSize: "24px" },
    },

    {
      href: "#calendar",
      text: "Book a free call",
      addStyles: {
        fontSize: "24px",
        backgroundColor: "#36A9E1",
        color: "#FFFFFF",
        padding: "12px 20px 12px 20px",
        borderRadius: "0.125rem",
      },
    },
  ]

  return (
    <div className="md:hidden">
      <div
        className={`absolute ${
          isOpen
            ? "top-0 left-0 mt-[80px] flex-col w-full justify-center items-center bg-white"
            : "hidden"
        }`}>
        <div className="w-full m-auto z-10 top-[3px] px-5 pt-10 md:pt-[100px] pb-6 text-center text-black">
          <Navigation
            links={links}
            deviceMd={false}
            closeMenu={closeMenu}
            mb={{ margin: "0rem 0rem 40rem 0rem" }}
          />
        </div>
      </div>
      <button
        className={`md:hidden border-none p-0 ${isOpen && "relative"}`}
        onClick={toggleMenu}>
        {isOpen ? (
          <TbX size="40px" color="white" />
        ) : (
          <TbAlignRight size="40px" color="white" />
        )}
      </button>
    </div>
  )
}
