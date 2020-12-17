import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../reducers/constants/product";
import axios from "axios";
import { backendURI } from "../utils/urls-map";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`${backendURI}/api/products`);
    for (let i = 0; i < 10000000; i++) {
      console.log();
    }
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};
