import { ReactNode } from "react"
import Header from "@views/apps/home/Header"
import Footer from "@views/apps/home/Footer"

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div id='main'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
