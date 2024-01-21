import { MainSection } from "@/components/main-section/main-section"
import { JoinMyTeam } from "@/components/my-clients/join-my-team"
import { Services } from "@/components/providing-services/providing-services"
import { WhyMe } from "@/components/why-me/why-me"
import dynamic from "next/dynamic"

const Calendar = dynamic(() => import("../components/calendar/calendar"))
const CalendarButton = dynamic(() => import("../components/calendar/calendar-button"))

export default function Home() {
  return (
    <main>
      <MainSection />
      <WhyMe />
      <Services />
      <JoinMyTeam />
      <Calendar />
      <CalendarButton />
    </main>
  )
}
