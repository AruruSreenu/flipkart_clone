import { footerData } from "../../Data/ItemsData";
import { IconParaData } from "../../Data/ItemsData";

import "../../Styles/Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import partnerImg from "../../Images/partnerImage.svg";

const Footer = () => {
  const { about, help, consumer, social, mailUs, register } = footerData;

  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="left-footer-container">
          <div className="three-right-footer">
            <ul className="footer-left-ul">
              <li className="footer-headings">ABOUT</li>
              {about.map((eachItem, index) => (
                <li key={index} className="footer-left-each-li">
                  {eachItem}
                </li>
              ))}
            </ul>
            <ul className="footer-left-ul">
              <li className="footer-headings">HELP</li>
              {help.map((eachItem, index) => (
                <li key={index} className="footer-left-each-li">
                  {eachItem}
                </li>
              ))}
            </ul>
            <ul className="footer-left-ul">
              <li className="footer-headings">CONSUMER POLICY</li>
              {consumer.map((eachItem, index) => (
                <li key={index} className="footer-left-each-li">
                  {eachItem}
                </li>
              ))}
            </ul>
          </div>
          <div className="three-footer-container">
            <ul className="footer-left-ul">
              <li className="footer-headings">SOCIAL</li>
              {social.map((eachItem, index) => (
                <li key={index} className="footer-left-each-li">
                  {eachItem}
                </li>
              ))}
            </ul>
            <div className="middle-footer-line"></div>
            {/* </div> */}
            {/* <div className="right-footer-container"> */}
            <ul className="footer-left-ul-r">
              <li className="footer-headings">Mail Us</li>
              {mailUs.map((eachItem, index) => (
                <li key={index} className="footer-left-each-li-r">
                  {eachItem}
                </li>
              ))}
            </ul>
            <ul className="footer-left-ul-r">
              <li className="footer-headings">Register Office Address:</li>
              {register.map((eachItem, index) => (
                <li key={index} className="footer-left-each-li-r">
                  {eachItem}
                </li>
              ))}
              <li className="footer-left-each-li-r">
                Telephone:{" "}
                <span className="telephone-number">044-45614700</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-footer-container">
        <div className="bottom-inner-container">
          <div className="each-item">
            {IconParaData.map((eachItem, index) => (
              <div key={index} className="icon-para-li">
                <eachItem.icon className="footer-icon" />
                <p className="footer-bottom-para">{eachItem.para}</p>
              </div>
            ))}
            <div className="copyright-container">
              <AiOutlineCopyrightCircle className="copyright-icon" />
              <p className="copyright-text">2007-2023 Flipkart.com</p>
            </div>
          </div>

          <img src={partnerImg} className="partners-image" alt="partners" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
