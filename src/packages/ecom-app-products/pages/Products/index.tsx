import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../core/ecom-app-store//types";
const Products = () => {
  const { availableProducts } = useSelector(
    (state: RootState) => state.ProductReducer
  );

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Products;
