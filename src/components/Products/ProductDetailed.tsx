import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartProduct } from "../../Slice/ProductSlice";

import { ProductObjModel } from "../Type/ReactTupe";

import { BiSearch, BiRupee } from "react-icons/bi";

import upArrow from "../../Images/up-arrow.png";
import downArrow from "../../Images/down-arrow.png";
import logo from "../../Images/logo-2.png";

import { TbShoppingCartFilled } from "react-icons/tb";
import { BsFillLightningFill } from "react-icons/bs";

import BlueNavContainer from "../Main-Nav/blueNavContainer";
import UserDropDownMenu from "../../UI/userDropdownmenu";

import "../../Styles/Product/ProductDetailed.css";
const initialObject = {
  category: "",
  description: "",
  id: 0,
  image: "",
  price: 0,
  rating: {},
  title: "",
};

const ProductDetailed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const productId = params.productId;
  const [productDataDet, setProductDataDet] = useState<ProductObjModel | null>(
    initialObject
  );
  const [productRefDataDet, setProductRefDataDet] = useState<ProductObjModel[]>(
    []
  );

  const [errorMsgDet, setErrorMsgDet] = useState<string | null>(null);

  const [mouseEntered, setMouseEntered] = useState<boolean>(false);

  const mouseEnterHandler = () => {
    setMouseEntered(!mouseEntered);
  };

  const url = `https://fakestoreapi.com/products/${productId}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProductDataDet(json))
      .catch((error) => setErrorMsgDet(error.message));
  }, [url]);

  const { id, price, title, description, image } =
    productDataDet as ProductObjModel;

  const addItemHandler = (id: number) => {
    if (productDataDet) {
      dispatch(cartProduct(productDataDet));
    }
    return navigate("/cart");
  };

  return (
    <div className="detailed-container">
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
        <div
          className="profile-info-container"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseEnterHandler}
        >
          <p className="profile-name">
            aruri{" "}
            <img
              alt="arrows"
              className="arrow-icon arrow-hover"
              src={mouseEntered ? upArrow : downArrow}
            />
          </p>

          {mouseEntered && <UserDropDownMenu classV="cart-item-li" />}
        </div>
      </BlueNavContainer>
      <div className="product-middle-container">
        <div className="product-img-button-container">
          <img src={image} alt={title} className="product-image" />
          <div className="product-button-container">
            <button
              className="product-button yellow-product-button"
              onClick={() => addItemHandler(id)}
            >
              <TbShoppingCartFilled />
              GO TO CART
            </button>
            <button className="product-button orange-product-button">
              <BsFillLightningFill />
              BUY NOW
            </button>
          </div>
        </div>

        <div className="title-price-description-container">
          <p className="product-title">{title}</p>
          <div className="product-price">
            <BiRupee className="rupee-icon" />
            {price}
          </div>
          <p className="product-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailed;
