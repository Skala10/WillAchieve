import { ReactNode } from "react"

export const Service = ({
  icon,
  name,
  text,
}: {
  icon: ReactNode
  name: string
  text: string
}) => (
  <>
    <li className="grid grid-rows-3 p-7 gap-5 border border-black">
      <span>{icon}</span>
      <h3 className="text-2xl font-medium uppercase">{name}</h3>
      <p className="text-sm">{text}</p>
    </li>
  </>
)
