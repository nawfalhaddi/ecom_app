export type ProductAction = {
  type: string;
  payload: any;
};
export type AddressAction = {
  type: string;
  payload: any;
};
export type ProductReducerState = {
  products: [];
};
export type AddressesReducerState = {
  addresses: [];
};

export type RootState = {
  ProductReducer: ProductReducerState;
  AddressesReducer: AddressesReducerState;
};
