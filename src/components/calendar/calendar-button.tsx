"use client"

import React, { useEffect, useState } from "react"
import { PopupButton } from "react-calendly"

export const CalendarButton = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="fixed bottom-0 right-0 mr-5 md:mr-[30px] mb-3 md:mb-5 z-50 ">
      {isClient && (
        <PopupButton
          className="text-white font-bold text-base lg:text-lg inline-block py-[10px] md:py-3 px-4 md:px-5 rounded-full transition-all uppercase pointer bg-light-blue hover:bg-blue border-current inline-block"
          url="https://calendly.com/willpalmertolley401/30min"
          rootElement={document.body}
          text="Click here to schedule!"
        />
      )}
    </div>
  )
}
