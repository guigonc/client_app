import React from 'react'
import { Link } from 'react-router';
import { Carousel } from 'react-bootstrap';

const Home = ({}) => (
  <Carousel width={900}>
    <Carousel.Item>
      <img src={require("./img/home1.jpeg")}/>
      <Carousel.Caption>
        <h3>We buy for you</h3>
        <p>Get the food you want at the confort of your home.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={require("./img/home2.jpeg")}/>
      <Carousel.Caption>
        <h3>Eat well,live well</h3>
        <p>We are going to suggest the best diet for you</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={require("./img/home3.jpeg")}/>
      <Carousel.Caption>
        <h3>Dont waste money</h3>
        <p>We know where are the best products at the best price.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Home
