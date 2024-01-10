import { Calendar } from "@/components/calendar/calendar"
import { CalendarButton } from "@/components/calendar/calendar-button"
import { MainSection } from "@/components/main-section/main-section"
import { MyClients } from "@/components/my-clients/my-clients"
import { Services } from "@/components/providing-services/providing-services"
import { WhyMe } from "@/components/why-me/why-me"

export default function Home() {
  return (
    <main>
      <MainSection />
      <WhyMe />
      <Services />
      <MyClients />
      <Calendar />
      <CalendarButton />
    </main>
  )
}
