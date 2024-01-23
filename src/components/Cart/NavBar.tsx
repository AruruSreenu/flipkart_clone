import { Link } from "react-router-dom";

import logo from "../../Images/logo-2.png";
import { BiSearch } from "react-icons/bi";

import "../../Styles/Cart/NavBar.css";
import BlueNavContainer from "../Main-Nav/blueNavContainer";
import NavUsermenu from "../../UI/NavUserMenu";

const NavBar = () => {
  return (
    <BlueNavContainer>
      <div className="logo-search-container">
        <div className=""></div>
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="cart-nav-logo" />
        </Link>
        <form className="cart-search-container">
          <input
            type="text"
            className="cart-search-input"
            placeholder="Search for products, brands and more"
          />
          <BiSearch className="cart-search-icon" />
        </form>
      </div>
      <div className="profile-info-container">
        <NavUsermenu iconIsThere={false} classNew="white-user-menu" />
      </div>
    </BlueNavContainer>
  );
};

export default NavBar;
