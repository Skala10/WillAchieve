"use client"

import React from "react"
import { PopupButton } from "react-calendly"

export const CalendarButton = () => {
  return (
    <div className="fixed bottom-0 right-0 mr-[30px] mb-5 z-50 ">
      <PopupButton
        className="text-white font-bold lg:text-lg inline-block py-3 px-5 rounded-full transition-all uppercase pointer bg-light-blue hover:bg-blue border-current inline-block"
        url="https://calendly.com/skalamelitopol10/30min"
        /*
         * Specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         * Use document.body as the root element.
         */
        rootElement={document.body}
        text="Click here to schedule!"
      />
    </div>
  )
}
