import { BiCopyright } from "react-icons/bi";

import "../../Styles/Cart/Footer.css";

const Footer = () => {
  return (
    <div className="cart-footer-container">
      <div className="privecy-copy-container">
        <p className="Policy-text">
          Policies:Returns Policy | Terms of use | Security | Privacy |
          Infringement
        </p>
        <div className="copy-container">
          <BiCopyright className="copy-icon" />
          <p className="copy-right-text">2007-2023 Flipkart.com</p>
        </div>
      </div>
      <p className="help-footer-text">
        Need help? Visit the <span className="help-text-blue">Help Center</span>{" "}
        or <span className="help-text-blue">Contact Us</span>
      </p>
    </div>
  );
};

export default Footer;
