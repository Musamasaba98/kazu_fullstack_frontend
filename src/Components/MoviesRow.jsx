import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return currentSlide ? (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack
        style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}
      />
    </div>
  ) : (
    false
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return onClick ? (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward
        style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}
      />
    </div>
  ) : (
    false
  );
};
const MoviesRow = ({ children }) => {
  let settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return <Slider {...settings}>{...children}</Slider>;
};

export default MoviesRow;
