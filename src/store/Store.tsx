import { configureStore } from "@reduxjs/toolkit";
import Productreducer from "../Slice/ProductSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
//here changes
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  producting: Productreducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
