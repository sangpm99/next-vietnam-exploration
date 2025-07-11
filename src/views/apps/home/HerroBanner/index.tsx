import { SearchOutlined, ArrowDownOutlined } from "@ant-design/icons"
import { Row, Col, Input } from "antd"
import Image from "next/image"

import HerroBannerVideoBackground from "./components/HerroBannerVideoBackground"

export default function HerroBanner() {
  return (
    <div className='relative top-0 left-0 right-0 h-auto z-1'>
      <div className='relative h-[400px] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] flex items-center z-2'>
        <div className='absolute top-0 left-0 right-0 bottom-0 hidden md:block'>
          <HerroBannerVideoBackground></HerroBannerVideoBackground>
        </div>

        <Image
          src='/images/herro-banner.png'
          alt='Herro Banner'
          className='block md:hidden object-cover'
          fill
          unoptimized
          priority={true}
        ></Image>
      </div>

      <Row className='justify-center absolute bottom-0 left-0 right-0 z-3'>
        <Col span={24}>
          <div className='text-white text-4xl text-center mb-5'>Welcome to Vietnam</div>
        </Col>
        <Col span={20} xs={16} md={8} xl={5}>
          <Input size='large' placeholder='Where do you want to go?' prefix={<SearchOutlined />} />
        </Col>
        <Col span={24} className='flex justify-center text-2xl'>
          <div className='w-[40px] lg:w-[70px] h-[40px] lg:h-[70px] bg-white shadow-2xl rounded-full flex justify-center items-center translate-y-[50%] outline outline-[10px] outline-white/30 relative z-5'>
            <ArrowDownOutlined />
          </div>
        </Col>
      </Row>
    </div>
  )
}
