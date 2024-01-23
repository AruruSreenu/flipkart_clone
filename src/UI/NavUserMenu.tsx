import "./NavUserMenu.css";

import { useState } from "react";
import UserDropDownMenu from "../UI/userDropdownmenu";

import { IoIosArrowUp } from "react-icons/io";

import user from "../Images/user-icon.png";

import { ProductObjModel } from "../components/Type/ReactTupe";

interface CartProdcut {
  ProductItems: ProductObjModel[];
}

interface CartData {
  cartProduct: CartProdcut;
}

interface Props {
  iconIsThere: boolean;
  classNew: string;
}

const NavUsermenu = ({ iconIsThere, classNew }: Props) => {
  const [isEnter, setIsenter] = useState<boolean>(false);
  const [isEnterDot, setIsenterDot] = useState<boolean>(false);
  const [productData, setProductData] = useState<CartData | null>(null);

  const dropDownHandler = () => {
    setIsenter(!isEnter);
  };

  return (
    <div
      className="menu-contaier-top"
      onMouseEnter={dropDownHandler}
      onMouseLeave={dropDownHandler}
    >
      <button className={`menu-container menu-container-hover ${classNew}`}>
        {iconIsThere && (
          <img alt="menu-icon" className="nav-menu-icon" src={user} />
        )}
        <p className="nav-menu-text">aruri</p>
        <IoIosArrowUp
          className={isEnter ? "none-rotate-arrow" : "rotate-arrow"}
        />
      </button>
      {isEnter && <UserDropDownMenu classV="item-list" />}
    </div>
  );
};

export default NavUsermenu;
