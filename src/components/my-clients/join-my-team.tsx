import Image from "next/image"
import { InfiniteLooper } from "./infinite-looper/infinite-looper"
import { clientsData } from "./join-my-team-data"

interface JoinMyTeamProps {}

export const JoinMyTeam: React.FC<JoinMyTeamProps> = () => {
  return (
    <section id="join-my-team" className="py-8 md:py-16">
      <div className="max-w-[1440px] mx-auto px-5 text-center flex flex-col">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6">
          Join Team Will
        </h2>
        <h4 className="mb-5 text-xl md:text-2xl text-light-blue font-semibold">
          Strive to reach goals you can’t even imagine yet!
        </h4>
        <p className="mb-5 md:mb-10 max-w-[800px] mx-auto">
          Welcome to Team Will, where fitness meets inspiration! As your gym
          coach, I’m here to guide you on a personalized journey to a healthier,
          stronger you. Join our community for expert guidance, customized
          programs, and a motivational support system. Let’s achieve your
          fitness goals together – welcome to the team!
        </p>
      </div>
      <InfiniteLooper direction="right" speed={25}>
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
              loading="lazy"
            />
          </div>
        ))}
      </InfiniteLooper>
    </section>
  )
}
