import profileIcon from "../Images/user-icon.png";
import { TbCoinRupee } from "react-icons/tb";
import { VscStarEmpty } from "react-icons/vsc";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GoTag, GoBell } from "react-icons/go";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

import "../UI/userDropdown.css";

import { Link } from "react-router-dom";

interface classType {
  classV: string;
}

const UserDropDownMenu = ({ classV }: classType) => {
  return (
    <ul className={`${classV}`}>
      <li className="dropdown-li">
        <Link to="/profile" className="router-link">
          <img src={profileIcon} alt="profileIcon" className="profile-icon" />
          <p className="dropdown-link">My Profile</p>
        </Link>
      </li>
      <li className="dropdown-li">
        <Link to="/super_coing" className="router-link">
          <TbCoinRupee className="dropdow-icons yellow-col" />
          <p className="dropdown-link">SuperCoin Zone</p>
        </Link>
      </li>
      <li className="dropdown-li">
        <Link to="/plus_zone" className="router-link">
          <VscStarEmpty className="dropdow-icons" />
          <p className="dropdown-link">Flipkart Plus Zone</p>
        </Link>
      </li>
      <li className="dropdown-li">
        <Link to="/orders" className="router-link">
          <BsBoxSeam className="dropdow-icons" />
          <p className="dropdown-link">Orders</p>
        </Link>
      </li>
      <li className="dropdown-li">
        <Link to="/whish_list" className="router-link">
          <AiOutlineHeart className="dropdow-icons" />
          <p className="dropdown-link">Whishlist</p>
        </Link>
      </li>
      <li className="dropdown-li">
        <Link to="/coupons" className="router-link">
          <GoTag className="dropdow-icons" />
          <p className="dropdown-link">Coupons</p>
        </Link>
      </li>
      <li className="dropdown-li">
        <Link to="/gift_cards" className="router-link">
          <FaRegCreditCard className="dropdow-icons" />
          <p className="dropdown-link">Gift Cards</p>
        </Link>
      </li>
      <li className="dropdown-li">
        <Link to="/notification" className="router-link">
          <GoBell className="dropdow-icons" />
          <p className="dropdown-link">Notification</p>
        </Link>
      </li>
      <li className="dropdown-li">
        <Link to="/logout" className="router-link">
          <MdOutlineLogout className="dropdow-icons" />
          <p className="dropdown-link">Logout</p>
        </Link>
      </li>
    </ul>
  );
};

export default UserDropDownMenu;
