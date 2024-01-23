import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

import shopIcon from "../../Images/shop-icon.png";

import { PiShoppingCart } from "react-icons/pi";
import threeDots from "../../Images/dots.png";
import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { SlEarphonesAlt } from "react-icons/sl";
import { PiWaveTriangle } from "react-icons/pi";

import "../../Styles/NavMenu.css";
import NavUsermenu from "../../UI/NavUserMenu";

const NavMenu = () => {
  const productDatapersist = useSelector(
    (state: RootState) => state.producting
  );
  const [isEnterDot, setIsenterDot] = useState<boolean>(false);

  const dropDownHandlerDot = () => {
    setIsenterDot(!isEnterDot);
  };

  const productList = productDatapersist?.ProductItems;
  const Cartcount = productList?.length;

  return (
    <div className="nav-menu-container">
      <button className="menu-container">
        <Link to="seller" className="router-link">
          <img alt="menu-icon" className="nav-menu-icon" src={shopIcon} />
          <p className="nav-menu-text">Become a Seller</p>
        </Link>
      </button>
      <NavUsermenu iconIsThere={true} classNew="" />
      <button className="menu-container">
        <Link to="cart" className="router-link">
          <div className="cart-count-container">
            <PiShoppingCart className="nav-menu-icon nav-menu-icon-special" />
            <div className="cart-count">{Cartcount}</div>
          </div>
          <p className="nav-menu-text">Cart</p>
        </Link>
      </button>
      <div
        className="dots-drop-down"
        onMouseEnter={dropDownHandlerDot}
        onMouseLeave={dropDownHandlerDot}
      >
        <div className="menu-container menu-container-hover">
          <img alt="dots-icon" className="dots-icon" src={threeDots} />
        </div>
        {isEnterDot && (
          <ul className="item-list item-list-left">
            <li className="dropdown-li">
              <Link to="notification_pre" className="router-link">
                <GoBell className="dropdow-icons" />
                <p className="dropdown-link">Notification Preferences</p>
              </Link>
            </li>
            <li className="dropdown-li">
              <Link to="customer_care" className="router-link">
                <SlEarphonesAlt className="dropdow-icons" />
                <p className="dropdown-link">24x7 Customer Care</p>
              </Link>
            </li>
            <li className="dropdown-li">
              <Link to="advertise" className="router-link">
                <PiWaveTriangle className="dropdow-icons" />
                <p className="dropdown-link">Advertise</p>
              </Link>
            </li>
            <li className="dropdown-li">
              <Link to="downolad" className="router-link">
                <BsDownload className="dropdow-icons" />
                <p className="dropdown-link">Downolad App</p>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
