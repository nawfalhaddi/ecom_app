import axios from "../../../ecom-app-axios";
import { Product } from "../../../../packages/ecom-app-products/data/types";
import { FETCH_PRODUCTS } from "../constants";

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    await axios
      .get(`/products/`)
      .then((response) => {
        const products: Product[] = Object.values(response.data);
        dispatch({ type: FETCH_PRODUCTS, payload: products });
      })
      .catch((error) => {
        throw error;
      });
  };
};
