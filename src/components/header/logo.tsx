import Image from "next/image"
import Link from "next/link"
import logoWhite from "../../../public/logo-white.svg"
import logoBlue from "../../../public/logo-blue.svg"

type LogoProps = {
  color: string
  className: string
}

export const Logo: React.FC<LogoProps> = ({ color, className }) => {
  const selectedLogo = color === "white" ? logoWhite : logoBlue

  return (
    <Link href={"/"}>
      <Image src={selectedLogo} alt="logo" className={className} />
    </Link>
  )
}
