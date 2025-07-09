"use client"
import { useEffect, useState } from "react"

export default function HerroBannerVideoBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <video className='w-full h-full object-cover' autoPlay loop muted playsInline preload='auto'>
      <source src='/videos/herro-baner.mp4' type='video/mp4' />
    </video>
  )
}
