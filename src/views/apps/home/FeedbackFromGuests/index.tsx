"use client"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Row, Col, Rate } from "antd"
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons"
import Slider from "react-slick"
import "./FeedbackFromGuests.scss"
import { Grid } from "antd"

const { useBreakpoint } = Grid

interface Feedback {
  id: number
  name: string
  country: string
  description: string
  flag: string
  stars: number
  image: string
  isScroll: boolean
}

export default function FeedbackFromGuests() {
  const screens = useBreakpoint()

  const slidesToShow = useMemo(() => {
    if (screens.xxl) return 3
    if (screens.xl) return 3
    if (screens.lg) return 2
    if (screens.md) return 2
    return 1
  }, [screens])

  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: true,
    dots: true,
    infinite: false,
    accessibility: false // Ngan warning khi scroll
  }

  const [mount, setMount] = useState<boolean>(false)
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: 1,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 4.5,
      image: "/images/feedback-profile.webp",
      isScroll: false
    },
    {
      id: 2,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 5,
      image: "/images/feedback-profile.webp",
      isScroll: false
    },
    {
      id: 3,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 4,
      image: "/images/feedback-profile.webp",
      isScroll: false
    },
    {
      id: 4,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 5,
      image: "/images/feedback-profile.webp",
      isScroll: false
    },
    {
      id: 5,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 5,
      image: "/images/feedback-profile.webp",
      isScroll: false
    },
    {
      id: 6,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 5,
      image: "/images/feedback-profile.webp",
      isScroll: false
    },
    {
      id: 7,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 4.5,
      image: "/images/feedback-profile.webp",
      isScroll: false
    },
    {
      id: 8,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 4.5,
      image: "/images/feedback-profile.webp",
      isScroll: false
    },
    {
      id: 9,
      name: "Thomas Wilson",
      country: "French",
      description:
        "Vietnam offers a rich diversity of tourism experiences – from cultural and heritage tours in ancient towns, nature and eco-travel in majestic mountains and national parks, to beach holidays, culinary adventures, spiritual pilgrimages, and vibrant city escapes.",
      flag: "/images/flag-french.webp",
      stars: 5,
      image: "/images/feedback-profile.webp",
      isScroll: false
    }
  ])

  const setScroll = (index: number) => {
    const feedback = feedbacks[index]
    feedback.isScroll = !feedback.isScroll
    setFeedbacks([...feedbacks])
  }

  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) {
    return null
  }

  return (
    <div className='feedback relative top-0 left-0 right-0 h-auto z-1'>
      <div className='relative h-[90vh] flex items-center z-2'>
        <Image src='/images/image-15.webp' alt='Background Image' fill className='object-cover' unoptimized></Image>
      </div>

      <div className='absolute top-0 left-0 right-0 bottom-0 z-3 bg-black/20'></div>

      <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-4'>
        <Row className='w-full px-[10%]'>
          <Col span={24}>
            <h5 className='text-white text-4xl mb-10 text-center'>Feedback from Guests</h5>
          </Col>
          <Col span={24}>
            <Slider {...settings}>
              {feedbacks.map((feedback, index) => (
                <div className='p-3'>
                  <div className='rounded-[10px] overflow-hidden bg-white'>
                    <div className='bg-gray-300 p-3'>
                      <Row>
                        <Col flex='none'>
                          <div className='relative bg-white w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'>
                            <Image
                              src={feedback.image}
                              alt={feedback.name}
                              fill
                              className='object-cover'
                              unoptimized
                            ></Image>
                          </div>
                        </Col>

                        <Col flex='auto' className='flex items-center ps-3'>
                          {feedback.name}
                        </Col>

                        <Col flex='none' className='flex gap-3 items-center'>
                          <div className='relative w-[16px] h-[16px] flex items-center justify-center'>
                            <Image src={feedback.flag} alt='Flag' fill className='object-cover' unoptimized></Image>
                          </div>

                          <span>{feedback.country}</span>
                        </Col>
                      </Row>

                      <Col span={24} className='mt-3'>
                        <Rate disabled allowHalf defaultValue={feedback.stars}></Rate>
                      </Col>
                    </div>

                    <div className='p-3'>
                      <Row>
                        <Col span={24}>
                          <p className={`mb-0 leading-6 ${feedback.isScroll ? "" : "line-clamp-4"}`}>
                            {feedback.description}
                          </p>

                          <p
                            className='mt-3 mb-0 cursor-pointer opacity-75 hover:opacity-100'
                            onClick={() => setScroll(index)}
                          >
                            {feedback.isScroll ? (
                              <>
                                Hide <ArrowUpOutlined />
                              </>
                            ) : (
                              <>
                                Scroll <ArrowDownOutlined />
                              </>
                            )}
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  )
}
