"use client"
import { useState, useMemo, useRef } from "react"
import Image from "next/image"
import Slider from "react-slick"

const destinations = [
  {
    id: 0,
    name: "Ha Noi",
    image: "/images/image-13.jpg"
  },
  {
    id: 1,
    name: "Ha Long",
    image: "/images/image-7.jpg"
  },
  {
    id: 2,
    name: "Hue",
    image: "/images/image-14.jpg"
  },
  {
    id: 3,
    name: "Binh Thuan",
    image: "/images/image-11.jpg"
  },
  {
    id: 4,
    name: "Da Nang",
    image: "/images/image-12.jpg"
  }
]

export default function FeaturalDestination() {
  const sliderRef = useRef(null)
  const [selected, setSelected] = useState<number>(0)

  const destination = useMemo(() => {
    return destinations.find(item => item.id === Number(selected))
  }, [selected])

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    centerMode: true,
    afterChange: (current: number) => {
      setSelected(current)
    }
  }

  return (
    <div id='destination' className="bg-[url('/images/who-we-are.jpg')] bg-cover bg-center py-[200px]">
      <h3 className='text-center text-4xl'>Featural Destination</h3>
      <p className='text-center px-[20%]'>
        Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns,
        nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures,
        spiritual pilgrimages, and vibrant city escapes.
      </p>

      <Slider className='min-h-[510px]' {...settings} ref={sliderRef}>
        {destinations.map((des, i) => (
          <div
            className={`relative w-full p-2 cursor-grab transition-all duration-200 h-[500px] ${des.id === destination?.id ? "my-0" : "py-20"}`}
            key={des.id}
          >
            <div className='relative w-full h-full rounded overflow-hidden'>
              <Image src={des.image} alt={des.name} fill className='object-cover' unoptimized></Image>
            </div>
          </div>
        ))}
      </Slider>

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
