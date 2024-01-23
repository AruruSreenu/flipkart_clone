import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import LeftContainer from "./LeftConta";
import RightContainer from "./RightConta";
import { ProductObjModel } from "../Type/ReactTupe";
import { RootState } from "../../store/Store";

import { removeProduct } from "../../Slice/ProductSlice";

import "../../Styles/Cart/Cart.css";
import Footer from "./Footer";

interface CartProdcut {
  ProductItems: ProductObjModel[];
}

export interface CartData {
  cartProduct: CartProdcut;
}

const Carts = () => {
  const dispatch = useDispatch();
  const productDatapersist = useSelector(
    (state: RootState) => state.producting
  );

  const productRemoveHandler = (id: number) => {
    if (productDatapersist) {
      dispatch(removeProduct(id));
    }
  };

  const totalPrice = productDatapersist?.ProductItems.reduce(
    (total, item) => total + item.price,
    0
  );
  const cartLenght = productDatapersist?.ProductItems.length;

  return (
    <div className="cart-container">
      <NavBar />
      <div className="middle-content-container">
        <LeftContainer
          productData={productDatapersist?.ProductItems}
          cartLenght={cartLenght}
          productRemoveHandler={productRemoveHandler}
        />
        <RightContainer totalPrice={totalPrice} cartLenght={cartLenght} />
      </div>
      <Footer />
    </div>
  );
};

export default Carts;
