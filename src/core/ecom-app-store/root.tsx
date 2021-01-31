import { combineReducers } from "redux";
import ProductReducer from "./products/reducer";
import AddressesReducer from "./addresses/reducer";

const rootReducer = combineReducers({
  ProductReducer: ProductReducer,
  AddressesReducer: AddressesReducer,
});

export default rootReducer;
