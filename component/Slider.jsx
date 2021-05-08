import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        dynamicHeight={true}
        stopOnHover={false}
      >
        <div>
          <img src="images/carousel5.jpg" />
        </div>
        <div>
          <img src="images/carousel2.jpg" />
        </div>
        <div>
          <img src="images/carousel3.jpg" />
        </div>
        <div>
          <img src="images/carousel4.jpg" />
        </div>
        <div>
          <img src="images/carousel6.jpg" />
        </div>
      </Carousel>
    );
  }
}

export default Slider;
