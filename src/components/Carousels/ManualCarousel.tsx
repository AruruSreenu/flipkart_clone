import { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductObjModel } from "../Type/ReactTupe";
import { NextArrow, PrevArrow } from "./CarouselButton";
import BoldNextArrow from "../../Images/2203522_arrow_botton_next_right_icon.png";
import { Link } from "react-router-dom";

import { BiRupee } from "react-icons/bi";

import "../../Styles/ManualCarousel.css";

interface Props {
  productData: ProductObjModel[];
  slideNumber: number;
  carouselHeading: string;
  CarouselWidth: string;
  path: string;
}

const ManualSlider = ({
  productData,
  slideNumber,
  carouselHeading,
  CarouselWidth,
  path,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slideNumber,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    nextArrow: <NextArrow onClick={() => setCurrentIndex(currentIndex + 1)} />,
    prevArrow: <PrevArrow onClick={() => setCurrentIndex(currentIndex - 1)} />,
  };

  return (
    <>
      <Link to={path} className="header-button-container">
        <h3 className="carousel-heading">{carouselHeading}</h3>
        <button type="button" className="blue-next-button">
          <img
            src={BoldNextArrow}
            alt="bold-next-icon"
            className="bold-next-icon"
          />
        </button>
      </Link>
      <div style={{ width: CarouselWidth }}>
        <Slider {...settings}>
          {productData.map((item, index) => (
            <div key={index} className="custom-slide-item">
              <Link to={`${item.id}`} className="heading-img-text-container">
                <img
                  src={item.image}
                  alt={`${item.id}`}
                  className="product-img"
                />
                <p className="product-name">{item.category}</p>
                <div className="rupee-price-container">
                  <BiRupee className="indi-rupee-icon" />
                  <p className="product-price-1">
                    {Math.round(item.price)}{" "}
                    <del className="deleted-price">
                      {Math.round(item.price + 200)}
                    </del>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ManualSlider;
