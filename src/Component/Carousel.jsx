import React from "react";

import "../ComponentUI/Carousel.css";
import { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slide active" : "slide"}
        >
          <img src={slide} alt="no" />
        </div>
      ))}
    </div>
  );
  // const [activeIndex, setActiveIndex] = useState(0);

  // const nextSlide = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };
  // const prevSlide = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // return (
  //   <div className="carousel">
  //     <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
  //       &lt;
  //     </button>
  //     <img
  //       src={images[activeIndex]}
  //       alt={`Slide ${activeIndex}`}
  //       className="carousel__img"
  //       height={"200vh"}
  //       width={"50%"}
  //     />
  //     <div className="btn-change">
  //       {" "}
  //       <button
  //         onClick={nextSlide}
  //         className="carousel__btn carousel__btn--next"
  //       >
  //         &gt;
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Carousel;
function HomeCarousel({ image2 }) {
  console.log(image2);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % image2.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [image2.length]);

  return (
    <div className="slider-container">
      {image2.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slide active" : "slide"}
        >
          <img src={slide} alt="no" />
        </div>
      ))}
    </div>
  );
  // const [activeIndex, setActiveIndex] = useState(0);

  // const nextSlide = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === image2.length - 1 ? 0 : prevIndex + 1
  //   );
  // };
  // const prevSlide = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === 0 ? image2.length - 1 : prevIndex - 1
  //   );
  // };
  // return (
  //   <div className="carousel">
  //     <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
  //       &lt;
  //     </button>
  //     <img
  //       src={image2[activeIndex]}
  //       alt={`Slide ${activeIndex}`}
  //       className="carousel__img"
  //       height={"200vh"}
  //       width={"50%"}
  //     />
  //     <div className="btn-change">
  //       {" "}
  //       <button
  //         onClick={nextSlide}
  //         className="carousel__btn carousel__btn--next"
  //       >
  //         &gt;
  //       </button>
  //     </div>
  //   </div>
  // );
}
export { HomeCarousel };
