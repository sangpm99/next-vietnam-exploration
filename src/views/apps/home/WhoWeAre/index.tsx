import { Row, Col, Button } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"

export default function WhoWeAre() {
  return (
    <div className="bg-[url('/images/who-we-are.jpg')] bg-cover bg-center px-[10%] py-20">
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
      </Row>
    </div>
  )
}
