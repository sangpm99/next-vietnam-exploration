import Image from "next/image"
import { Row, Col, Button, Rate, Tag } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"

import MostPopularToursVideoBackground from "./components/MostPopularToursVideoBackground"

const tours = [
  {
    id: 1,
    name: "Ha Long Bay",
    description: "Explore the stunning limestone islands and emerald waters of this UNESCO World Heritage Site.",
    time: "4 days",
    category: "Community tourism & trekking",
    stars: 4.5,
    image: "/images/image-7.jpg"
  },
  {
    id: 2,
    name: "Duc Ba Church",
    description: "Discover French colonial architecture and spiritual serenity at Ho Chi Minh City's iconic cathedral.",
    time: "4 days",
    category: "Community tourism & trekking",
    stars: 4.5,
    image: "/images/image-8.jpg"
  },
  {
    id: 3,
    name: "Tan Thanh",
    description: "Witness a serene seaside sunrise and experience the peaceful rhythm of local fishing life.",
    time: "4 days",
    category: "Community tourism & trekking",
    stars: 4.5,
    image: "/images/image-9.jpg"
  },
  {
    id: 4,
    name: "Ben Tre",
    description: "Cruise through palm-lined canals and immerse yourself in the vibrant culture of the Mekong Delta.",
    time: "4 days",
    category: "Community tourism & trekking",
    stars: 4.5,
    image: "/images/image-10.jpg"
  }
]

export default function MostPopularTours() {
  return (
    <div className='relative top-0 left-0 right-0 h-auto z-1'>
      <div className='relative h-[90vh] flex items-center z-2'>
        <MostPopularToursVideoBackground></MostPopularToursVideoBackground>
      </div>

      <div className='absolute top-0 left-0 right-0 bottom-0 z-3 bg-black/20'></div>

      <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-4'>
        <Row className='w-full section-container'>
          <Col span={24}>
            <div className='text-white text-4xl mb-5 flex justify-between'>
              <h5>Most Popular Tours</h5>

              <Button
                icon={<ArrowRightOutlined />}
                iconPosition='end'
                size='large'
                variant='outlined'
                className='bg-transparent text-white hover:text-black hover:border-white hover:bg-white rounded-full'
              >
                View all tours
              </Button>
            </div>
          </Col>
          <Col span={24}>
            <Row gutter={[16, 16]}>
              {tours.map((tour, index) => (
                <Col span={24} lg={6} key={index}>
                  <div className='rounded p-2 bg-white'>
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='object-cover w-full h-[200px] rounded-[5px]'
                      unoptimized
                    ></Image>

                    <div className='flex flex-col gap-3 py-2'>
                      <div className='flex justify-between items-center'>
                        <Rate disabled allowHalf defaultValue={tour.stars}></Rate>

                        <span>{tour.time}</span>
                      </div>

                      <div>
                        <Tag className='border-gray-500'>{tour.category}</Tag>
                      </div>

                      <h3 className='mb-0'>{tour.name}</h3>
                      <p className='mb-0 line-clamp-2'>{tour.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}
