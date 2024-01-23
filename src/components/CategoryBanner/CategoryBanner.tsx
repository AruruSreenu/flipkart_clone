import { Link } from "react-router-dom";

import "../../Styles/CategoryBanner.css";
import TopOffers from "../../Images/topOffers.webp";
import Grocery from "../../Images/grossery.webp";
import Mobiles from "../../Images/mobile.webp";
import Fashion from "../../Images/fashion.webp";
import Electronics from "../../Images/electronics.webp";
import HomeFurniture from "../../Images/Home & Furniture.webp";
import Appliances from "../../Images/Appliences.webp";
import Travel from "../../Images/Travel.webp";
import BeautyToy from "../../Images/Beauty, Toys & More.webp";
import TwoWheelers from "../../Images/Furniture.webp";

const CategoryBanner = () => {
  return (
    <div className="banner-item-container">
      <Link to="top_offers" className="banner-link">
        <img className="banner-image" src={TopOffers} alt={"Grocery"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Top Offers</p>
        </div>
      </Link>

      <Link to="mobile_tablets" className="banner-link">
        <img className="banner-image" src={Mobiles} alt={"Mobiles"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Mobiles & Tablets</p>
        </div>
      </Link>

      <Link to="electronics" className="banner-link">
        <img className="banner-image" src={Electronics} alt={"Electronics"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Electronics</p>
          {/* <img alt="arrow" src={downArrow} className="banner-arrow" /> */}
        </div>
      </Link>

      <Link to="tv_appliances" className="banner-link">
        <img className="banner-image" src={Appliances} alt={"Appliances"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">TVs & Appliances</p>
        </div>
      </Link>

      <Link to="fashion" className="banner-link">
        <img className="banner-image" src={Fashion} alt={"Fashion"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Fashion</p>
          {/* <img alt="arrow" src={downArrow} className="banner-arrow" /> */}
        </div>
      </Link>

      <Link to="beauty" className="banner-link">
        <img className="banner-image" src={BeautyToy} alt={"BeautyToy"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Beauty</p>
          {/* <img alt="arrow" src={downArrow} className="banner-arrow" /> */}
        </div>
      </Link>

      <Link to="home_furuniture" className="banner-link">
        <img
          className="banner-image"
          src={HomeFurniture}
          alt={"HomeFurniture"}
        />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Home & Kitchen</p>
          {/* <img alt="arrow" src={downArrow} className="banner-arrow" /> */}
        </div>
      </Link>

      <Link to="furniture" className="banner-link">
        <img className="banner-image" src={TwoWheelers} alt={"TwoWheelers"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Furniture</p>
          {/* <img alt="arrow" src={downArrow} className="banner-arrow" /> */}
        </div>
      </Link>

      <Link to="flights" className="banner-link">
        <img className="banner-image" src={Travel} alt={"Travel"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Flights</p>
        </div>
      </Link>

      <Link to="grocery" className="banner-link">
        <img className="banner-image" src={Grocery} alt={"Grocery"} />
        <div className="banner-item-arrow-container">
          <p className="banner-text">Grocery</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryBanner;
