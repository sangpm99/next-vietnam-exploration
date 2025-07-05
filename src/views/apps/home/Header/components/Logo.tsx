"use client"
import Image from "next/image"

export default function Index() {
  return (
    <Image
      src='/logo.png'
      alt='Logo'
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: "150px", height: "auto" }}
      className='cursor-pointer'
      onClick={() => (window.location.href = "/")}
    ></Image>
  )
}
