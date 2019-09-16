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
           <a target="_blank" href="https://alvarcarto.com/help/#shipping_and_returns">Shipping &amp; returns</a>
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
      <p className="Footer__text">
        Any questions? Send us an email to
        <a target="_blank" href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
      </p>
      <p className="Footer__text">Rantakatu 3, 90100 Oulu, Finland</p>
      <p className="Footer__text">Alvar Carto Oy (VAT ID: FI28852264)</p>
    </Col>
  </Row>
</footer>;

export default Footer;
