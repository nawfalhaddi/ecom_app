import { Action } from "redux";
import { AddressesReducerState, AddressAction } from "../../types";

const initialState: AddressesReducerState = {
  addresses: [],
};

export default (state = initialState, action: Action<AddressAction>) => {
  switch (action.type) {
    default:
      return state;
  }
};
