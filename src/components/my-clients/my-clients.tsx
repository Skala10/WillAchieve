import Image from "next/image"
import { InfiniteLooper } from "./infinite-looper/infinite-looper"
import { clientsData } from "./clients-data"

export const MyClients = () => {
  return (
    <section id="my-clients" className="py-8 md:py-16">
      <div className="max-w-[1440px] mx-auto px-5 text-center flex flex-col">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6">My clients</h2>
        <h4 className="mb-5 text-xl md:text-2xl text-light-blue font-semibold">
          Strive to reach goals you can’t even imagine yet!
        </h4>
        <p className="mb-5 md:mb-10 max-w-[800px] mx-auto">
          Empowering Transformations: Meet our amazing clients who’ve embraced
          fitness with WillAchieve! Their dedication is inspiring, showcasing
          the incredible results achievable through personalized coaching. Join
          our community and start your journey to a stronger, healthier you.
        </p>
      </div>
      <InfiniteLooper direction="right" speed={15}>
        {clientsData.map((client) => (
          <div
            key={client.id}
            className="grid place-items-center w-[15rem] md:w-full">
            <Image
              src={client.src}
              alt={client.alt}
              className="object-contain max-w-full"
              width={350}
              height={140}
              sizes="(max-width: 768px) 80vw, 288px"
            />
          </div>
        ))}
      </InfiniteLooper>
    </section>
  )
}
