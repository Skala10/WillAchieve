export const Button = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode
  href: string
  className: string
}) => {
  const commonClasses =
    " font-bold lg:text-lg inline-block py-3 px-5 rounded-sm transition-all uppercase pointer"
  return (
    <a href={href} className={className + commonClasses}>
      {children}
    </a>
  )
}
