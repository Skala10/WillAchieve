"use client"

import React from "react"
import { InlineWidget } from "react-calendly"

export const Calendar = () => {
  return (
    <section id="calendar" className="pb-8 md:pb-16 px-5">
      <div className="max-w-[650px] mx-auto pt-8 md:pt-16 mb-10 md:mb-0 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 uppercase">
          Book a free consultation
        </h2>
        <p>
          Book a free 30 minute consultation with Will to get to know each other
          and discuss how you will reach those desired goals you have together
        </p>
      </div>
      <InlineWidget url="https://calendly.com/skalamelitopol10/30min" />
    </section>
  )
}
