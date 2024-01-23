import { AiFillSafetyCertificate } from "react-icons/ai";
import "../../Styles/Cart/RightContai.css";

interface Props {
  totalPrice: number | undefined;
  cartLenght: number | undefined;
}

const RightContainer = ({ totalPrice, cartLenght }: Props) => {
  const doubleTotalPrice = totalPrice && totalPrice * 2;
  const discountPrice =
    totalPrice && doubleTotalPrice && doubleTotalPrice - totalPrice;

  return (
    <div className="left-main-container">
      <div className="cart-right-nav-container">
        <div className="price-details-container">
          <p className="price-details-text">PRICE DETAILS</p>
        </div>

        <div className="price-inner-container">
          <div className="each-price-container">
            <p className="price-text-item">Price ({cartLenght} item)</p>
            <p className="price-text-item">
              {doubleTotalPrice && Math.round(doubleTotalPrice)}
            </p>
          </div>
          <div className="each-price-container">
            <p className="price-text-item">Discount</p>
            <p className="price-text-item green-price">
              -{discountPrice && Math.round(discountPrice)}
            </p>
          </div>
          <div className="each-price-container">
            <p className="price-text-item">Delivery Charges</p>
            <p className="price-text-item green-price">
              <del className="deliver-chanrges-text">40</del> Free
            </p>
          </div>

          <div className="each-price-container bold-price">
            <p className="price-text-item ">Total Amount</p>
            <p className="price-text-item">
              {totalPrice && Math.round(totalPrice)}
            </p>
          </div>

          <div className="each-price-container">
            <p className="price-text-item green-price-info">
              You will Save {discountPrice && Math.round(discountPrice)} on this
              order
            </p>
          </div>
        </div>
      </div>

      <div className="safe-gaurd-container">
        <AiFillSafetyCertificate className="safe-gaurd-icon" />
        <p className="safe-gaurd-text">
          Safe and Secure Payments. Easy returns. 100% Authentic products.
        </p>
      </div>
    </div>
  );
};

export default RightContainer;
