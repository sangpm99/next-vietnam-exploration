import { Row, Col, Button } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import Image from "next/image"

export default function WhoWeAre() {
  return (
    <div id='who-we-are' className="bg-[url('/images/who-we-are.jpg')] bg-cover bg-center px-[10%] py-20">
      <Row>
        <Col span={24}>
          <div className="rounded-[1rem] outline outline-[10px] outline-white/50 overflow-hidden h-[500px] bg-[url('/images/image-1.png')] bg-cover bg-bottom relative z-1">
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black to-transparent z-2'></div>
            <div className='absolute top-0 left-0 right-0 bottom-0 text-center text-white p-10 text-xl z-3'>
              <h3>Who we are?</h3>
              <p>
                "A Vietnamese team, fluent in French and English, will make you LOVE Vietnam and help you discover all
                its secrets! Over 10 years of professional experience gives us a remarkable and in-depth knowledge of
                the roots and customs of our country, its 54 ethnic groups, and the territories that make it up. For a
                tailor-made trip to Vietnam, don't hesitate to contact-us; We will get back to you as soon as possible."
              </p>
              <Button
                icon={<ArrowRightOutlined />}
                iconPosition='end'
                size='large'
                variant='outlined'
                className='bg-transparent text-white hover:text-black hover:border-white hover:bg-white'
              >
                More information
              </Button>
            </div>
          </div>
        </Col>

        <Col span={24}>
          <div className='my-20'></div>
        </Col>

        <Col span={24}>
          <Row>
            <Col span={6}>
              <Image
                src='/images/vietnam-map.png'
                alt='Viet Nam Map'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: "100%", height: "auto" }}
                unoptimized
              ></Image>
            </Col>
            <Col span={18} className='ps-20'>
              <h4 className='text-3xl'>
                Discover Vietnam <span className='text-primary'>- A Land of Timeless Charm</span>
              </h4>
              <p className='text-lg mt-5'>
                From the bustling streets of Hanoi to the tranquil waters of Ha Long Bay, Vietnam offers a unique blend
                of ancient traditions, breathtaking landscapes, and vibrant culture. Whether you're seeking adventure in
                the mountains of Sapa, relaxing on the beaches of Da Nang, or exploring the historic towns of Hoi An and
                Hue, Vietnam welcomes you with warm hospitality and unforgettable experiences. Let every journey here be
                a story worth telling.
              </p>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Image
                    src='/images/image-2.jpg'
                    alt='HCM City'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    className='rounded'
                    unoptimized
                  ></Image>
                </Col>
                <Col span={16}>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Image
                        src='/images/image-3.jpg'
                        alt='Ha Long Bay'
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: "100%", height: "auto" }}
                        className='rounded'
                        unoptimized
                      ></Image>
                    </Col>
                    <Col span={12}>
                      <Image
                        src='/images/image-4.jpg'
                        alt='Sea of Da Nang'
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: "100%", height: "auto" }}
                        className='rounded'
                        unoptimized
                      ></Image>
                    </Col>
                    <Col span={12}>
                      <Image
                        src='/images/image-5.jpg'
                        alt='Hue City'
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: "100%", height: "auto" }}
                        className='rounded'
                        unoptimized
                      ></Image>
                    </Col>
                    <Col span={12}>
                      <Image
                        src='/images/image-6.jpg'
                        alt='Mountains'
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: "100%", height: "auto" }}
                        className='rounded'
                        unoptimized
                      ></Image>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
