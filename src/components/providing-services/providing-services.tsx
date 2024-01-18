import { Service } from "./service"
import {
  FaCalendarCheck,
  FaVideo,
  FaPills,
  FaRegCalendarAlt,
} from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { GiProgression } from "react-icons/gi"

export const Services = () => {
 const services = [
   {
     id: 1,
     icon: <FaRegCalendarAlt size="48" />,
     name: "Personalised training programme",
     text: "Tailored training plan to suit your goals and needs.",
   },
   {
     id: 2,
     icon: <FaPills size="48" />,
     name: "Specific nutritional guidance to aid progress.",
     text: "Personalized nutritional advice to support your fitness journey.",
   },
   {
     id: 3,
     icon: <FaCalendarCheck size="48" />,
     name: "Weekly check-ins",
     text: "Regular check-ins to review your progress and address any concerns.",
   },
   {
     id: 4,
     icon: <FaRegMessage size="48" />,
     name: "Daily messages to ensure you’re on track.",
     text: "Daily communication to keep you motivated and accountable.",
   },
   {
     id: 5,
     icon: <GiProgression size="48" />,
     name: "Efficient system to monitor progress through metrics.",
     text: "Use of metrics to track your progress and adjust the plan accordingly.",
   },
   {
     id: 6,
     icon: <FaVideo size="48" />,
     name: "Customized video demonstrations",
     text: "Demonstrations tailored to your exercises for proper form and technique.",
   },
 ]
  return (
    <section
      id="services"
      className="max-w-[1440px] mx-auto px-5 py-8 md:py-16">
      <h2 className="flex justify-center items-center text-5xl md:text-6xl font-semibold mb-10 text-center">
        What services do I provide
      </h2>
      <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </ul>
    </section>
  )
}
