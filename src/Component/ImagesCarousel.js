import React from "react";
import "../styles/Product.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImagesCarousel = ({ images, title, infiniteLoop }) => {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop={infiniteLoop}>
        {images &&
          images.map((data) => (
            <img src={data} className="product-image" alt={title} />
          ))}
      </Carousel>
    </div>
  );
};

export default ImagesCarousel;
