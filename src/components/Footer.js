import React from 'react';
import { Row, Col } from 'antd';

const Footer = () => <footer className="Footer">
  <Row gutter={8}>
    <Col span={12}>
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
    <Col span={12}>
      <p>
        Any questions? Send us mail to
        <a target="_blank" href="mailto:alvarcarto@gmail.com"> alvarcarto@gmail.com</a>.
      </p>
      <p>We are located at Luova Laboratorio, Saaristonkatu 9, 90100 Oulu, Finland.</p>
    </Col>
  </Row>
</footer>;

export default Footer;
