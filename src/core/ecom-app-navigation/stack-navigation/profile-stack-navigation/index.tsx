import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../../../../packages/ecom-app-users/pages/Profile";
import Routes from "../../Routes";

const ProfileNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
