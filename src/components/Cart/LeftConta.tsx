import assure from "../../Images/assured-icons.png";

import { HiExclamationCircle } from "react-icons/hi";
import { CartData } from "./Carts";

import "../../Styles/Cart/LeftContai.css";
import { useState } from "react";
import { ProductObjModel } from "../Type/ReactTupe";

interface Props {
  productData: ProductObjModel[];
  cartLenght: number | undefined;
  productRemoveHandler: (id: number) => void;
}

const LeftContainer = ({
  productData,
  cartLenght,
  productRemoveHandler,
}: Props) => {
  const [productQuantities, setProductQuantities] = useState<{
    [key: number]: number;
  }>({});

  //here from
  const productQuantityHan = (
    id: number,
    action: "INCREMENT" | "DECREMENT"
  ) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]:
        action === "INCREMENT"
          ? (prevQuantities[id] || 0) + 1
          : (prevQuantities[id] || 0) - 1,
    }));
  };
  //here
  const filterUniqueItems = (
    items: CartData["cartProduct"]["ProductItems"]
  ) => {
    const uniqueItems: CartData["cartProduct"]["ProductItems"] = [];
    const seenIds: Set<number> = new Set();
    for (const eachItem of items) {
      if (!seenIds.has(eachItem.id)) {
        uniqueItems.push(eachItem);
        seenIds.add(eachItem.id);
      }
    }

    return uniqueItems;
  };

  const uniqueItems = filterUniqueItems(productData || []);

  const removeHandler = (id: number) => {
    productRemoveHandler(id);
  };

  return (
    <div className="cart-left-nav-container">
      <div className="tabs-main-container">
        <div className="tabs-container">
          <button className="tab-button special-tab">
            Flipkart ({cartLenght})
          </button>
          <button className="tab-button">Grocery</button>
        </div>
      </div>

      <div className="car-address-container">
        <p className="cart-address-text">
          Delivery to: <span className="bold-address">Hyderabad - 500090</span>
        </p>
        <button className="address-change-button">Change</button>
      </div>

      {uniqueItems.map((eachItem) => (
        <div key={eachItem.id} className="cart-product-container">
          <div className="product-img-count-container">
            <img
              src={eachItem.image}
              alt={eachItem.title}
              className="cart-prdouct-img"
            />
            <div className="counter-container">
              <button
                className="counter-buttons"
                onClick={() => productQuantityHan(eachItem.id, "DECREMENT")}
              >
                -
              </button>
              <input type="text" className="conter-space" defaultValue={1} />
              <button
                className="counter-buttons"
                onClick={() => productQuantityHan(eachItem.id, "INCREMENT")}
              >
                +
              </button>
            </div>
          </div>

          <div className="product-info-container">
            <div className="product-date-heading-container">
              <a href="/1" className="product-heading">
                {eachItem.title}
              </a>
              <p className="delivery-date-info">
                Delivery by Tue Oct 31 |{" "}
                <del className="product-delevery-price">40</del>
                <span className="delivery-changes"> Free</span>
              </p>
            </div>

            <p className="product-info">{eachItem.description}</p>
            <div className="seller-assure-container">
              <p className="seller-company-asuure">Seller:PramCreation </p>
              <img src={assure} alt="asure" className="asure-icon" />
            </div>
            <div className="prices-cotnainer">
              <del className="actual-price">999</del>
              <h4 className="offer-price">{Math.round(eachItem.price)}</h4>
              <p className="offer-info">86% Off 5 offers applied</p>
              <HiExclamationCircle className="exclamation-icon" />
            </div>
            <div className="save-remove-button">
              <button className="save-button">SAVE FOR LATER</button>
              <button
                className="save-button"
                onClick={() => removeHandler(eachItem.id)}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="place-order-button">
        <button className="place-button">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default LeftContainer;
