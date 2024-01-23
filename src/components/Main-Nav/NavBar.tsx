import { Link } from "react-router-dom";

import logo from "../../Images/logo.png";

// import smallLogo from "../../Images/small-flipkart-text-logo.png";
import smallLogo2 from "../../Images/small-flipkart-text-logo1.png";

import grocery from "../../Images/grocery.png";

import "../../Styles/NavBar.css";
import NavMenu from "./NavMenu";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="flipkar-grocery-button">
        <button className="top-nav-buttons" type="button">
          <img src={smallLogo2} alt="small" className="small-logo-1" />
          <p className="small-logo">Flipkart</p>
        </button>
        <button className="top-nav-buttons2" type="button">
          <img src={grocery} alt="grocery" className="grocery-logo" />
          <p className="grocery-text">Grocery</p>
        </button>
      </div>

      <div className="nav-inner-container">
        <Link to="/" className="logo-link">
          <img className="nav-logo" alt="logo" src={logo} />
        </Link>
        <div className="search-meni-container">
          <SearchInput />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
