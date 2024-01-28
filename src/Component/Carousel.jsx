import React from "react";

import "../ComponentUI/Carousel.css";
import { useState } from "react";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
        height={"200vh"}
        width={"50%"}
      />
      <div className="btn-change">
        {" "}
        <button
          onClick={nextSlide}
          className="carousel__btn carousel__btn--next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
function HomeCarousel({ image2 }) {
  console.log(image2);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === image2.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? image2.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={image2[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
        height={"200vh"}
        width={"50%"}
      />
      <div className="btn-change">
        {" "}
        <button
          onClick={nextSlide}
          className="carousel__btn carousel__btn--next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
export { HomeCarousel };
