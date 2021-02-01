import { RouteConfig, RouterConfigOptions } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { Product } from "../../data/types";

const ProductDetails = ({ route }: StackScreenProps<RouterConfigOptions>) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text>{route.params.product.title}</Text>
    </View>
  );
};

export default ProductDetails;
