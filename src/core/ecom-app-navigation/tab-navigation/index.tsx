import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CartNavigation from "../stack-navigation/cart-stack-navigation";
import ProductsNavigation from "../stack-navigation/products-stack-navigation";
import ProfileNavigation from "../stack-navigation/profile-stack-navigation";
export const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileNavigation} />
      <Tab.Screen name="Home" component={ProductsNavigation} />
      <Tab.Screen name="Cart" component={CartNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
