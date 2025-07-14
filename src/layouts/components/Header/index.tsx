"use client"
import { Row, Col, Segmented, Drawer } from "antd"
import { MenuOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react"

import Logo from "./components/Logo"

const menu: string[] = ["Home", "Who we are", "Destination", "Tour", "Blog", "Consultation"]

export default function Index() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const onNavigate = (value: string) => {
    switch (value) {
      case "Home": {
        document.getElementById("main")?.scrollIntoView()
        setDrawerOpen(false)
        break
      }
      case "Who we are": {
        document.getElementById("who-we-are")?.scrollIntoView()
        setDrawerOpen(false)
        break
      }
      case "Destination": {
        document.getElementById("destination")?.scrollIntoView()
        setDrawerOpen(false)
        break
      }
      case "Tour": {
        document.getElementById("tour")?.scrollIntoView()
        setDrawerOpen(false)
        break
      }
      case "Blog": {
        document.getElementById("blog")?.scrollIntoView()
        setDrawerOpen(false)
        break
      }
      case "Consultation": {
        document.getElementById("consultation")?.scrollIntoView()
        setDrawerOpen(false)
        break
      }
      default: {
        setDrawerOpen(false)
        break
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div
      className={`section-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScroll ? "bg-white/50 shadow-md py-2" : "py-10"}`}
    >
      <Row className='items-center relative justify-between'>
        <Col span={4}>
          <Logo />
        </Col>

        <Col flex='auto' className='hidden md:block'>
          <div className='flex justify-center'>
            <Segmented<string> options={menu} shape='round' size='large' onChange={value => onNavigate(value)} />
          </div>
        </Col>

        <Col span={4}>
          <div className='flex md:hidden justify-end cursor-pointer text-2xl'>
            <MenuOutlined onClick={toggleDrawer} />
          </div>
        </Col>
      </Row>

      <Drawer
        title='Menu'
        closable={{ "aria-label": "Close Button" }}
        onClose={toggleDrawer}
        open={drawerOpen}
        className='drawer-padding-none'
      >
        <ul className='list-none p-0'>
          {menu.map((item, index) => (
            <li
              onClick={() => onNavigate(item)}
              key={index}
              className='cursor-pointer py-5 px-10 transition-all hover:bg-[rgb(var(--primary))] hover:text-white'
            >
              {item}
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  )
}
