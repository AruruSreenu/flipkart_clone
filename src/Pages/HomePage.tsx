import NavBar from "../components/Main-Nav/NavBar";

import { Link } from "react-router-dom";

import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import SimpleSlider from "../components/Carousels/InfiniteCarousel";
import ManualSlider from "../components/Carousels/ManualCarousel";
import ManualSlider2 from "../components/Carousels/ManualCarousel-2";

import tenPercentDiscount from "../Images/ten_percent_discount.webp";
import threeBanner1 from "../Images/three-banner-1.webp";
import threeBanner2 from "../Images/three-banner-2.webp";
import threeBanner3 from "../Images/three-banner-3.webp";

import "../Styles/Home.css";

// import useFetch from "../Api/ProductData";

import { MostFirstData } from "../Data/ItemsData";

import ItemCard from "../UI/ItemCard";
import CoupunBanner from "../Images/coupun-code.webp";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductData(json))
      .catch((error) => setErrorMsg(error.message));
  }, [url]);

  const firstSliderData = productData.slice(0, 8);
  const secondSliderData = productData.slice(8, 16);
  const thirdSliderData = productData.slice(16, 20);

  return (
    <div className="main-container">
      <NavBar />
      <div className="below-container">
        <div className="below-inner-container">
          <CategoryBanner />
          <SimpleSlider />
          <Link to="ten_percent_discount">
            <img
              src={tenPercentDiscount}
              className="ten-percent-discount"
              alt="ten-percent-discount"
            />
          </Link>
          <div className="first-slider-container">
            <div className="first-products-container">
              <ManualSlider2
                slideNumber={5}
                CarouselWidth="100%"
                productData={MostFirstData}
                carouselHeading="Best Electronics Offers"
                path="electronic_offers"
              />
            </div>

            <div className="first-slider-inner-container">
              <Link to="flight-code">
                <img
                  src={CoupunBanner}
                  alt="coupun-banner"
                  className="coupun-banner"
                />
              </Link>
            </div>
          </div>
          <div className="three-banner-container">
            <Link to="three_banner_1" className="banner-link-1">
              <img
                src={threeBanner1}
                alt="three-banner-1"
                className="three-banner"
              />
            </Link>
            <Link to="three_banner_2" className="banner-link-1">
              <img
                src={threeBanner2}
                alt="three-banner-2"
                className="three-banner"
              />
            </Link>
            <Link to="three_banner_3" className="banner-link-1">
              <img
                src={threeBanner3}
                alt="three-banner-3"
                className="three-banner"
              />
            </Link>
          </div>
          <ItemCard>
            <ManualSlider
              slideNumber={6}
              CarouselWidth="100%"
              productData={firstSliderData}
              carouselHeading={"Shirts & Accessories"}
              path="shirts_accessories"
            />
          </ItemCard>
          <ItemCard>
            <ManualSlider
              slideNumber={6}
              CarouselWidth="100%"
              productData={secondSliderData}
              carouselHeading={"Best of Electronics"}
              path="best_electronics"
            />
          </ItemCard>
          <ItemCard>
            <ManualSlider
              slideNumber={4}
              CarouselWidth="67%"
              productData={thirdSliderData}
              carouselHeading={"Women Clothes"}
              path="women_clothes"
            />
          </ItemCard>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
