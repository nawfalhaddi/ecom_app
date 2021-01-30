import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Products from "../../../../packages/ecom-app-products/pages/Products";
import Routes from "../../Routes";

const ProductsNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Products} component={Products} />
    </Stack.Navigator>
  );
};

export default ProductsNavigation;
