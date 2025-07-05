"use client"

import { Segmented } from "antd"

const menu: string[] = ["Home", "Who we are", "Destination", "Tour", "Blog", "Consultation"]

export default function HeaderMenu() {
  const onNavigate = (value: string) => {
    switch (value) {
      case "Home": {
        document.getElementById("main")?.scrollIntoView()
        break
      }
      case "Who we are": {
        document.getElementById("who-we-are")?.scrollIntoView()
        break
      }
      case "Destination": {
        document.getElementById("destination")?.scrollIntoView()
        break
      }
      case "Tour": {
        document.getElementById("tour")?.scrollIntoView()
        break
      }
      case "Blog": {
        document.getElementById("blog")?.scrollIntoView()
        break
      }
      case "Consultation": {
        document.getElementById("consultation")?.scrollIntoView()
        break
      }
      default: {
        break
      }
    }
  }
  return (
    <div>
      <Segmented<string> options={menu} shape='round' size='large' onChange={value => onNavigate(value)} />
    </div>
  )
}
