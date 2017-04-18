import React from 'react';
import { Row, Col } from 'antd';

const colLayout = {
  span: 24,
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 12 },
};

const Footer = () => <footer className="Footer">
  <Row gutter={8}>
    <Col {...colLayout}>
      <ul>
        <li>
           <a target="_blank" href="https://alvarcarto.com/help/#shipping_and_returns">Shipping &amp; Returns</a>
        </li>
        <li>
           <a target="_blank" href="https://alvarcarto.com/help">Frequently asked questions</a>
        </li>
        <li>
           <a target="_blank" href="https://alvarcarto.com/privacy">Privacy policy</a>
        </li>
      </ul>
    </Col>
    <Col {...colLayout}>
      <p>
        Any questions? Send us mail to
        <a target="_blank" href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
      </p>
      <p>We are located at Luova Laboratorio, Saaristonkatu 9, 90100 Oulu, Finland.</p>
    </Col>
  </Row>
</footer>;

export default Footer;
