import Image from "next/image"
import { Row, Col } from "antd"

export default function Clouds() {
  return (
    <div className='relative z-10'>
      <Row className='absolute transform -translate-y-1/2 w-full z-10'>
        <Col span={24}>
          <div>
            <Image
              src='/images/clouds.webp'
              alt='Section Image'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object-cover'
              unoptimized
            ></Image>
          </div>
        </Col>
      </Row>
    </div>
  )
}
