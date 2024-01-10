"use client"

import React, { useEffect, useState } from "react"
import { PopupButton } from "react-calendly"

export const CalendarButton = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // После монтирования компонента устанавливаем isClient в true, чтобы показать UI
    setIsClient(true)
  }, [])

  return (
    <div className="fixed bottom-0 right-0 mr-[30px] mb-5 z-50 ">
      {isClient && (
        <PopupButton
          className="text-white font-bold lg:text-lg inline-block py-3 px-5 rounded-full transition-all uppercase pointer bg-light-blue hover:bg-blue border-current inline-block"
          url="https://calendly.com/skalamelitopol10/30min"
          rootElement={document.body}
          text="Click here to schedule!"
        />
      )}
    </div>
  )
}
