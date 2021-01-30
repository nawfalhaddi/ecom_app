import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tab-navigation";

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
