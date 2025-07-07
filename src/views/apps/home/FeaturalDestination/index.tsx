"use client"
import { useState, useMemo } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import Image from "next/image"

const destinations = [
  {
    id: 3,
    name: "Ha Noi",
    image: "/images/image-13.jpg"
  },
  {
    id: 4,
    name: "Ha Long",
    image: "/images/image-7.jpg"
  },
  {
    id: 5,
    name: "Hue",
    image: "/images/image-14.jpg"
  },
  {
    id: 1,
    name: "Binh Thuan",
    image: "/images/image-11.jpg"
  },
  {
    id: 2,
    name: "Da Nang",
    image: "/images/image-12.jpg"
  }
]

export default function FeaturalDestination() {
  const [selected, setSelected] = useState<number>(3)

  const handleChangeSlide = (dest: any, index: number) => {
    const realIndex = dest.Components.Slides.getAt(index).slide.dataset.index
    if (realIndex !== undefined) {
      setSelected(realIndex)
    }
  }

  const destination = useMemo(() => {
    return destinations.find(item => item.id === Number(selected))
  }, [selected])

  return (
    <div id='destination' className="bg-[url('/images/who-we-are.jpg')] bg-cover bg-center px-[10%] py-[150px]">
      <h3 className='text-center text-4xl'>Featural Destination</h3>
      <p className='text-center'>
        Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns,
        nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures,
        spiritual pilgrimages, and vibrant city escapes.
      </p>
      <Splide
        aria-label='Destinations'
        options={{ rewind: true, gap: "1rem", pagination: false, type: "loop", perPage: 5, focus: "center" }}
        className='mt-10'
        onMoved={(dest: any, index: number) => {
          handleChangeSlide(dest, index)
        }}
      >
        {destinations.map(destination => (
          <SplideSlide key={destination.id} data-index={destination.id}>
            <Image
              src={destination.image}
              alt={destination.name}
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object-cover'
              unoptimized
            ></Image>
          </SplideSlide>
        ))}
      </Splide>

      <div className='flex w-100 justify-center mt-10'>
        <div
          className='bg-white text-3xl py-2 px-5 text-primary border-y-0 rounded-full border-solid'
          style={{ borderColor: "rgba(var(--primary))" }}
        >
          {destination?.name}
        </div>
      </div>
    </div>
  )
}
