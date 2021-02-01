import { Action } from "redux";
import { ProductAction, ProductReducerState } from "../../types";
import { FETCH_PRODUCTS } from "../constants";

const initialState: ProductReducerState = {
  products: [],
};

export default (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
