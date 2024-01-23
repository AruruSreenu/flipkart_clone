import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tachueCarousel from "../../Images/tachue-corousel.webp";
import girlCarousel from "../../Images/girl-corousel.webp";
import flightCarousel from "../../Images/flight-carousel.webp";
import { NextArrow, PrevArrow } from "./CarouselButton";

import { Link } from "react-router-dom";

import "../../Styles/InfiniteCarousel.css";

const bannerData = [
  {
    photo: flightCarousel,
    label: "image1",
    path: "flights_coupons",
  },
  {
    photo: girlCarousel,
    label: "image2",
    path: "flights_deals",
  },
  {
    photo: tachueCarousel,
    label: "image3",
    path: "flights_offers",
  },
];

// const CustomDot = (index: number) => (
//   <div className="custom-dot-container">
//     {/* You can customize the content of the dots here */}
//     Dot {index + 1}
//   </div>
// );
const SimpleSlider: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    // customPaging: (i) => CustomDot(i),
  };

  return (
    <div className="carousel-container-1">
      <Slider {...settings}>
        {bannerData.map((step) => (
          <Link to={step.path} key={step.label}>
            <img
              src={step.photo}
              alt={step.label}
              style={{
                borderRadius: "0px",
                height: "100%",
                display: "block",
                overflow: "hidden",
                width: "100%",
                cursor: "pointer",
              }}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
