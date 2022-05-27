import React from "react";
import "../styles/Product.scss";
import { Carousel as ExternalCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = ({ images, title, infiniteLoop }) => {
  return (
    <div className="carousel-wrapper">
      <ExternalCarousel infiniteLoop={infiniteLoop}>
        {images &&
          images.map((data) => (
            <img src={data} key={data} className="product-image" alt={title} />
          ))}
      </ExternalCarousel>
    </div>
  );
};

export default Carousel;
