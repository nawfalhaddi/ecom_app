import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../../../../packages/ecom-app-users/pages/Profile";
import ProfileHeader from "../../../ecom-app-interface/components/ProfileHeader";
import Routes from "../../Routes";

const ProfileNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          header: (props) => <ProfileHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
