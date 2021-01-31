import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import Routes from "../Routes";
import CartNavigation from "../stack-navigation/cart-stack-navigation";
import ProductsNavigation from "../stack-navigation/products-stack-navigation";
import ProfileNavigation from "../stack-navigation/profile-stack-navigation";
import { Feather, AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

export const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const theme = useContext(ThemeContext);
  const { t, i18n } = useTranslation("tabBar");

  return (
    <Tab.Navigator
      initialRouteName={Routes.HomeStack}
      backBehavior={"initialRoute"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === Routes.ProfileStack) {
            iconName = "person-outline";
          } else if (route.name === Routes.HomeStack) {
            iconName = "home-outline";
          } else if (route.name === Routes.CartStack) {
            iconName = "cart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: "gray",
        style: {
          height: 80,
          paddingBottom: 20,
          paddingVertical: 20,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          position: "absolute",
          alignItems: "center",
          transform: [{ scaleX: i18n.dir() === "rtl" ? -1 : 1 }],
        },
        labelStyle: {
          fontSize: 12,
          transform: [{ scaleX: i18n.dir() === "rtl" ? -1 : 1 }],
        },
        tabStyle: {
          borderColor: "#EDEDED",
          borderRightWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name={Routes.ProfileStack}
        options={{ title: t("Profile") }}
        component={ProfileNavigation}
      />
      <Tab.Screen
        name={Routes.HomeStack}
        options={{ title: t("Home") }}
        component={ProductsNavigation}
      />
      <Tab.Screen
        name={Routes.CartStack}
        options={{
          title: t("Cart"),
          tabBarBadge: 0,
        }}
        component={CartNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
