import React from 'react'
import { Link } from 'react-router';
import { Row, Col, Image, PageHeader } from 'react-bootstrap';

require('./stylesheets/style.scss')

const Price = ({}) => (
  <div>
    <PageHeader>Your confort and your healthy does not have price</PageHeader>
    <Row>
      <Col xs={6} md={4}>
        <Image src={require('./img/price.png')} rounded />
      </Col>
      <Col>
        <ul className='benefits'>
          <li>We delivery at your home as frequently as you wish</li>
          <li>You can make your shoplist on your phone</li>
          <li>We suggest recipes and products of the season</li>
          <li>We will find the best price for you</li>
          <li>We will suggest a good diet for you</li>
        </ul>
      </Col>
    </Row>
  </div>
)

export default Price
