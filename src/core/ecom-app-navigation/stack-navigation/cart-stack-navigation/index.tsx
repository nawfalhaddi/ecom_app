import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Cart from "../../../../packages/ecom-app-cart/pages/Cart";
import Routes from "../../Routes";

const CartNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Cart} component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigation;
