import Link from "next/link"

export const Logo = ({className} : {className: string}) => {
  return (
    <Link href={"/"}>
      <h2 className={className}>WillAchieve</h2>
    </Link>
  )
}
