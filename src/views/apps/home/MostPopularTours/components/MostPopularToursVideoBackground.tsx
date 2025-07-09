"use client"
import { useEffect, useState } from "react"

export default function MostPopularToursVideoBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <video
      className='w-full h-full object-cover'
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      preload='auto'
    >
      <source src='/videos/mu-cang-chai.mp4' type='video/mp4' />
    </video>
  )
}
