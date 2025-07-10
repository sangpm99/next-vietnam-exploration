import { Row, Col } from "antd"
import Image from "next/image"

export default function Footer() {
  return (
    <div className='bg-black text-white py-10 px-[10%]'>
      <Row>
        <Col span={24}>
          <Row>
            <Col flex='none' className='w-[200px]'>
              <Row>
                <Col span={24}>
                  <Image
                    src='/images/logo-white.png'
                    alt='Logo White'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-[200px] h-auto'
                    unoptimized
                  />
                </Col>

                <Col span={24}>
                  <div className='flex gap-5 mt-5 bg-primary justify-around rounded-[20px] p-2'>
                    <Image
                      src='/images/icon-facebook.png'
                      alt='Facebook Icon'
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='w-[20px] h-auto transition-transform duration-300 hover:scale-150 cursor-pointer'
                      unoptimized
                    />

                    <Image
                      src='/images/icon-ig.png'
                      alt='Instagram Icon'
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='w-[20px] h-auto transition-transform duration-300 hover:scale-150 cursor-pointer'
                      unoptimized
                    />

                    <Image
                      src='/images/icon-youtube.png'
                      alt='Youtube Icon'
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='w-[20px] h-auto transition-transform duration-300 hover:scale-150 cursor-pointer'
                      unoptimized
                    />

                    <Image
                      src='/images/icon-printerst.png'
                      alt='Printerst Icon'
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='w-[20px] h-auto transition-transform duration-300 hover:scale-150 cursor-pointer'
                      unoptimized
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col flex='auto'></Col>
            <Col flex='none'>
              <div className='mb-4'>
                <Image
                  src='/images/icon-location.png'
                  alt='Location Icon'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-[20px] h-auto me-2'
                  unoptimized
                />
                <span>11/67 Alley 06, Mieu Nha Street, Nam Tu Liem District, Hanoi</span>
              </div>

              <div className='mb-4 '>
                <Image
                  src='/images/icon-phone.png'
                  alt='Phone Icon'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-[20px] h-auto me-2'
                  unoptimized
                />
                <a href='tel:+842422421212' className='text-white'>
                  Tel: (+84) 242 242 1212
                </a>
              </div>

              <div className='mb-4 '>
                <Image
                  src='/images/icon-mail.png'
                  alt='Mail Icon'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-[20px] h-auto me-2'
                  unoptimized
                />
                <a href='mailto:info@vietnamexploration.com' className='text-white'>
                  Email: info@vietnamexploration.com
                </a>
              </div>

              <div>
                <Image
                  src='/images/icon-whatapp.png'
                  alt='Whats App Icon'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-[20px] h-auto me-2'
                  unoptimized
                />
                <span>Mobile & WhatsApp: (+84) 98 973 8086</span>
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={24} className='my-5'>
          <hr />
        </Col>

        <Col span={24}>
          <div className='flex justify-between'>
            <span>© 2025 Vietnam Exploration</span>
            <div className='flex gap-10'>
              <span>General Terms and Conditions</span>
              <span>Contact</span>
              <span>Legal notices</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
