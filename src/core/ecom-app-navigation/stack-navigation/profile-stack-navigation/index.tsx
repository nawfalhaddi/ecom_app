import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";
import Profile from "../../../../packages/ecom-app-users/pages/Profile";
import Settings from "../../../../packages/ecom-app-users/pages/Settings";
import Shipping from "../../../../packages/ecom-app-users/pages/Shipping";
import ProfileHeader from "../../../ecom-app-interface/components/ProfileHeader";
import Routes from "../../Routes";

const ProfileNavigation = () => {
  const Stack = createStackNavigator();
  const { t } = useTranslation(["settings", "profile"]);
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
        name={Routes.Profile}
        component={Profile}
        options={{
          header: (props) => <ProfileHeader {...props} />,
        }}
      />
      <Stack.Screen
        name={Routes.Settings}
        component={Settings}
        options={{
          title: t("profile:Settings"),
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name={Routes.Shipping}
        component={Shipping}
        options={{
          title: t("profile:Shipping_Addresses"),
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
