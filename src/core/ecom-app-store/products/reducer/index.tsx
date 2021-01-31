import { Action } from "redux";
import { ProductAction, ProductReducerState } from "../../types";

const initialState: ProductReducerState = {
  availableProducts: [],
};

export default (state = initialState, action: Action<ProductAction>) => {
  switch (action.type) {
    default:
      return state;
  }
};
