"use client"
import { Row, Col } from "antd"
import { useState, useEffect } from "react"

import Logo from "./components/Logo"
import HeaderMenu from "./components/HeaderMenu"

export default function Index() {
  const [isScroll, setIsScroll] = useState(false)

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
      <Row className='items-center relative'>
        <Col span={4}>
          <Logo />
        </Col>

        <Col flex='auto'>
          <div className='flex justify-center'>
            <HeaderMenu />
          </div>
        </Col>

        <Col span={4}></Col>
      </Row>
    </div>
  )
}
