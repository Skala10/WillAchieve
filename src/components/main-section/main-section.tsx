"use client"

import { Button } from "../button/button"

export const MainSection = () => {
  return (
    <section id="main-section" className="pb-8 md:pb-16">
      <div className="relative w-full h-[80svh] md:h-[90svh] overflow-hidden bg-hero-bg-small bg-cover bg-[80%_30%] md:bg-[58%_30%]">
        <div className="relative z-1 flex justify-center md:justify-start px-5 md:px-[5%] items-center h-full max-w-[1440px] mx-auto">
          <div className="text-white max-w-[615px]">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6">
              Become a new you
            </h1>
            <p className="text-l md:text-xl mb-4">
              If you’re reading this page, there’s a good chance that you want
              to stop making excuses and are looking to build the body and
              lifestyle you want.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button
                href="#calendar"
                className="bg-light-blue hover:bg-blue border-current inline-block w-[60svw] md:w-auto text-center">
                Book a free call
              </Button>
              <Button
                href="#joinMyTeam"
                className="hover:text-[#e7e7e7] border hover-border hidden md:block">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
