import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";
import Products from "../../../../packages/ecom-app-products/pages/Products";
import HomeHeader from "../../../ecom-app-interface/components/HomeHeader";
import Routes from "../../Routes";

const ProductsNavigation = () => {
  const Stack = createStackNavigator();
  const { t } = useTranslation("home");
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
      <Stack.Screen
        name={Routes.Products}
        component={Products}
        options={{
          header: (props) => <HomeHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductsNavigation;
