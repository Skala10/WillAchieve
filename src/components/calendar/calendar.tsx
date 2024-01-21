"use client"

import React from "react"
import { InlineWidget } from "react-calendly"

const Calendar = () => {
	const calendlyUrl = "https://calendly.com/willpalmertolley401/30min"
  return (
    <section id="calendar" className="pb-8 md:pb-16 px-5">
      <div className="max-w-[650px] mx-auto pt-8 md:pt-16 mb-10 md:mb-0 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 uppercase">
          Book a free consultation
        </h2>
        <p>
          Book a free 30-minute consultation with Will to discuss your goals and
          how to achieve them together.
        </p>
      </div>
      {calendlyUrl && <InlineWidget url={calendlyUrl} />}
    </section>
  )
}

export default Calendar