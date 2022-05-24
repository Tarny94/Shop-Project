import React, { useEffect, useState } from "react";
import "../styles/Product.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImagesProduct = ({ images, title }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    setImage(images);
  }, [images]);

  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows>
        {image &&
          image.map((data) => (
            <div className="product-images" key={data}>
              <img src={data} className="product-image" alt={title} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default ImagesProduct;
