import React from 'react';
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel'
import bannerimg from "../images/bannerimg.jpg";
import land1 from "../images/land1.jpg";
import techimg from "../images/techimg.jpg";
import prog3 from "../images/prog3.jpg";
import prog4 from "../images/prog4.jpg";
import prog5 from "../images/prog5.jpg";
import prog6 from "../images/prog6.jpg";
import phoneimg from "../images/phoneimg.jpg";

const Slider = () =>{

    return (
<Carousel className="carousel">
  <Carousel.Item className="carouselitem">
    <img
      className="d-block w-100 carouselimage"
      src={prog4}
      alt="First slide"
    />
    <Carousel.Caption className="caption">
      <h3>Let your imagination run wild</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <div>
        <button className="bannerbutton">Start Now <strong>&rarr;</strong> </button>
        <button className="bannerbutton button1">Explore More <strong>&rarr;</strong> </button>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item className="carouselitem">
    <img
      className="d-block w-100 carouselimage"
      src={prog5}
      alt="Second slide"
    />

    <Carousel.Caption className="caption">
      <h3>Ready, Set, Go</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <div>
        <button className="bannerbutton">Start Now <strong>&rarr;</strong> </button>
        <button className="bannerbutton button1">Explore More <strong>&rarr;</strong> </button>
    </div>
    </Carousel.Caption>
  </Carousel.Item> */}
  <Carousel.Item className="carouselitem">
    <img
      className="d-block w-100 carouselimage"
      src={prog6}
      alt="Third slide"
    />

    <Carousel.Caption className="caption">
      <h3>Join Us Now</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <div>
        <button className="bannerbutton">Start Now<strong>&rarr;</strong> </button>
        <button className="bannerbutton button1">Explore More <strong>&rarr;</strong> </button>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                )
}

            
export default Slider;