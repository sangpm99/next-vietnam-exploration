import { ReactNode } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div id='main'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
