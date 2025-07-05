import { Row, Col, Segmented } from "antd"

import Logo from "./components/Logo"

const menu: string[] = ["Home", "Who we are", "Destination", "Tour", "Blog", "Consultation"]

export default function Index() {
  return (
    <div className='section-container py-10 fixed top-0 left-0 right-0 z-50'>
      <Row className='items-center relative'>
        <Col span={4}>
          <Logo />
        </Col>

        <Col flex='auto'>
          <div className='flex justify-center'>
            <Segmented<string> options={menu} shape='round' size='large' />
          </div>
        </Col>

        <Col span={4}></Col>
      </Row>
    </div>
  )
}
