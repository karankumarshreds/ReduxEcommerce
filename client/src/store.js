import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./reducers/productReducer";

import { cartAddItemReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  // productList will be the state
  // for the components
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartAddItemReducer,
});

const cartItemsFromStorage =
  JSON.parse(localStorage.getItem("cartItems")) || [];

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
