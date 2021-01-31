import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Cart from "../../../../packages/ecom-app-cart/pages/Cart";
import Routes from "../../Routes";

const CartNavigation = () => {
  const Stack = createStackNavigator();
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.light_bg_color,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <Stack.Screen name={Routes.Cart} component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigation;
