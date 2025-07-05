import { SearchOutlined } from "@ant-design/icons"
import { Row, Col, Input } from "antd"
import { ArrowDownOutlined } from "@ant-design/icons"

export default function HerroBanner() {
  return (
    <div className='absolute top-0 left-0 right-0 h-auto z-1'>
      <div className='relative h-[90vh] flex items-center z-2'>
        <video
          className='w-full h-full object-cover'
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload='auto'
        >
          <source src='/videos/herro-baner.mp4' type='video/mp4' />
        </video>
      </div>

      <Row className='justify-center absolute bottom-0 left-0 right-0 z-3'>
        <Col span={24}>
          <div className='text-white text-4xl text-center mb-5'>Welcome to Vietnam</div>
        </Col>
        <Col span={5}>
          <div>
            <Input size='large' placeholder='Where do you want to go?' prefix={<SearchOutlined />} />
            <br />
          </div>
        </Col>
        <Col span={24} className='flex justify-center text-2xl'>
          <div className='w-[70px] h-[70px] bg-white shadow-2xl rounded-full flex justify-center items-center translate-y-[50%] outline outline-[10px] outline-white/30 relative z-5'>
            <ArrowDownOutlined />
          </div>
        </Col>
      </Row>
    </div>
  )
}
