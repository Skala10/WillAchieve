import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "WillAchieve",
  description: "WillAchieve Online Coaching",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body id="body" className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
