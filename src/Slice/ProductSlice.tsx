import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ProductObjModel } from "../components/Type/ReactTupe";

interface cartState {
  ProductItems: ProductObjModel[];
}

const initialState: cartState = {
  ProductItems: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    cartProduct: (state, action: PayloadAction<ProductObjModel>) => {
      // state.ProductItems.push(action.payload);
      const existingItem = state.ProductItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.ProductItems.push(action.payload);
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const index = state.ProductItems.findIndex(
        (eachItem) => eachItem.id === action.payload
      );
      if (index !== -1) {
        state.ProductItems.splice(index, 1);
      }
    },
  },
});

export const { cartProduct, removeProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
